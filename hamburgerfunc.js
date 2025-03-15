let hamburgerMenu = document.querySelector(".hamburgerMenu");
let hamburgerIcon = document.querySelector(".fa-bars");
let closeIcon = document.querySelector(".fa-xmark");
function ShowHamburger() {
  hamburgerMenu.classList.toggle("hidden");
}
hamburgerIcon.addEventListener("click", ShowHamburger());
closeIcon.addEventListener("click", ShowHamburger());
