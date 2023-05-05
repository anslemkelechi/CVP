// Select the HTML5 video
const video = document.querySelector("#video");
const itemY = document.querySelector(".item-y");
const container = document.querySelector(".container");
container.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});
// set the pause button to display:none by default
document.querySelector(".fa-pause").style.display = "none";
itemY.textContent = ``;
// update the progress bar
video.addEventListener("timeupdate", () => {
  let curr = (video.currentTime / video.duration) * 100;
  let hours = Math.floor(video.currentTime / 3600)
    .toString()
    .padStart(2, "0");
  let minutes = Math.floor((video.currentTime % 3600) / 60)
    .toString()
    .padStart(2, "0");
  let seconds = Math.floor(video.currentTime % 60)
    .toString()
    .padStart(2, "0");
  let hours2 = Math.floor(video.duration / 3600)
    .toString()
    .padStart(2, "0");
  let minutes2 = Math.floor((video.duration % 3600) / 60)
    .toString()
    .padStart(2, "0");
  let seconds2 = Math.floor(video.duration % 60)
    .toString()
    .padStart(2, "0");
  itemY.textContent = `${hours}:${minutes}:${seconds}/${hours2}:${minutes2}:${seconds2}`;
  if (video.ended) {
    document.querySelector(".fa-play").style.display = "block";
    document.querySelector(".fa-pause").style.display = "none";
  }
  document.querySelector(".inner").style.width = `${curr}%`;
});
// pause or play the video
const play = (e) => {
  // Condition when to play a video
  if (video.paused) {
    document.querySelector(".fa-play").style.display = "none";
    document.querySelector(".fa-pause").style.display = "block";
    video.play();
  } else {
    document.querySelector(".fa-play").style.display = "block";
    document.querySelector(".fa-pause").style.display = "none";
    video.pause();
  }
};
// trigger fullscreen
const fullScreen = (e) => {
  e.preventDefault();
  container.classList.toggle("width");
};
// download the video
const download = (e) => {
  e.preventDefault();
  let a = document.createElement("a");
  a.href = video.src;
  a.target = "_blank";
  a.download = "";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
// rewind the current time
const rewind = (e) => {
  video.currentTime = video.currentTime - (video.duration / 100) * 5;
};
// forward the current time
const forward = (e) => {
  video.currentTime = video.currentTime + (video.duration / 100) * 5;
};
