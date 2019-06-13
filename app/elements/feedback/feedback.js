const feedbackSlider = new Swiper(document.querySelector('.swiper-container[data-slider="feedback"]'), {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.slider__next_feedback',
    prevEl: '.slider__prev_feedback',
  }
})