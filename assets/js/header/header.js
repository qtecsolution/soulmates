const hamburger = document.querySelector('.btn-hamburger');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
});