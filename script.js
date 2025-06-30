let mainPlayer = null;

function playSolo(file) {
  // Se c'è un player già attivo, fermalo
  if (mainPlayer && !mainPlayer.paused) {
    mainPlayer.pause();
    mainPlayer.currentTime = 0;
  }

  // Crea un nuovo player per il nuovo file
  mainPlayer = new Audio(file);
  mainPlayer.play().catch((e) => {
    console.log("Audio bloccato dal browser finché non interagisci", e);
  });
}

function playOverlay(file) {
  const audio = new Audio(file);
  audio.play().catch((e) => {
    console.log("Audio overlay bloccato", e);
  });
}

function stopAll() {
  if (mainPlayer) {
    mainPlayer.pause();
    mainPlayer.currentTime = 0;
  }
}
