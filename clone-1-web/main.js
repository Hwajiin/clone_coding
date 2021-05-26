// Nav
const lifeContainer = document.querySelector(".life__container");
const lifeNav = document.querySelector(".life__nav");

lifeContainer.addEventListener("click", () => {
  lifeNav.classList.toggle("show");
});

// Color palette
const colorBtns = document.querySelector(".color");

function changeBg(e) {
  const target = e.target;
  if (target.dataset) {
    document.body.style.backgroundColor = `${target.dataset.value}`;
    document.body.style.transition = `background-color 0.3s ease-in`;
  }
}

colorBtns.addEventListener("click", changeBg);
