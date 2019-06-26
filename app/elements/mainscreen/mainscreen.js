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

nav();