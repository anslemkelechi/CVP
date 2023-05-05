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



  //  <html>
  //   <head>
  //   <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/anslemkelechi/CVP/style.min.css" /> 
  //   </head>
  //   <body>
  //       <div class="container">
  //     <video
  //       src="${req.protocol}://${req.get(
  //     "host"
  //   )}/api/v1/media/video/${videoUrl}" type="video/mp4"
  //       id="video"
  //     ></video>

  //     <div class="timeline">
  //       <div class="bar">
  //         <div class="inner"></div>
  //       </div>
  //     </div>
  //     <div class="controls">
  //       <div class="item" onclick="rewind(event)">
  //         <i class="fa-solid fa-backward"></i>
  //       </div>
  //       <div class="item" onclick="play(event)">
  //         <i class="fa fa-play"></i>
  //         <i class="fa fa-pause"></i>
  //       </div>
  //       <div class="item" onclick="forward(event)">
  //         <i class="fa-solid fa-forward"></i>
  //       </div>
  //       <div class="item"><i class="fa-solid fa-volume-high"></i></div>
  //       <div class="item item-y">2:00/2:18</div>
  //       <div class="item item-z" onclick="fullScreen(event)">
  //         <i class="fa-solid fa-expand"></i>
  //       </div>
  //     </div>
  //   </div>
  //   <script src="https://cdn.jsdelivr.net/gh/anslemkelechi/CVP/script.min.js"></script>
  //   </body>
  //   </html>