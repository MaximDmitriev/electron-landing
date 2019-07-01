/* eslint-disable babel/no-unused-expressions */
const circles = [
  document.querySelector('.advantages__circle-item_children'),
  document.querySelector('.advantages__circle-item_teachers'),
  document.querySelector('.advantages__circle-item_groups'),
  document.querySelector('.advantages__circle-item_interest'),
  document.querySelector('.advantages__circle-item_practice'),
  document.querySelector('.advantages__circle-item_perspectives')
];

let iconsOpen = [],
    iconsClose = [],
    advInners = [],
    advPopups = [];

circles.forEach((item) => {
  iconsOpen.push(item.querySelector('.icon-check-adv'));
  iconsClose.push(item.querySelector('.icon-return-adv'));
  advPopups.push(item.querySelector('.advantages__popup'));
  advInners.push(item.querySelector('.advantages__circle-inner'));
});

const closePopups = () => {
  advPopups.forEach((item, i) => {
    item.classList.add('off');
    iconsOpen[i].classList.remove('off');
    iconsClose[i].classList.add('off');
    setTimeout(() => item.style.display = 'none', 200);
  });
};

// closePopups();

advInners.forEach((item, i) => {
  item.addEventListener('click', () => {
    if (advPopups[i].classList.contains('off')) {
      closePopups();
      advPopups[i].classList.remove('off');
      iconsOpen[i].classList.toggle('off');
      iconsClose[i].classList.toggle('off');
      setTimeout(() => advPopups[i].style.display = 'flex', 200);
    }
    else {
      closePopups();
    }
  });
});

advInners[1].click();

const popupScroll = document.querySelectorAll('.advantages__popup-text');

popupScroll.forEach((item) => {
  new SimpleBar(item, {
    autoHide: false,
  });

});

const mobView = (arr) => {
  const btnLeft = document.querySelector('.slider__prev_advantages'),
        btnRight = document.querySelector('.slider__next_advantages'),
        activeClass = 'advantages__circle-item_active';
  
  closePopups();

  arr.forEach((item, i) => {
    if (i > 2) {
      item.classList.add('hidden');
    } else {
      item.classList.add('fade');
    }
  });
  
  arr[1].classList.add(activeClass);
  setTimeout(() => {
    arr[1].querySelector('.advantages__popup').classList.remove('off');
    arr[1].querySelector('.advantages__popup').style.display = 'flex';
  }, 300);

  btnLeft.addEventListener('click', () => {
    arr[1].classList.remove(activeClass);
    arr[1].querySelector('.advantages__popup').classList.add('off');
    arr[1].querySelector('.advantages__popup').style.display = 'none';
    arr[0].classList.remove('fade');
    arr[0].classList.add('hidden');
    arr[3].classList.remove('hidden');
    arr[3].classList.add('fade');
    setTimeout(() => {
      arr[2].classList.add(activeClass);
      arr[2].querySelector('.advantages__popup').classList.remove('off');
      arr[2].querySelector('.advantages__popup').style.display = 'flex';
      arr[0].remove();
      arr[1].parentElement.appendChild(arr[0]);
      let firstEl = arr.splice(0, 1);
      arr.push(firstEl[0]);
    }, 500);
  });

  btnRight.addEventListener('click', () => {
    arr[arr.length - 1].remove();
    arr[1].parentElement.insertBefore(arr[arr.length - 1], arr[0]);
    arr[1].classList.remove(activeClass);
    arr[1].querySelector('.advantages__popup').classList.add('off');
    arr[1].querySelector('.advantages__popup').style.display = 'none';
    arr[2].classList.remove('fade');
    arr[2].classList.add('hidden');
    arr[arr.length - 1].classList.remove('hidden');
    arr[arr.length - 1].classList.add('fade');
    setTimeout(() => {
      arr[0].classList.add(activeClass);
      arr[0].querySelector('.advantages__popup').classList.remove('off');
      arr[0].querySelector('.advantages__popup').style.display = 'flex';
      let lastEl = arr.splice(arr.length - 1, 1);
      arr.unshift(lastEl[0]);
    }, 500);
  });
}

let nowScreen, prevScreen;
if (document.body.clientWidth < 992) {
  mobView(circles);
  nowScreen = 'mobile';
  prevScreen = 'mobile';
} else {
  nowScreen = 'desctop';
  prevScreen = 'desctop';
}

window.addEventListener('resize', () => {
  document.body.clientWidth < 992 ? nowScreen = 'mobile' : nowScreen = 'desctop';

  if (prevScreen !== nowScreen && nowScreen === 'mobile') {
    prevScreen = nowScreen;
    mobView(circles);
  } else if (prevScreen !== nowScreen && nowScreen === 'desctop') {
    prevScreen = nowScreen;

    circles.forEach((item) => {
      item.classList.remove('hidden');
      item.classList.remove('fade');
      item.classList.remove('advantages__circle-item_active');
    });
    closePopups();
    advInners[1].click();
  }
});
