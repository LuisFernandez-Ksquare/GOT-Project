themeSound = new Audio("./audio/theme.mp3");
themeSound.loop=true;
const playButton = document.querySelector(".playButton");


playButton.addEventListener("click", function() {
      themeSound.play();
    
}); 