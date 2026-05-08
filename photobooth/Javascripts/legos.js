// connect to lego container
const legoContainer = document.querySelector(".lego-container");

// get images
const legoImages = [
  "../Assets/tobo-photobooth/camerapage/legos/lego4.png",
  "../Assets/tobo-photobooth/camerapage/legos/lego1.png",
  "../Assets/tobo-photobooth/camerapage/legos/lego2.png",
  "../Assets/tobo-photobooth/camerapage/legos/lego3.png",
  "../Assets/tobo-photobooth/camerapage/legos/lego4.png",
  "../Assets/tobo-photobooth/camerapage/legos/lego5.png",
  "../Assets/tobo-photobooth/camerapage/legos/lego4.png" ]

// create lego
const createlego = () => {
  const lego = document.createElement("img");
  lego.src = legoImages[Math.floor(Math.random() * legoImages.length)];
  lego.classList.add("lego");

  // random position, size, duration
  lego.style.left = Math.random() * 100 + "vw";
  const size = 20 + Math.random() * 20;
  lego.style.width = size + "px";
  const duration = 12 + Math.random() * 8;
  lego.style.animationDuration = duration + "s";

  // random final opacity
  lego.addEventListener("animationend", () => lego.style.opacity = 0.2 + Math.random() * 0.8);

  legoContainer.appendChild(lego);

  // remove after animation
  setTimeout(() => lego.remove(), duration * 1000);
};

// generate lego continuously
setInterval(createlego, 400);