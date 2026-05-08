
const CANVAS_WIDTH = 1176;  // Lebar total frame
const CANVAS_HEIGHT = 1870; // Tinggi total frame

const PHOTO_X = 104;       // Jarak bolongan foto dari pinggir kiri
const PHOTO_WIDTH = 968;   // Lebar bolongan foto (1176 dikurang kiri kanan)
const PHOTO_HEIGHT = 618;  // Tinggi bolongan fotonya saja

const PHOTO_1_Y = 108;     // Jarak bolongan PERTAMA dari atas
const PHOTO_2_Y = 760;     // Jarak bolongan KEDUA dari atas 
// ---------------------------------------

const elements = {
  video: document.getElementById('liveVideo'),
  canvas: document.getElementById('finalCanvas'),
  ctx: document.getElementById('finalCanvas').getContext('2d'),
  takePhotoBtn: document.getElementById('takePhoto'),
  downloadBtn: document.getElementById('downloadBtn'),
  countdownEl: document.querySelector('.countdown-timer')
};

let photoStage = 0; // 0=atas, 1=bawah, 2=selesai

// Posisikan kamera video agar pas di belakang lubang
const moveVideoToHalf = (stage) => {
  const { video } = elements;
  const targetY = stage === 0 ? PHOTO_1_Y : PHOTO_2_Y;
  
  video.style.display = 'block';
  video.style.top = `${(targetY / CANVAS_HEIGHT) * 100}%`;
  video.style.left = `${(PHOTO_X / CANVAS_WIDTH) * 100}%`;
  video.style.width = `${(PHOTO_WIDTH / CANVAS_WIDTH) * 100}%`;
  video.style.height = `${(PHOTO_HEIGHT / CANVAS_HEIGHT) * 100}%`;
};

// Hitung mundur
const startCountdown = callback => {
  let count = 3;
  const { countdownEl } = elements;
  countdownEl.textContent = count;
  countdownEl.style.display = 'flex';
  const intervalId = setInterval(() => {
    count--;
    if (count > 0) countdownEl.textContent = count;
    else {
      clearInterval(intervalId);
      countdownEl.style.display = 'none';
      callback();
    }
  }, 1000);
};

//frame bolong
const capturePhoto = () => {
  const { video, ctx, takePhotoBtn } = elements;
  const targetY = photoStage === 0 ? PHOTO_1_Y : PHOTO_2_Y;
  
  const vW = video.videoWidth;
  const vH = video.videoHeight;
  const targetAspect = PHOTO_WIDTH / PHOTO_HEIGHT;
  const vAspect = vW / vH;
  
  let sx, sy, sw, sh;

  // Rumus anti-gepeng
  if (vAspect > targetAspect) { 
    sh = vH; 
    sw = vH * targetAspect; 
    sx = (vW - sw) / 2; 
    sy = 0; 
  } else { 
    sw = vW; 
    sh = vW / targetAspect; 
    sx = 0; 
    sy = (vH - sh) / 2; 
  }

  ctx.save();
  // Mirror kamera (berpusat di tengah lubang foto)
  ctx.translate(PHOTO_X + PHOTO_WIDTH / 2, targetY + PHOTO_HEIGHT / 2);
  ctx.scale(-1, 1);
  ctx.drawImage(
    video, 
    sx, sy, sw, sh, 
    -PHOTO_WIDTH / 2, -PHOTO_HEIGHT / 2, PHOTO_WIDTH, PHOTO_HEIGHT
  );
  ctx.restore();

  photoStage++;
  if (photoStage === 1) { 
    moveVideoToHalf(1); 
    takePhotoBtn.disabled = false; 
  } else if (photoStage === 2) {
    finalizePhotoStrip();
  }
};

// Gabungkan foto dengan frame dan siap di-download
const finalizePhotoStrip = () => {
  const { video, ctx, canvas } = elements;
  video.style.display = 'none';
  const frame = new Image();
  frame.src = '../photobooth/Assets/tobo-photobooth/camerapage/frametobo2.png';
  const goNext = () => {
    try {
      localStorage.setItem('photoStrip', canvas.toDataURL('image/png'));
    } catch (e) {
      console.log("Gagal simpan gambar:", e);
    }
    window.location.href = '../photobooth/final.html';
  };
  frame.onload = () => {
    ctx.drawImage(frame, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    goNext();
  };

  // 🔥 fallback kalau onload gagal
  setTimeout(goNext, 500);
};

const downloadPhoto = () => {
  elements.canvas.toBlob(blob => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'photo-strip.png';
    a.click();
  }, 'image/png');
};

const setupCamera = () => {
  navigator.mediaDevices.getUserMedia({ 
    video: { width: { ideal: 2560 }, height: { ideal: 1440 }, facingMode: 'user' }, 
    audio: false 
  })
    .then(stream => { 
      elements.video.srcObject = stream; 
      elements.video.play(); 
      moveVideoToHalf(0); 
    })
    .catch(err => alert('Akses kamera gagal: ' + err));
};

const setupEventListeners = () => {
  const { takePhotoBtn, downloadBtn } = elements;

  takePhotoBtn.addEventListener('click', () => {
    if (photoStage > 1) return;
    takePhotoBtn.disabled = true;
    startCountdown(capturePhoto);
  });

  if(downloadBtn) downloadBtn.addEventListener('click', downloadPhoto);
  
  window.addEventListener('resize', () => {
    if (photoStage === 0) moveVideoToHalf(0);
    else if (photoStage === 1) moveVideoToHalf(1);
  });
};

const initPhotoBooth = () => { setupCamera(); setupEventListeners(); };
initPhotoBooth();

document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelector('.logo');
  if (logo) logo.addEventListener('click', () => window.location.href = 'index.html');
});
