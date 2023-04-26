const homeSlider3 = new Swiper(".homeslider-3", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  grabCursor: true,
  loop: true,
  speed: 600,
  parallax: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
});