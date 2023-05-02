const homeFadeSlider = new Swiper(".homefadeslider", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  direction: 'vertical',
	effect: 'fade',
  grabCursor: true,
  loop: true,
  pagination: false,
  parallax: true,
  speed: 600,
	slidesPerView: 1
});