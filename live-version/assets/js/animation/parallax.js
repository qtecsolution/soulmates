function parallax() {
  let parallaxes = document.querySelectorAll(".parallax");

  for (let i = 0; i < parallaxes.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = parallaxes[i].getBoundingClientRect().top;
    let elementVisible = 10;

    if (elementTop < (windowHeight - elementVisible)) {
      parallaxes[i].classList.add("active");
    } else {
      parallaxes[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", parallax);