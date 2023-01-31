let videos = [ "./assets/videos/METALKINGDOM.mp4", "./assets/videos/BABYMETAL–DivineAttack.mp4", "./assets/videos/BABYMETAL-Monochrome.mp4"];
let titles = ["METALKINGDOM", "DivineAttack", "Monochrome"]

let currentIndex = 0;
let currentVideo = document.querySelector("#current-video");
let prevBtn = document.querySelector("#prev-btn");
let nextBtn = document.querySelector("#next-btn");

let titlesContainer = document.querySelector('.titles-container')

prevBtn.addEventListener("click", function() {
currentIndex--;
if (currentIndex < 0) {
currentIndex = videos.length - 1;
}
currentVideo.src = videos[currentIndex];
let currentTitles = titles[currentIndex];
currentVideo.play();
titlesContainer.innerHTML = currentTitles;
});

nextBtn.addEventListener("click", function() {
currentIndex++;
if (currentIndex >= videos.length) {
currentIndex = 0;
}
currentVideo.src = videos[currentIndex];
let currentTitles = titles[currentIndex];
currentVideo.play();
titlesContainer.innerHTML = currentTitles;
});