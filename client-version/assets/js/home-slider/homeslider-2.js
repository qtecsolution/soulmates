const homeSlider2 = new Swiper(".homeslider-2", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  grabCursor: true,
  loop: true,
  speed: 600,
  parallax: true,
  pagination: false,
  navigation: {
    prevEl: '.btn-prev',
    nextEl: '.btn-next',
  },
});