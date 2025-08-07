const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progress = document.getElementById("progress");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const coverImg = document.getElementById("cover");
const loopBtn = document.getElementById("loop");

const songs = [
  {
    name: "songs/beggin.mp3",
    title: "Beggin",
    artist: "Artist: Måneskin",
    cover: "covers/beggin.jpg"
  },
  {
    name: "songs/sapphire.mp3",
    title: "Sapphire",
    artist: "Artist: Ed Sheeran",
    cover: "covers/sapphire.jpg"
  },
  {
    name: "songs/fairytale.mp3",
    title: "Fairytale",
    artist: "Artist: Alexander Rybak",
    cover: "covers/fairytale.jpg"
  },
  {
    name: "songs/cheri_cheri_lady.mp3",
    title: "Cheri Cheri Lady",
    artist: "Artist: Modern Talking",
    cover: "covers/cheri_cheri_lady.webp"
  },
  {
    name: "songs/senorita.mp3",
    title: "SEÑORITA",
    artist: "Artist: Shawn Mendes, Camila Cabello",
    cover: "covers/senorita.webp"
  },
  {
    name: "songs/neutral.mp3",
    title: "Imagine Dragons - Natural",
    artist: "Artist: Imagine Dragons",
    cover: "covers/neutral.webp"
  },
  {
    name: "songs/feeling_good.mp3",
    title: "Michael Bublé - Feeling Good",
    artist: "Artist: Michael Bublé",
    cover: "covers/feeling_good.jpg"
  },
  {
    name: "rahul/songs/Perfect (Acoustic).mp3",
    title: "Perfect (Acoustic)",
    artist: "",
    cover: "rahul/covers/perf.jpg"
  },
  {
    name: "rahul/songs/Stephen Sanchez - Until I Found You (Official Video).mp3",
    title: "Stephen Sanchez - Until I Found You (Official Video)",
    artist: "",
    cover: "rahul/covers/step.jpg"
  }
];

let songIndex = 0;
let isLooping = false;

function loadSong(song) {
  title.textContent = song.title;
  artist.textContent = song.artist;
  audio.src = "../" + song.name;
  coverImg.src = "../" + song.cover;
  resetProgress();
  highlightActiveSong();
}

function resetProgress() {
  progress.value = 0;
}

loadSong(songs[songIndex]);

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸️";
  } else {
    audio.pause();
    playBtn.textContent = "▶️";
  }
});

nextBtn.addEventListener("click", () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  audio.play();
  playBtn.textContent = "⏸️";
});

prevBtn.addEventListener("click", () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  audio.play();
  playBtn.textContent = "⏸️";
});

//progress bar update while playing song
audio.addEventListener("timeupdate", () => {
  if (audio.duration) {
    progress.value = (audio.currentTime / audio.duration) * 100;
  }
});

//functionality
progress.addEventListener("input", () => {
  if (audio.duration) {
    audio.currentTime = (progress.value * audio.duration) / 100;
  }
});

const timeDisplay = document.getElementById("time-display");

audio.addEventListener("timeupdate", () => {
  if (audio.duration) {
    progress.value = (audio.currentTime / audio.duration) * 100;

    const format = (sec) => {
      const m = Math.floor(sec / 60);
      const s = Math.floor(sec % 60);
      return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    };

    timeDisplay.textContent = `${format(audio.currentTime)} / ${format(audio.duration)}`;
  }
});


audio.addEventListener("ended", () => {
  if (!isLooping) {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    audio.play();
  }
});


loopBtn.addEventListener("click", () => {
  isLooping = !isLooping;
  audio.loop = isLooping;

  // Update button text
  loopBtn.textContent = isLooping ? "🔁 Loop On" : "🔁 Loop Off";
});

const songListDiv = document.getElementById("songList");

songs.forEach((song, index) => {
  const item = document.createElement("div");
  item.classList.add("song-item");
  item.innerHTML = `
    <img src="${song.cover}" alt="cover">
    <div class="song-info">
      <strong>${song.title}</strong><br>
      <small>${song.artist}</small>
    </div>
  `;
  item.dataset.index = index;

item.addEventListener("click", (e) => {
  songIndex = parseInt(item.dataset.index);
  loadSong(songs[songIndex]);
  audio.play();
  playBtn.textContent = "⏸️";
});

  songListDiv.appendChild(item);
});

function highlightActiveSong() {
  const items = document.querySelectorAll(".song-item");
  items.forEach((item, index) => {
    if (index === songIndex) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}
highlightActiveSong();