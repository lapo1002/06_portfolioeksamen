document.addEventListener("DOMContentLoaded", function () {
  const openMenu = document.querySelector("#openMenu");
  const closeMenu = document.querySelector("#closeMenu");
  const menu = document.querySelector("#menu");

  openMenu.addEventListener("click", function () {
    menu.classList.add("active");
  });

  closeMenu.addEventListener("click", function () {
    menu.classList.remove("active");
  });
});

const kontaktForm = document.querySelector(".kontakt_form");
const popup = document.querySelector("#popup");

if (kontaktForm) {
  kontaktForm.addEventListener("submit", function (event) {
    event.preventDefault();
    popup.classList.add("active");
    kontaktForm.reset();
  });
}
