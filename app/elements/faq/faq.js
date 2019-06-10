const faq = () => {
  const labels = document.querySelectorAll('.faq__list-question'),
        className = 'faq__list-item_active';

  labels.forEach((item) => {
    item.addEventListener('click', () => {
      if (item.parentElement.classList.contains(className)) {
        item.parentElement.classList.remove(className);
      }
      else {
        labels.forEach(item => item.parentElement.classList.remove(className));
        item.parentElement.classList.add(className);
      }
    });
  });
}

faq();