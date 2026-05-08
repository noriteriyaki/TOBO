const questions = [
  { text: "Saat bangun tidur kamu menyadari telah masuk ke dalam dunia lego yang bernama Render Valley, kemudian kaki kamu sudah memakai sepatu roda lego, apa yang bakal kamu lakukan?", 
  a: "Pergi ke dapur dengan kecepatan tinggi sambil mencoba membuat kopi dan milk toast. ", 
  b: "Mencerna apa yang terjadi dan mencoba memahami situasi saat itu sambil memandangi  sepatu roda yang terpasang di kaki kamu.", 
  typeA: "I", 
  typeB: "E" },

  { text: "Seorang flying lensman tiba-tiba muncul dari asap kopi panas yang kamu buat. Ia berkata membutuhkan kamu untuk menyelamatkan Render Valley. Kamu…", 
  a: "Mencatat semua yang dikatakan orang asing agar saat menyelamatkan dunia kamu tidak melewatkan detail yang penting. ", 
  b: "Langsung beraksi dan percaya dengan kemampuan kamu sendiri.", 
  typeA: "I", 
  typeB: "E" },

  { text: "Setelah menelusuri tempat yang kamu datangi sekarang dikepung oleh virus jahat bernama buffering beast. Warga Render Valley yang ceria perlahan berubah menjadi patung abu-abu dan lagging. Apa senjata yang akan kamu pakai?",
   a: "Sebuah stylus hologram yang menembakan piksel cahaya warna-warni untuk melawan lagging dan mengembalikan warga Render Valley seperti semula. ",
   b: "Mikrofon megaphone bertenaga gelombang suara yang bergema ke seantero Render Valley untuk melemahkan power buffering beast. ", 
   typeA: "I",
   typeB: "E" },

  { text: "Efek melawan buffering beast membuat sebagian sistem kota Render Valley error. Kamu tiba-tiba berpindah ke suatu tempat yakni, Drafting District. Sebuah daerah tak terurus yang dipenuhi hutan belantara dari balok lego mentah berserakan, Gimana cara kamu mencari jalan keluar dari distrik ini?",
   a: "Mengandalkan intuisi kamu dan merancang alat pertahanan diri yang kamu temukan di sepanjang jalan Drafting District. ", 
   b: "Menjelajahi Drafting District dengan memperhatikan segala detail atau clue yang kamu temukan sambil berjalan hati-hati dan waspada. ", 
   typeA: "S", 
   typeB: "N" },

  { text: "Hari mulai gelap dan badai mulai melanda Drafting District. Untuk bertahan hidup kamu berusaha menyusun balok-balok lego agar punya tempat berlindung. Namun naasnya, angin tengah malam meruntuhkan tempat berlindungmu, Apa yang akan kamu lakukan?",
   a: "Membangunnya kembali dengan desain yang lebih kuat dan terencana", 
   b: "Menerima kenyataan, duduk bersandar di sisa reruntuhan sambil menunggu pagi datang.", 
   typeA: "S", 
   typeB: "N" },

  { text: "Setelah berhari-hari bertahan hidup dan menjelajah, akhirnya kamu menemukan portal cahaya di dalam hutan. Saat kamu mencoba untuk masuk sosok penjaga portal datang dan berkata “Pilih salah satu artefak ini untuk membantumu bertahan hidup dalam perjalanan didalam portal cahaya”",
   a: "Omni-Tablet, layar sentuh transparan yang berisi seluruh informasi detail tempat yang kamu singgahi mulai dari peta, cuaca, jalan pintas, sampai area yang harus dihindari ", 
   b: "The Glitch Cloak, jubah piksel yang saat dipakai dapat menembus dinding dan mengabaikan aturan gravitasi. ", 
   typeA: "S", 
   typeB: "N" },

  { text: "BHAPPP! Begitu ngelewatin portal, kamu malah jatuh di ruang kendali utama Render Valley yang lagi error parah. Sirine berbunyi, pekerja di sana lari-lari karena mesin kendali mau meledak. Apa aksi pertamamu?", 
  a: "Langsung lari ke panel kontrol utama, nyari letak error-nya, dan berusaha nge-restart sistem. ", 
  b: "MMencari tempat berlindung dengan memanfaatkan artefak yang kamu bawa sebelum memasuki portal cahaya serta memanggil massa bantuan.", 
  typeA: "T", 
  typeB: "F" },

  { text: "Mesin berhasil stabil sebentar, tapi tiba-tiba.. Tembok hancur didobrak oleh The Blanc. Ia tertawa sambil bersiap menembakan laser penghapus energi agar kota mati selamanya. Waktumu cuma 5 menit, gimana cara kamu mengatasinya?", 
  a: "Membangun tameng berlapis di sekitar mesin kendali, lalu fokus ke layar mesin untuk memperbaiki sistem kota secara menyeluruh. ", 
  b: "Cabut seluruh aliran listrik sementara untuk menghindari mesin kembali memanas dan meledak. Kemudian beralih untuk mengalahkan The Blanc ", 
  typeA: "T", 
  typeB: "F" },

  { text: "The Blanc hancur menjadi pecahan lego, kamu menang. Tetapi, ruang mesin kendali kota Render Valley hancur berantakan beberapa tata letak kota juga belum pulih secara maksimal, bagaimana cara kamu menangani kekacauan ini?", 
  a: "Fokus memperbaiki mesin kendali dan memastikan semua sistem berjalan dengan stabil.", 
  b: "Menata ulang kota dan ruang mesin kendali sambil mengelola beberapa glitch sisa pertarungan untuk diubah menjadi simbol atau fitur kota untuk dikenang. ", 
  typeA: "T", 
  typeB: "F" },

  { text: "Kamu berhasil menyelamatkan Rendey Valley, warga bersorak kegirangan dan ingin mengadakan pesta karena telah bebas dari berbagai ancaman. Pesta perayaan seperti apa yang nyaman bagi mu?",
   a: "Cukup berdiri di panggung buat ngasih pidato inspiratif yang bakal diingat semua warga ", 
   b: "Berkumpul di pusat kota sambil menikmati jamuan makan malam dan pesta kembang api bersama seluruh warga Rendey Valley ", 
   typeA: "J", 
   typeB: "P" 
  },

  { text: "Di tengah perayaan, Wali Kota Render Valley mendatangi kamu. Dia bawa medali kehormatan dan nawarin kamu satu peran di Render Valley. Peran mana yang langsung kamu ambil?",
   a: "Grand Architect, menentukan instruksi rakitan setiap gedung dan memastikan pembangunan gedung berada di wilayah yang aman dan antivirus. ", 
   b: "Glitch Hunter, bertugas memburu bug dan mengelola menjadi fitur kota yang ajaib dan belum ada sebelumnya. ", 
   typeA: "J", 
   typeB: "P" 
  },

  { text: "Sudah waktunya kamu pulang ke dunia nyata. Sebelum benar-benar melangkah pergi, warga memintamu meninggalkan satu jejak terakhir di tembok ratapan agar mereka selalu ingat padamu. Kamu bakal ninggalin apa?",
   a: "Ukiran instruksi lengkap buat jaga keamanan kota selamanya sehingga warga tahu cara mengatasi masalah apa pun ", 
   b: "Sebuah pesan rahasia yang pernah kamu dengar dari flying lensman. Pesan ini hanya bisa ditemukan oleh orang yang paling kreatif. ", 
   typeA: "J", 
   typeB: "P" 
  }
];

