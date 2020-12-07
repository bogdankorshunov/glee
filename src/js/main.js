$(function () {
  $('.home-top-slider__inner').slick({
    fade: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7000,
  });
  let mixer = mixitup($('.home-products__items'));
  $('.filter-item').click(function(){
    $('.filter-item').removeClass("filter-item--active");
    $(this).addClass("filter-item--active");
});
});
