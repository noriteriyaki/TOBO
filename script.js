document.addEventListener("DOMContentLoaded", function () {

  // =========================
  // 🔹 MODAL 1
  // =========================
  const modal1 = document.getElementById("openModal");
  const openBtns = document.querySelectorAll(".open-modal");

  const title = document.getElementById("modal-title");
  const subtitle = document.getElementById("modal-subtitle");
  const desc = document.getElementById("modal-desc");
  const toolsImg = document.getElementById("modal-tools");

  const closeBtn1 = modal1?.querySelector(".close-btn");

  openBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      title.innerText = btn.dataset.title;
      subtitle.innerText = btn.dataset.subtitle;
      desc.innerText = btn.dataset.desc;

      if (btn.dataset.tools) {
        toolsImg.src = btn.dataset.tools;
        toolsImg.style.display = "block";
      } else {
        toolsImg.style.display = "none";
      }

      modal1.style.display = "flex";
    });
  });

  closeBtn1?.addEventListener("click", () => {
    modal1.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal1) {
      modal1.style.display = "none";
    }
  });


  // =========================
  // 🔹 MODAL 2
  // =========================
  const modal2 = document.getElementById('info-modal');
  const modalImg = document.getElementById('modal-info-img');
  const closeBtn2 = document.getElementById('close-modal-btn');

  function openModal2(imageSrc) {
    modalImg.src = imageSrc;
    modal2.classList.remove('hidden');
  }

  closeBtn2?.addEventListener('click', () => {
    modal2.classList.add('hidden');
  });

  modal2?.addEventListener('click', (e) => {
    if (e.target === modal2) {
      modal2.classList.add('hidden');
    }
  });

  document.getElementById('btn-designer')?.addEventListener('click', () => {
    openModal2('img/inidesigner.png');
  });

  document.getElementById('btn-engineer')?.addEventListener('click', () => {
    openModal2('img/iniengineer.png');
  });

  document.getElementById('dosen-cewek')?.addEventListener('click', () => {
    openModal2('img/iniexpertdosenibu.png');
  });

  document.getElementById('dosen-cowok')?.addEventListener('click', () => {
    openModal2('img/iniexpertbapak.png'); // 🔥 FIX
  });

  document.querySelectorAll('.partner-img').forEach(img => {
    img.addEventListener('click', () => {
      openModal2('img/inipartner.png');
    });
  });


  // =========================
  // 🔹 NAVBAR
  // =========================
  const navLinks = document.querySelector(".navbar-nav");
  const hamburger = document.querySelector(".hamburger");

  function toggleMenu() {
    navLinks.classList.toggle("active");
  }

  window.toggleMenu = toggleMenu; // 🔥 biar bisa dipanggil dari HTML

  document.addEventListener("click", function(e) {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      navLinks.classList.remove("active");
    }
  });

});