let current = 0;
let scores = { I:0, E:0, S:0, N:0, T:0, F:0, J:0, P:0 };

function updateProgress() {
  const progressPercent = (current / questions.length) * 100;
  document.getElementById("progress").style.width = progressPercent + "%";
}

function showQuestion() {
  const q = questions[current];
  updateProgress();

  document.getElementById("quiz").innerHTML = `
    <div class="question">${q.text}</div>
    <button class="optionA" onclick="answer('${q.typeA}')">${q.a}</button>
    <button class="optionB" onclick="answer('${q.typeB}')">${q.b}</button>
  `;
}

function answer(type) {
  scores[type]++;
  current++;

  if (current < questions.length) {
    showQuestion();
  } else {
    updateProgress();
    showResult();
  }
}

function showResult() {
  const result =
    (scores.I > scores.E ? 'I' : 'E') +
    (scores.S > scores.N ? 'S' : 'N') +
    (scores.T > scores.F ? 'T' : 'F') +
    (scores.J > scores.P ? 'J' : 'P');

  const images = {
    "INTJ": "images/intj-estp.svg",
    "ESTP": "images/intj-estp.svg",
    "INFP": "images/infp.svg",
    "ENTP": "images/entp.svg",
    "ENFJ": "images/enfj.svg",
    "ENTJ": "images/entj.svg",
    "ENFP": "images/enfp.svg",
    "ESTP": "images/estp.svg",
    "INTP": "images/intp-esfp.svg",
    "ESFP": "images/intp-esfp.svg",
    "ISTJ": "images/istj.svg",
    "ISFJ": "images/isfj.svg",
    "ESTJ": "images/estj.svg",
    "ESFJ": "images/esfj.svg",
    "INFJ": "images/infj.svg",
    "INFP": "images/infp.svg",
    "ENFP": "images/enfp.svg",
    "ISTP": "images/istp.svg",
    "ISFP": "images/isfp.svg"
  };

  const titles = {
    "INTJ": "Fashion Designer", 
    "ENTJ": "Creative Director", 
    "INFP": "Performer", 
    "ENFP": "Toys Designer",
    "ESTP": "Fashion Designer",
    "INTP": "Film Maker",
    "ESFP": "Film Maker",
    "ENTP": "Jurnalis", 
    "ISTJ": "Programmer",
    "ISFJ": "Gamer",
    "ESTJ": "Game Developer",
    "ESFJ": "Musicians",
    "INFJ": "Comic Artist",
    "ENFJ": "Illustrator", 
    "ISTP": "Data Analyst",
    "ISFP": "IP Manager"
  };

  const imgSrc = images[result] || "images/default.png";
  const title = titles[result] || "Unknown";

  document.getElementById("quiz").innerHTML = "";
  document.getElementById("result").innerHTML = `
    <div style="font-size:24px; font-weight:bold;">${title}</div>
    <img src="${imgSrc}" style="width:100%; margin-top:15px; border-radius:10px;">

  <button class="btn-restart" onclick="restartQuiz()">
      Ulangi Quiz
    </button>

    <button class="btn-photo" onclick="goToPage()">
      Photobooth!
    </button>
  `;
}

function restartQuiz() {
  current = 0;
  scores = { I:0, E:0, S:0, N:0, T:0, F:0, J:0, P:0 };
  document.getElementById("result").innerHTML = "";
  showQuestion();
}

function goToPage() {
  window.location.href = "../photobooth/camera.html";
}

showQuestion();

const startBtn = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const quizContent = document.getElementById("quiz-content");

startBtn.addEventListener("click", () => {
  startScreen.style.display = "none";
  quizContent.style.display = "block";

  // kalau kamu punya function init quiz, panggil di sini
  startQuiz(); 
});