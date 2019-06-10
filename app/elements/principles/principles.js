const princsMainSlider = new Swiper(document.querySelector('.swiper-container[data-slider="princs-main"]'), {
  slidesPerView: 1,
  loop: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  simulateTouch: false,
  effect: 'slide'
})

const princsDescSlider = new Swiper(document.querySelector('.swiper-container[data-slider="princs-desc"]'), {
  slidesPerView: 1,
  loop: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  simulateTouch: false,
  effect: 'slide',
  thumbs: {
    swiper: princsMainSlider
  }
})

const princsTitleSlider = new Swiper(document.querySelector('.swiper-container[data-slider="princs-title"]'), {
  slidesPerView: 1,
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


