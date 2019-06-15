const modalsSlider = new Swiper(document.querySelector('.swiper-container[data-slider="modals"]'), {
  init: false,
  slidesPerView: 1,
  speed: 500,
  loop: true
  // navigation: {
  //   nextEl: '.slider__prev_progs',
  //   prevEl: '.slider__next_progs',
  // }
})

const showProgramm = () => {
  const btns = document.querySelectorAll('.programms__card-button'),
        modals = document.querySelector('.modals'),
        closeBtn = document.querySelectorAll('.modals__close-svg'),
        container = document.querySelector('.modals__container');

  const onClose = () => {
    container.style.top = '-400px';
    setTimeout(() => { //TODO
      modals.style.display = 'none';
      document.body.style.overflow = '';
    }, 580);
  }
  closeBtn.forEach((item) => {
    item.addEventListener('click', onClose);
  });

  modals.addEventListener('dblclick', (event) => {
    if (event.path.indexOf(document.querySelector('.modals__wrap.wrap')) === -1) {
      onClose();
    }
  });

  btns.forEach((item) => {
    item.addEventListener('click', () => {
      modals.style.display = 'block';
      document.body.style.overflow = 'hidden';
      setTimeout(() => modalsSlider.init(), 1050);
    });
  });
}

showProgramm();