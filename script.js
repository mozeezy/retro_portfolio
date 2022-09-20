let mySong = document.getElementById("mySong");
let musicButton = document.getElementById("musicButton");
const toTop = document.querySelector("#scroll-up");

let soundClick = document.getElementById("clickity");
const SFX = document.getElementById("SFX");

window.addEventListener("scroll", checkHeight);

function checkHeight() {
  if (window.scrollY > 200) {
    toTop.style.display = "flex";
  } else {
    toTop.style.display = "none";
  }
}
toTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
  });
});

soundClick.onclick = function () {
  SFX.play();
};

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

function showDate() {
  const weekday = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  const date = new Date();

  let hour = date.getHours();
  let minute = date.getMinutes();
  let day = weekday[date.getDay()];

  if (hour > 12) {
    hour = hour - 12;
  }

  if (hour === 0) {
    hour = 12;
  }

  if (minute >= 0 && minute < 10) {
    minute = "0" + minute;
  }

  document.getElementById("time").innerText = day + " " + hour + ":" + minute;
}

setInterval(showDate, 100);
