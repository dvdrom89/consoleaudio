let mainPlayer = new Audio();

function playSolo(file) {
  if (!file) return;
  mainPlayer.pause();
  mainPlayer.currentTime = 0;
  mainPlayer.src = encodeURI(file); 
  mainPlayer.play();
}

function playOverlay(file) {
  const audio = new Audio(encodeURI(file));
  audio.play();
}

function stopAll() {
  mainPlayer.pause();
  mainPlayer.currentTime = 0;
}