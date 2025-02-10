window.addEventListener("scroll", () => {
  if (window.scrollY > 85) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

let nav = document.querySelector(".navigation-container");

function sendMail() {
  let body = document.getElementById("message").value;
  let subjectLine = document.getElementById("subject").value;
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  window.location.href = "mailto:atelierlore25@gmail.com?subject=" + subjectLine + "&body=" + "Naam: " + name + "%0D%0A" + "Telefoonnummer: " + phone + "%0D%0A" + body;
}
