const popups = () => {
  const callBtns = document.querySelectorAll('*[data-role="callback"]'),
        closeBtn = document.querySelector('.popups__close-btn'),
        overlay = document.querySelector('.popups');

  const onCloseModal = () => {
    overlay.classList.remove('opacity');
    setTimeout(() => {
      overlay.style.display = 'none';
      document.body.style.paddingRight = 'initial';
      document.body.style.overflow = '';
    }, 400);
  }
  callBtns.forEach(button => button.addEventListener('click', () => {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = scrollCalc() + 'px';
    overlay.style.display = 'flex';
    setTimeout(() => overlay.classList.add('opacity'), 0);
    // overlay.classList.add('opacity');
  }));

  closeBtn.addEventListener('click', () => onCloseModal());

  window.addEventListener('keyup', (event) => {
    if (event.keyCode === 27) {
      onCloseModal();
    }
  });
}

popups();

const sendData = form => {
  const inputs = form.querySelectorAll('input'),
        nameField = inputs[0],
        numberField = inputs[1],
        checkbox = inputs[2],
        btn = form.querySelector('button');

  btn.addEventListener('click', () => {
    if (numberField.value.length === 22 && nameField.value !== '' && checkbox.checked) {
      console.log('Отправка');
    } else {
        switch (true) {
          case nameField.value === '':
            nameField.parentElement.querySelector('.warning-msg').style.opacity = '1';
            setTimeout(() => nameField.parentElement.querySelector('.warning-msg').style.opacity = '0', 1000);
            break;
          case numberField.value.length !== 22:
            numberField.parentElement.querySelector('.warning-msg').style.opacity = '1';
            setTimeout(() => numberField.parentElement.querySelector('.warning-msg').style.opacity = '0', 1000);
            break;
          case !checkbox.checked:
            checkbox.nextElementSibling.style.borderColor = 'red';
            setTimeout(() => checkbox.nextElementSibling.style.borderColor = 'initial', 1000);
            break;
        }
    }
  });
}

sendData(document.querySelector('.mainform__form'));
sendData(document.querySelector('.popups__form'));