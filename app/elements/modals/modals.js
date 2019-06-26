const showProgramm = () => {
  const btns = document.querySelectorAll('.programms__card-button'),
        modals = document.querySelector('.modals'),
        container = document.querySelector('.modals__container');

  const onClose = () => {
    document.body.style.overflow = '';
    document.body.style.paddingRight = 'initial';
    setTimeout(() => {
      container.classList.remove('moveDown');
      container.classList.add('moveUp');
      setTimeout(() => modals.style.display = 'none', 500);
    }, 0);
  }

  const modalsSlider = new Swiper(document.querySelector('.swiper-container[data-slider="modals"]'), {
    init: false,
    slidesPerView: 1,
    speed: 500,
    loop: true,
    navigation: {
      nextEl: '.modals__next-btn',
      prevEl: '.modals__prev-btn'
    },
    on: {
      init: () => {
        const closeBtn = document.querySelectorAll('.modals__close-btn');  
        closeBtn.forEach((item) => {
          item.addEventListener('click', onClose);
        });
      }
    }
  })

  window.addEventListener('keyup', (event) => {
    if (event.keyCode === 27) {
      onClose();
    }
  });

  btns.forEach((item) => {
    item.addEventListener('click', () => {
      modals.style.display = 'block';
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = scrollCalc() + 'px';
      setTimeout(() => {
        container.classList.remove('moveUp');
        container.classList.add('moveDown');
        setTimeout(() => {
          const key = item.getAttribute('data-key');
          modalsSlider.init();
          setTimeout(() => {
            const newIndex = [...document.querySelectorAll('.swiper-slide ~ .modals__slide')].findIndex(card => card.firstElementChild.getAttribute('data-key') == key);
            modalsSlider.slideTo(newIndex + 1, 1000);
          }, 0);
        }, 1050);
      }, 0);
    });
  });
}
