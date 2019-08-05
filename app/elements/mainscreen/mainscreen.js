const nav = () => {
  const navs = document.querySelectorAll('.mainscreen__nav-link'),
        footerNavs = document.querySelectorAll('.footer__nav-link'),
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
}

const onShowPhone = () => {
  const phoneIcon = document.querySelector('.callback-btn'),
        footer = getComputedStyle(document.querySelector('.footer')),
        mainform = getComputedStyle(document.querySelector('.mainform')),
        mainscreen = getComputedStyle(document.querySelector('.mainscreen')).height.slice(0, -2);
  
  const endLine = +footer.height.slice(0, -2) + +mainform.height.slice(0, -2) + window.innerHeight;

  console.log(endLine);
  window.addEventListener('scroll', () => {
    console.log('+', document.body.scrollHeight - window.pageYOffset, window.innerHeight);
    window.pageYOffset > mainscreen && (document.body.scrollHeight - window.pageYOffset > endLine) ? phoneIcon.style.display = 'flex' : phoneIcon.style.display = 'none';
  });
}

nav();
onShowPhone();