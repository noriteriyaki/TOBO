document.addEventListener("DOMContentLoaded", function () {

  const modal = document.getElementById("popupModal");
  const openBtns = document.querySelectorAll(".open-modal");

  const title = document.getElementById("modal-title");
  const subtitle = document.getElementById("modal-subtitle");
  const desc = document.getElementById("modal-desc");

  const closeBtn = document.querySelector(".close-btn");
  const toolsImg = document.getElementById("modal-tools");

  openBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    title.textContent = btn.dataset.title;
    subtitle.textContent = btn.dataset.subtitle;
    desc.textContent = btn.dataset.desc;

    toolsImg.src = btn.dataset.tools;

    modal.classList.add("show");
  });
});

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
  });

});




function toggleMenu() {
 document.querySelector(".navbar-nav").classList.toggle("active");
}

const navLinks = document.querySelector(".navbar-nav");
const hamburger = document.querySelector(".hamburger");

function toggleMenu() {
  navLinks.classList.toggle("active");
}

document.addEventListener("click", function(e) {
  if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
    navLinks.classList.remove("active");
  }
});

