const partnersSlider = new Swiper(document.querySelector('.swiper-container[data-slider="partners"]'), {
  slidesPerView: 5,
  simulateTouch: false,
  navigation: {
    nextEl: '.slider__next_partners',
    prevEl: '.slider__prev_partners',
  },
  breakpoints: {
    1199: {
      simulateTouch: true,
      slidesPerView: 3
      },
    767: {
      slidesPerView: 2
      },
    575: {
      slidesPerView: 1
    }
    }
})