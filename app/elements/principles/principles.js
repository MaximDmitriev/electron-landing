const princsMainSlider = new Swiper(document.querySelector('.swiper-container[data-slider="princs-main"]'), {
  slidesPerView: 1,
  loop: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  simulateTouch: false,
  allowTouchMove: false,
  effect: 'fade'
})

const princsDescSlider = new Swiper(document.querySelector('.swiper-container[data-slider="princs-desc"]'), {
  slidesPerView: 1,
  loop: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  simulateTouch: false,
  allowTouchMove: false,
  effect: 'fade',
  thumbs: {
    swiper: princsMainSlider
  }
})

const princsTitleSlider = new Swiper(document.querySelector('.swiper-container[data-slider="princs-title"]'), {
  slidesPerView: 1,
  simulateTouch: false,
  loop: true,
  navigation: {
    nextEl: '.slider__next_principles',
    prevEl: '.slider__prev_principles',
  },
  effect: 'slide',
  thumbs: {
    swiper: princsDescSlider
  }
})


