$(function () {
  $('.home-top-slider__inner').slick({
    fade: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7000,
  });
  let productsWeekMixer = mixitup($('.home-products__items'), {
    selectors: {
      control: ".home-products__filter-item"
    }
  });
  let newDesignkMixer = mixitup($('.new-design__items'), {
    selectors: {
      control: ".new-design__filter-item"
    }
  });
  // $('.filter-item').click(function () {
  //   $('.filter-item').removeClass('filter-item--active');
  //   $(this).addClass('filter-item--active');
  // });
});
