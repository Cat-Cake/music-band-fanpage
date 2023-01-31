var videos = [ "./assets/videos/METALKINGDOM.mp4", "./assets/videos/BABYMETAL–DivineAttack.mp4", "./assets/videos/BABYMETAL-Monochrome.mp4"];

var currentIndex = 0;
var currentVideo = document.querySelector("#current-video");
var prevBtn = document.querySelector("#prev-btn");
var nextBtn = document.querySelector("#next-btn");

prevBtn.addEventListener("click", function() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = videos.length - 1;
  }
  currentVideo.src = videos[currentIndex];
  currentVideo.play();
});

nextBtn.addEventListener("click", function() {
  currentIndex++;
  if (currentIndex >= videos.length) {
    currentIndex = 0;
  }
  currentVideo.src = videos[currentIndex];
  currentVideo.play();
});