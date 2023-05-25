const homeSlider = new Swiper(".homeslider", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
	slidesPerView: 1,
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