themeSound = new Audio("./audio/theme.mp3");
themeSound.volume = 0.25;
themeSound.loop = true;
floatButton = document.querySelector("#button");
floatIcon = document.querySelector("#icon");
themeSound.play();
floatButton.addEventListener("click", function () {
  if (floatIcon.classList.contains("fa-play")) {
    floatIcon.classList.remove("fa-play");
    floatIcon.classList.add("fa-pause");
    themeSound.play();
  } else {
    floatIcon.classList.remove("fa-pause");
    floatIcon.classList.add("fa-play");

    themeSound.pause();
  }
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.top = "-150px";
  }
}
