document.getElementById("drum").addEventListener("click", (ev) => {
  const sound = ev.target.dataset.sound;
  if (!sound) return;

  playSound(sound);
});

document.addEventListener("keypress", (event) => {
  const key = event.key.toLowerCase();

  switch (key) {
    case "b":
      playSound("boom");
      break;
    case "c":
      playSound("clap");
      break;
    case "h":
      playSound("hihat");
      break;
    case "k":
      playSound("kick");
      break;
    case "o":
      playSound("openhat");
      break;
    case "r":
      playSound("ride");
      break;
    case "s":
      playSound("snare");
      break;
    case "t":
      playSound("tink");
      break;
    case "m":
      playSound("tom");
      break;
    default:
      break;
  }
});

function playSound(soundName) {
  const audio = document.getElementById(`${soundName}-audio`);

  audio.currentTime = 0;
  audio.play();
}
