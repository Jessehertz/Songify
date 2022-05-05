const switchbtn = document.querySelector(".box");
const close = document.querySelector(".box1");
const switchbtn2 = document.querySelector(".box2");
const menubar = document.querySelector(".box3");
const navbar = document.querySelector("#respnav");
const musicContainer = document.getElementById("audio-container");
const playBtn = document.getElementById("play");
const play2 = document.querySelectorAll("#btnplay");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const audio = document.getElementById("audio");
const progressContainer = document.getElementById("progress-container");
const progress = document.getElementById("progress");
const title = document.getElementById("title");
const cover = document.getElementById("cover");
let current = document.getElementById("current");
let duration = document.getElementById("duration");

// Song titles
let musicdetails = [
  {
    name: "Matilda",
    cover: "subaruboys.jpg",
    artist: "Cruel Santino",
  },
  {
    name: "I Told Gus I'm Dreamin",
    cover: "subaruboys.jpg",
    artist: "Cruel Santino",
  },
  {
    name: "War In The Trenches",
    cover: "subaruboys.jpg",
    artist: "Cruel Santino",
  },
  {
    name: "Tapenga",
    cover: "subaruboys.jpg",
    artist: "Cruel Santino",
  },
  {
    name: "The Pearls",
    cover: "subaruboys.jpg",
    artist: "Cruel Santino",
  },
  { name: "Heating Rocks", cover: "subaruboys.jpg", artist: "Cruel Santino" },
  {
    name: "Mermaid Aqua",
    cover: "subaruboys.jpg",
    artist: "Cruel Santino",
  },
  {
    name: "Own Game",
    cover: "subaruboys.jpg",
    artist: "Cruel Santino",
  },
  { name: "Deadman Bone", cover: "subaruboys.jpg", artist: "Cruel Santino" },
  { name: "Final Champion", cover: "subaruboys.jpg", artist: "Cruel Santino" },

  { name: "Swagger Back", cover: "subaruboys.jpg", artist: "Cruel Santino" },
  {
    name: "Subaru Boys",
    cover: "subaruboys.jpg",
    artist: "Cruel Santino",
  },
  {
    name: "First Heaven",
    cover: "subaruboys.jpg",
    artist: "Cruel Santino",
  },
  {
    name: "Beautiful Nothing",
    cover: "subaruboys.jpg",
    artist: "Cruel Santino",
  },
  { name: "Born Again", cover: "subaruboys.jpg", artist: "Cruel Santino" },
  {
    name: "Wicked City",
    cover: "subaruboys.jpg",
    artist: "Cruel Santino",
  },
  { name: "Fallin", cover: "subaruboys.jpg", artist: "Cruel Santino" },
  {
    name: "Way Of The Serpent",
    cover: "subaruboys.jpg",
    artist: "Cruel Santino",
  },
  { name: "Sucre Saga Ship", cover: "subaruboys.jpg", artist: "Cruel Santino" },
  {
    name: "Dirty Eyes Evil Manners",
    cover: "subaruboys.jpg",
    artist: "Cruel Santino",
  },
  { name: "SA-KURACHAN", cover: "subaruboys.jpg", artist: "Cruel Santino" },
];

// Keep track of song
let songIndex = 0;

// Initially load song details into DOM
loadSong(musicdetails[songIndex]);

// Update song details
function loadSong(song) {
  audio.src = `${song.name}.mp3`;
  title.textContent = `${song.name}`;
  artist.textContent = `${song.artist}`;
  cover.src = `${song.cover}`;
}

// Play song
function playSong() {
  audio.play();
  playBtn.textContent = "pause";
}
switchbtn.addEventListener("click", function () {
  if (switchbtn.checked == false) {
    document.querySelector("body").classList = "theme-light";
  } else {
    document.querySelector("body").classList = "theme-dark";
  }
});
switchbtn2.addEventListener("click", function () {
  if (switchbtn2.checked == false) {
    document.querySelector("body").classList = "theme-light";
  } else {
    document.querySelector("body").classList = "theme-dark";
  }
});
close.addEventListener("click", function () {
  navbar.classList = "disablemenu";
});
menubar.addEventListener("click", function () {
  navbar.classList.remove("disablemenu");
});

// Pause song
function pauseSong() {
  playBtn.textContent = "play_arrow";

  audio.pause();
}

// Previous song
function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = musicdetails.length - 1;
  }

  loadSong(musicdetails[songIndex]);

  playSong();
}

// Next song
function nextSong() {
  songIndex++;

  if (songIndex > musicdetails.length - 1) {
    songIndex = 0;
  }

  loadSong(musicdetails[songIndex]);

  playSong();
}

// Update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}

// Event listeners
playBtn.addEventListener("click", () => {
  if (playBtn.textContent == "pause") {
    pauseSong();
  } else {
    playSong();
  }
});

// Change song
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);
audio.addEventListener("loadeddata", () => {
  let audioDuration = audio.duration;
  let totalMin = Math.floor(audioDuration / 60);
  let totalSec = Math.floor(audioDuration % 60);
  if (totalSec < 10) {
    totalSec = `0${totalSec}`;
  }
  duration.textContent = `${totalMin}:${totalSec}`;
  // Time/song update
  audio.addEventListener("timeupdate", updateProgress);

  audio.addEventListener("timeupdate", (e) => {
    const currentTime = e.target.currentTime; //getting playing song currentTime
    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if (currentSec < 10) {
      //if sec is less than 10 then add 0 before it
      currentSec = `0${currentSec}`;
    }
    current.innerText = `${currentMin}:${currentSec}`;
  });
});
progressContainer.addEventListener("click", setProgress);

// Song ends
audio.addEventListener("ended", nextSong);

play2.forEach((key) => {
  key.addEventListener("click", () => {
    let getLiIndex = key.getAttribute("index");
    musicIndex = getLiIndex; //updating current song index with clicked li index
    songIndex = musicIndex;
    loadSong(musicdetails[musicIndex]);
    audio.play();
    playBtn.textContent = "pause";
    footer.classList.remove("nonvisible");
    footer.classList.add("visible");
  });
});

const input = document.querySelector(".txtinput");
document.addEventListener("keyup", function (event) {
  if (event.keyCode === 13 && input.value == "Rave and Roses") {
    window.open("rnr.html");
  } else if (event.keyCode === 13 && input.value == "Certified Lover Boy") {
    window.open("clb.html");
  } else if (event.keyCode === 13) {
    window.open("album.html");
  }
});
