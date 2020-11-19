const {
    src,
    dest,
    watch,
    parallel,
    series
} = require('gulp')
const browserSync = require('browser-sync').create();
const scss = require('gulp-sass');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const del = require('del');
let ttf2woff = require('gulp-ttf2woff');
let ttf2woff2 = require('gulp-ttf2woff2');
let plumber = require('gulp-plumber')


function browsersync() {
    browserSync.init({
        server: {
            baseDir: "app/"
        },
        notify: false
    });
}

function images() {
    return src('app/images/**/*.*')
        .pipe(imagemin([
            imagemin.gifsicle({
                interlaced: true
            }),
            imagemin.mozjpeg({
                quality: 75,
                progressive: true
            }),
            imagemin.optipng({
                optimizationLevel: 5
            }),
            imagemin.svgo({
                plugins: [{
                        removeViewBox: true
                    },
                    {
                        cleanupIDs: false
                    }
                ]
            })
        ]))
        .pipe(dest('dist/images'))
}

function styles() {
    return src('app/scss/style.scss')
        .pipe(autoprefixer({
            grid: true,
            overrideBrowserslist: ['last 10 versions']
        }))
        .pipe(scss({
            outputStyle: 'expanded'
        }))
        .pipe(dest('app/css'))
        .pipe(scss({
            outputStyle: 'compressed'
        }))
        .pipe(concat('style.min.css'))
        .pipe(dest('app/css'))
        .pipe(browserSync.stream())
}

function scripts() {
    return src([
            'node_modules/jquery/dist/jquery.js',
            'app/js/main.js'
        ])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('app/js'))
        .pipe(browserSync.stream())
}

function fonts() {
    return src('app/fonts/*.ttf')
        .pipe(plumber())
        .pipe(ttf2woff2())
        .pipe(dest('app/fonts/'))
        .pipe(ttf2woff())
        .pipe(dest('app/fonts/'))
}

function cleanDist() {
    return del('dist')
}

function build() {
    return src([
            'app/**/*.html',
            'app/js/main.min.js',
            'app/css/style.min.css'
        ], {
            base: 'app'
        })
        .pipe(dest('dist'))
}

function watching() {
    watch(['app/scss/**/*.scss'], styles)
    watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts)
    watch(['app/**/*.html']).on('change', browserSync.reload)
}
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.fonts = fonts;
exports.browsersync = browsersync;
exports.watching = watching;
exports.cleanDist = cleanDist;
exports.build = series(cleanDist, images, fonts, build);
exports.default = parallel(styles, scripts, browsersync, watching)