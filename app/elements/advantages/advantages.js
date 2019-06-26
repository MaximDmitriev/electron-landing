const circles = [
  document.querySelector('.advantages__circle-item_children'),
  document.querySelector('.advantages__circle-item_teachers'),
  document.querySelector('.advantages__circle-item_groups'),
  document.querySelector('.advantages__circle-item_perspectives'),
  document.querySelector('.advantages__circle-item_practice'),
  document.querySelector('.advantages__circle-item_interest')
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

// document.body.addEventListener('click', (e) => {
//     console.log(e.target);
// });
