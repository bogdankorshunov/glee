$(function () {
  // $('.filter-item').on('click', function () {
  //   $('.filter-item').removeClass('filter-item--active');
  //   $(this).addClass('filter-item--active');
  // });
  //add class active on filters btn
  $('.shop-content__button').on('click', function () {
    $('.shop-content__button').removeClass('shop-content__button--active');
    $(this).addClass('shop-content__button--active');
  });

  $('.shop-content__button--grid').on('click', function () {
    $('.product-item').removeClass('product-item--list');
    $('.shop-content__items').removeClass('shop-content__items--list');
    $('.product-item').addClass('product-item--grid');
    $('.shop-content__items').addClass('shop-content__items--grid');
  });

  $('.shop-content__button--list').on('click', function () {
    $('.product-item').removeClass('product-item--grid');
    $('.shop-content__items').removeClass('shop-content__items--grid');
    $('.product-item').addClass('product-item--list');
    $('.shop-content__items').addClass('shop-content__items--list');
  });
  //selects style
  $('.select-styler').styler({});
  // not active stars on recent products
  $('.filter-recent-products__stars').rateYo({
    rating: 4,
    readOnly: true,
    fullStar: true,
    normalFill: '#d6d6d6',
    ratedFill: '#ffcc00',
    starWidth: '10px',
    spacing: '8px',
    starSvg:
      '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 47.94 47.94" style="enable-background:new 0 0 47.94 47.94;" xml:space="preserve">' +
      '<path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956C22.602,0.567,25.338,0.567,26.285,2.486z"/></svg>',
  });

  //start on list shop product
  $('.product-item__stars').rateYo({
    rating: 4,
    readOnly: true,
    fullStar: true,
    normalFill: '#d6d6d6',
    ratedFill: '#ffcc00',
    starWidth: '18px',
    spacing: '13px',
    starSvg:
      '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 47.94 47.94" style="enable-background:new 0 0 47.94 47.94;" xml:space="preserve">' +
      '<path d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956C22.602,0.567,25.338,0.567,26.285,2.486z"/></svg>',
  });
  $('.filter-price__input').ionRangeSlider({
    prefix: '$',
    prettify_separator: ',',
    step: 0.01,
    onStart: function (data) {
      $('.filter-price__from').text(data.from.toFixed(2));
      $('.filter-price__to').text(data.to.toFixed(2));
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });
  $('.home-top-slider__inner').slick({
    fade: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7000,
  });
  let productsWeekMixer = mixitup($('.products__items'), {
    selectors: {
      control: '.products__filter-item',
    },
  });
  let newDesignkMixer = mixitup($('.new-design__items'), {
    selectors: {
      control: '.new-design__filter-item',
    },
  });
});
