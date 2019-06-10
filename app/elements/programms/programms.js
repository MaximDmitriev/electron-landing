const progsSlider = new Swiper(document.querySelector('.swiper-container[data-slider="progs"]'), {
  slidesPerView: 3,
  navigation: {
    nextEl: '.slider__prev_progs',
    prevEl: '.slider__next_progs',
  }
})