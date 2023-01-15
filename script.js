const submitBtn = document.getElementById("submit-btn");
const searchBar = document.getElementById("search-bar");
const audioPlayer = document.getElementById("audio-player");

submitBtn.addEventListener("click", function(event) {
  event.preventDefault();
  const searchQuery = searchBar.value;
  const googleMapsUrl = `https://www.google.com/maps/search/${searchQuery}`;
  audioPlayer.play();
  window.open(googleMapsUrl);
});
