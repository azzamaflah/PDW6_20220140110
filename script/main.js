const audioPlayer = document.getElementById("audio-player");
const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");
const audioProgress = document.getElementById("audio-progress");
const durationDisplay = document.getElementById("duration"); // Menambahkan elemen baru

playBtn.addEventListener("click", () => {
  audioPlayer.play();
  playBtn.style.display = "none";
  pauseBtn.style.display = "block";
});

pauseBtn.addEventListener("click", () => {
  audioPlayer.pause();
  playBtn.style.display = "block";
  pauseBtn.style.display = "none";
});

audioPlayer.addEventListener("timeupdate", () => {
  const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  audioProgress.value = progress;

  // Mengambil durasi lagu dalam menit dan detik
  const minutes = Math.floor(audioPlayer.duration / 60);
  let seconds = Math.floor(audioPlayer.duration % 60);
  if (seconds < 10) {
    seconds = "0" + seconds; // Menambahkan 0 di depan jika detik kurang dari 10
  }
  durationDisplay.textContent = `${minutes}:${seconds}`; // Menampilkan durasi
});

audioProgress.addEventListener("input", () => {
  const duration = audioPlayer.duration;
  const currentTime = (audioProgress.value / 100) * duration;
  audioPlayer.currentTime = currentTime;
});
