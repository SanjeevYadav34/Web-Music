const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progress = document.getElementById("progress");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const coverImg = document.getElementById("cover");
const loopBtn = document.getElementById("loop");
const songListDiv = document.getElementById("songList");


const songs = [
  {
    name: "DHAGALA LAGLI KALA.mp3",
    title: "DHAGALA LAGLI KALA😂",
    artist: "Artist: Naam nai pata",
    cover: "covers/dhagala.jpg"
  },
  {
    name: "RANU BOMBAI KI RANU.mp3",
    title: "Ranu Bombai Ki Rani",
    artist: "Artist: Iska bhi nai pata🤣",
    cover: "covers/ranu.jpg"
  },
  {
    name: "Tu Cheez Badi Hai.mp3",
    title: "Tu Cheez Badi Hai Mast Mast",
    artist: "Artist: Iska bhi nai pata🤣",
    cover: "covers/tu cheez.jpg"
  },
  {
    name: "feeling_good.mp3",
    title: "Michael Bublé - Feeling Good",
    artist: "Artist: Michael Bublé",
    cover: "covers/feeling_good.jpg"
  },
  {
    name: "new-mashup.mp3",
    title: "INDIANA Mashup",
    artist: "Artist: DJ INDIANA",
    cover: "covers/mashup.jpg"
  },
  {
    name: "mashup.mp3",
    title: "Bollywood Mashup Songs",
    artist: "Artist: DJ RAV UK",
    cover: "covers/mashup.jpg"
  },
  {
    name: "dmashup.mp3",
    title: "Bollywood Mashup 2",
    artist: "Artist: DJ INDIANA",
    cover: "covers/mashup.jpg"
  },
  {
    name: "mashup_3.mp3",
    title: "Mashup 3",
    artist: "Artist: Farooq",
    cover: "covers/mashup_3.jpg"
  },
  {
    name: "lovemashup.mp3",
    title: "Bollywood Love Mashup",
    artist: "Artist: T-Series",
    cover: "covers/lovemashup.jpg"
  },
  {
    name: "fav.mp3",
    title: "Bollywood Mashup Fav",
    artist: "Artist: DJ INDIANA",
    cover: "covers/mashup.jpg"
  },
  {
    name: "mashup5.mp3",
    title: "Bollywood Mashup 5",
    artist: "Artist: DJ INDIANA",
    cover: "covers/mashup.jpg"
  },
  {
    name: "mashup_6.mp3",
    title: "Bollywood Mashup 6",
    artist: "Artist: DJ INDIANA",
    cover: "covers/mashup.jpg"
  },
  {
    name: "itsmagic.mp3",
    title: "It's Magic",
    artist: "Artist: DJ INDIANA",
    cover: "covers/mashup.jpg"
  },
  {
    name: "beggin.mp3",
    title: "Beggin",
    artist: "Artist: Måneskin",
    cover: "covers/beggin.jpg"
  },
  {
    name: "sapphire.mp3",
    title: "Sapphire",
    artist: "Artist: Ed Sheeran",
    cover: "covers/sapphire.jpg"
  },
  {
    name: "fairytale.mp3",
    title: "Fairytale",
    artist: "Artist: Alexander Rybak",
    cover: "covers/fairytale.jpg"
  },
  {
    name: "cheri_cheri_lady.mp3",
    title: "Cheri Cheri Lady",
    artist: "Artist: Modern Talking",
    cover: "covers/cheri_cheri_lady.webp"
  },
  {
    name: "senorita.mp3",
    title: "SEÑORITA",
    artist: "Artist: Shawn Mendes, Camila Cabello",
    cover: "covers/senorita.webp"
  },
  {
    name: "neutral.mp3",
    title: "Imagine Dragons - Neutral",
    artist: "Artist: Imagine Dragons",
    cover: "covers/neutral.webp"
  }
];

let songIndex = 8;
let isLooping = false;

function loadSong(song) {
  title.textContent = song.title;
  artist.textContent = song.artist;
  audio.src = "songs/" + song.name;
  coverImg.src = song.cover;
  resetProgress();
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
  item.addEventListener("click", () => {
    songIndex = index;
    loadSong(songs[songIndex]);
    audio.play();
    playBtn.textContent = "⏸️";
  });
  songListDiv.appendChild(item);
});
