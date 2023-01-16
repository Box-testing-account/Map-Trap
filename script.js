localStorage.setItem("activated", "true");

const submitBtn = document.getElementById("submit-btn");
const audioPlayer = document.getElementById("audio-player");

submitBtn.addEventListener("click", function(event) {
  event.preventDefault();
  audioPlayer.play();
  window.open("https://box-testing-account.github.io/spencer-html-site/","_blank", 'menubar=no,status=no,toolbar=no,resizable=no,titlebar=no,alwaysRaised=yes,resizable=0');
});

setInterval(function() {
  if (localStorage.getItem("activated") === "false") {
    window.close();
    console.log("Activated is false")
  };
}, 100);
