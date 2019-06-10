const map = () => {
  const switcher = document.querySelector('.map__switcher-circle'),
        switcherWrap = document.querySelector('.map__switcher-track'),
        labelMap = document.querySelector('#onMap'),
        labelList = document.querySelector('#list'),
        map = document.querySelector('.map__onmap'),
        list = document.querySelector('.map__list'),
        classNameLabel = 'map__switcher-label_active',
        className = 'map__switcher-circle_list';

  const onToggle = () => {
    switcher.classList.toggle(className);
    labelMap.classList.toggle(classNameLabel);
    labelList.classList.toggle(classNameLabel);
    map.classList.toggle('visible');
    list.classList.toggle('visible');
  }
  switcherWrap.addEventListener('click', onToggle);
  labelMap.addEventListener('click', onToggle);
  labelList.addEventListener('click', onToggle);
}

map();