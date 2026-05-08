// constants
const WIDTH = 1176, HEIGHT = 1870;

// dom elements
const canvas = document.getElementById('finalCanvas');
canvas.width = WIDTH;
canvas.height = HEIGHT;

const ctx = canvas.getContext('2d');
const downloadBtn = document.getElementById('downloadBtn');
const homeBtn = document.getElementById('homeBtn');
const resetBtn = document.getElementById('reset');

// sticker state
let stickers = [], dragOffset = { x: 0, y: 0 }, selectedSticker = null;

// load photo
const finalImage = new Image();
const dataURL = localStorage.getItem('photoStrip');

if (dataURL) {
  finalImage.src = dataURL;
  finalImage.onload = drawCanvas;
  // localStorage.removeItem('photoStrip'); // Masih dimatikan biar aman pas ngetes
} else {
  console.log("No photo found!");
}

// draw canvas
function drawCanvas() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  if (finalImage.complete && finalImage.src) {
    ctx.drawImage(finalImage, 0, 0, WIDTH, HEIGHT);
  }
  stickers.forEach(s => ctx.drawImage(s.img, s.x, s.y, s.width, s.height));
}

// add sticker
function addSticker(src) {
  const img = new Image();
  img.src = src;
  img.onload = () => {
    stickers.push({
      img,
      x: WIDTH / 2 - img.width / 6,
      y: HEIGHT / 2 - img.height / 6,
      width: img.width / 2.5,
      height: img.height / 2.5,
      dragging: false
    });
    drawCanvas();
  };
}

// pointer position
function getPointerPos(e) {
  const rect = canvas.getBoundingClientRect(), scaleX = canvas.width / rect.width, scaleY = canvas.height / rect.height;
  const clientX = e.touches?.[0]?.clientX ?? e.clientX,
        clientY = e.touches?.[0]?.clientY ?? e.clientY;
  return { x: (clientX - rect.left) * scaleX, y: (clientY - rect.top) * scaleY };
}

// drag and drop
function pointerDown(e) {
  const { x: mouseX, y: mouseY } = getPointerPos(e);
  for (let i = stickers.length - 1; i >= 0; i--) {
    const s = stickers[i];
    if (mouseX >= s.x && mouseX <= s.x + s.width && mouseY >= s.y && mouseY <= s.y + s.height) {
      selectedSticker = s;
      s.dragging = true;
      dragOffset.x = mouseX - s.x;
      dragOffset.y = mouseY - s.y;
      stickers.splice(i, 1);
      stickers.push(s);
      drawCanvas();
      e.preventDefault();
      break;
    }
  }
}
function pointerMove(e) {
  if (!selectedSticker?.dragging) return;
  const { x: mouseX, y: mouseY } = getPointerPos(e);
  selectedSticker.x = mouseX - dragOffset.x;
  selectedSticker.y = mouseY - dragOffset.y;
  drawCanvas();
  e.preventDefault();
}
function pointerUp() { if (selectedSticker) selectedSticker.dragging = false; selectedSticker = null; }

// mouse events
canvas.addEventListener('mousedown', pointerDown);
canvas.addEventListener('mousemove', pointerMove);
canvas.addEventListener('mouseup', pointerUp);
canvas.addEventListener('mouseleave', pointerUp);

// touch events
canvas.addEventListener('touchstart', pointerDown, {passive: false});
canvas.addEventListener('touchmove', pointerMove, {passive: false});
canvas.addEventListener('touchend', pointerUp);
canvas.addEventListener('touchcancel', pointerUp);

// --- SISTEM KATALOG STIKER OTOMATIS ---
const catalogItems = document.querySelectorAll('.sticker-item');

catalogItems.forEach(item => {
  item.addEventListener('click', () => {
    const stickerUrl = item.getAttribute('data-src'); 
    if (stickerUrl) {
      addSticker(stickerUrl);
    }
  });
});

// reset
if(resetBtn) {
  resetBtn.addEventListener('click', () => { 
    stickers = []; 
    drawCanvas(); 
  });
}

// download
if(downloadBtn) {
  downloadBtn.addEventListener('click', () => {
    canvas.toBlob(blob => { 
      const a = document.createElement('a'); 
      a.href = URL.createObjectURL(blob); 
      a.download = 'tobo-photobooth.png'; 
      a.click(); 
    }, 'image/png');
  });
}

// home
if(homeBtn) {
  homeBtn.addEventListener('click', () => window.location.href = 'index.html');
}

// logo
document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.logo');
  if (logo) logo.addEventListener('click', () => window.location.href = 'index.html');
});