const homeFadeSlider = new Swiper(".homefadeslider", {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  direction: 'horizontal',
  centeredSlides: true,
	effect: 'fade',
  grabCursor: true,
  loop: true,
  pagination: false,
  parallax: true,
  speed: 600,
	slidesPerView: 1,
  // breakpoints: {
  //   992: {
  //     direction: 'vertical',
  //   },
  // }
});