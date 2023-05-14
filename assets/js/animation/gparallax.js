gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".animitem").forEach(function(container) {
  let anim = container.querySelector(".anim");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      scrub: true,
      pin: false,
    },
  });

  tl.from(anim, {
    yPercent: 0,
    ease: "none",
  }).to(anim, {
    yPercent: 10,
    ease: "none",
  }); 
});