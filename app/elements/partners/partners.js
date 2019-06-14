const partnersSlider = new Swiper(document.querySelector('.swiper-container[data-slider="partners"]'), {
  slidesPerView: 5,
  simulateTouch: false,
  navigation: {
    nextEl: '.slider__next_partners',
    prevEl: '.slider__prev_partners',
  }
})