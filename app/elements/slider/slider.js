const mainSliderUp = new Swiper(document.querySelector('.swiper-container[data-slider="main-upper"]'), {
  slidesPerView: 1,
  loop: true,
  effect: 'fade',
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  simulateTouch: false,
})

const mainSlider = new Swiper(document.querySelector('.swiper-container[data-slider="main"]'), {
  slidesPerView: 1,
  spaceBetween: 40,
  loop: true,
  pagination: {
    el: '.slider__pagination',
    type: 'bullets',
    bulletElement: 'div',
    bulletClass: 'slider__bullet',
    bulletActiveClass: 'slider__bullet_active'
  },
  navigation: {
    nextEl: '.slider__next_main',
    prevEl: '.slider__prev_main',
  },
  // effect: 'slide',
  thumbs: {
    swiper: mainSliderUp
  },
  // breakpoints: {
  //   992: {
  //     thumbs: {
  //       swiper: ''
  //     },
  //   },
  // }
})

