const toggleBtn = document.querySelector(".toggle-btn");
const menu = document.querySelector(".menu");

function openNavBar() {
  menu.classList.toggle("open");
}

toggleBtn.addEventListener("click", openNavBar);
