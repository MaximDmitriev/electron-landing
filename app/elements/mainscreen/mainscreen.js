const nav = () => {
  const navs = document.querySelectorAll('.mainscreen__nav-link'),
        footerNavs = document.querySelectorAll('.footer__nav-link'),
        menuNavs = document.querySelectorAll('.menu__nav-link'),
        blocks = document.querySelectorAll('.section');

  const select = (nodes, sections) => {
    nodes.forEach((item) => {
      item.addEventListener('click', (event) => {
        event.preventDefault();
        const link = item.getAttribute('data-link');
        for (let section of sections) {
          if (section.getAttribute('data-link') === link) {
            section.scrollIntoView({block: 'start', behavior: 'smooth'});
            return;
          }
        }
      });
    });
  }

  select(navs, blocks);
  select(footerNavs, blocks);
  select(menuNavs, blocks);
}

const onShowPhone = () => {
  const phoneIcon = document.querySelector('.callback-btn'),
        headerMobile = document.querySelector('.mainscreen__header-mobile'),
        footer = getComputedStyle(document.querySelector('.footer')),
        mainform = getComputedStyle(document.querySelector('.mainform')),
        mainscreen = getComputedStyle(document.querySelector('.mainscreen')).height.slice(0, -2),
        className = 'mainscreen__header-mobile_fixed';
  
  const endLine = +footer.height.slice(0, -2) + +mainform.height.slice(0, -2) + window.innerHeight;
  let prevOffset = window.pageYOffset,
      direction;

  window.addEventListener('scroll', () => {
    window.pageYOffset > mainscreen && (document.body.scrollHeight - window.pageYOffset > endLine) ? phoneIcon.style.display = 'flex' : phoneIcon.style.display = 'none';
    prevOffset < window.pageYOffset ? direction ='down': direction = 'up';
    prevOffset = window.pageYOffset;
    if (window.pageYOffset > 500 && !headerMobile.classList.contains(className) && direction === 'up') {
      headerMobile.classList.add(className);
    } else if ((direction === 'down' || window.pageYOffset <= 500) && headerMobile.classList.contains(className)) {
      headerMobile.style.top = '-60px';
      setTimeout(() => {
        headerMobile.classList.remove(className);
        headerMobile.style.top = '0px';
      }, 400);
    }
  });
}

nav();
onShowPhone();