function setCopyrightYear() {
  const yearElement = document.getElementById("year");
  if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
  }
}

document.addEventListener("DOMContentLoaded", setCopyrightYear);
document.addEventListener("DOMContentLoaded", function () {
  let mySong = document.getElementById("mySong");
  let musicButton = document.getElementById("musicButton");
  const toTop = document.querySelector("#scroll-up");

  let soundClickButtons = document.querySelectorAll(".is-primary");
  const SFX = document.getElementById("SFX");

  function playClickSound() {
    if (SFX) {
      SFX.volume = 0.05;
      SFX.play();
    }
  }

  function checkHeight() {
    if (window.scrollY > 200) {
      if (toTop) {
        toTop.style.display = "flex";
      }
    } else {
      if (toTop) {
        toTop.style.display = "none";
      }
    }
  }

  window.addEventListener("scroll", checkHeight);

  if (toTop) {
    toTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
      });
    });
  }

  if (musicButton) {
    musicButton.onclick = function () {
      if (mySong) {
        if (mySong.paused) {
          mySong.volume = 0.03;
          mySong.play();
          musicButton.className = "nes-btn is-error";
          musicButton.innerText = "Stop";
        } else {
          mySong.pause();
          mySong.currentTime = 0;
          musicButton.className = "nes-btn is-success";
          musicButton.innerText = "Play Background Music";
        }
      }
    };
  }

  soundClickButtons.forEach((button) => {
    button.addEventListener("click", playClickSound);
  });

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

    const timeElement = document.getElementById("time");
    if (timeElement) {
      timeElement.innerText = day + " " + hour + ":" + minute;
    }
  }

  setInterval(showDate, 100);
});
