let mySong = document.getElementById("mySong");
let musicButton = document.getElementById("musicButton");

musicButton.onclick = function () {
  if (mySong.paused) {
    mySong.play();
    musicButton.className = "nes-btn is-error";
    musicButton.innerText = "Stop";
  } else {
    mySong.pause();
    mySong.currentTime = 0;
    musicButton.className = "nes-btn is-success";
    musicButton.innerText = "Play Background Music";
  }
};
