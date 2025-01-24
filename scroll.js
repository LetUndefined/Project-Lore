window.addEventListener("scroll", () => {
  if (window.scrollY > 85) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

let nav = document.querySelector(".navigation-container");
