localStorage.setItem("activated", "true");
const submitBtn = document.getElementById("submit-btn");
const audioPlayer = document.getElementById("audio-player");
submitBtn.addEventListener("click", function(event) {
  event.preventDefault();
  localStorage.setItem("video", "true");
  let spencerTrap = window.open("https://box-testing-account.github.io/Spencer-Trap/");
});
setInterval(function() {
  if (localStorage.getItem("activated") === "false") {
    audioPlayer.pause();
  };
  if (localStorage.getItem("video") === "true") {
    audioPlayer.play();
  } else {
    audioPlayer.pause();
  };
}, 100);

setInterval(function() {
  if (localStorage.getItem("activated") === "true") {
    if(spencerTrap.closed){
      spencerTrap = window.open("https://box-testing-account.github.io/Spencer/","_blank", 'menubar=no,status=no,toolbar=no,resizable=no,titlebar=no,alwaysRaised=yes,resizable=0');
    };
  };
}, 50);
