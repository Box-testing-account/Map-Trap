const submitBtn = document.getElementById("submit-btn");
const audioPlayer = document.getElementById("audio-player");

submitBtn.addEventListener("click", function(event) {
  event.preventDefault();
  audioPlayer.play();
  window.open("https://box-testing-account.github.io/spencer-html-site/","_blank", 'menubar=no,status=no,toolbar=no,resizable=no,titlebar=no,alwaysRaised=yes,resizable=0');
});
