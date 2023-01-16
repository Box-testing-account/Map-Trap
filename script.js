localStorage.setItem("activated", "true");
const submitBtn = document.getElementById("submit-btn");
const audioPlayer = document.getElementById("audio-player");
submitBtn.addEventListener("click", function(event) {
  event.preventDefault();
  setTimeout(audioPlayer.play(), 400);
  window.open("https://box-testing-account.github.io/Spencer-Trap/");
});
setInterval(function() {
  if (localStorage.getItem("activated") === "false") {
    audioPlayer.pause();
  };
}, 100);
