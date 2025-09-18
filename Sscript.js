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
    title: "Imagine Dragons - Natural",
    artist: "Artist: Imagine Dragons",
    cover: "covers/neutral.webp"
  },
{
  name: "Lucke_-_Paramavatar.mp3",
  title: "Lucke - Paramavatar",
  artist: "Artist: Unknown",
  cover: "covers/Lucke_-_Paramavatar.jpg"
},
{
  name: "Kishan_Soni_-_Mahabharat_Song_(Krishna_Arjuna_Rap_Song).mp3",
  title: "Kishan Soni - Mahabharat Song (Krishna Arjuna Rap Song)",
  artist: "Artist: Unknown",
  cover: "covers/Kishan_Soni_-_Mahabharat_Song_(Krishna_Arjuna_Rap_Song).jpg"
},
{
  name: "Shlovij_-_Main_He_Wo_Krishna.mp3",
  title: "Shlovij - Main He Wo Krishna",
  artist: "Artist: Unknown",
  cover: "covers/Shlovij_-_Main_He_Wo_Krishna.jpg"
},
{
  name: "Raanjha_-_Lakshman_Parshuram.mp3",
  title: "Raanjha - Lakshman Parshuram",
  artist: "Artist: Unknown",
  cover: "covers/Raanjha_-_Lakshman_Parshuram.jpg"
},
{
  name: "Raanjha_-_Mahavatar_Narsingh.mp3",
  title: "Raanjha - Mahavatar Narsingh",
  artist: "Artist: Unknown",
  cover: "covers/Raanjha_-_Mahavatar_Narsingh.jpg"
},
{
  name: "Lucke_-_Duvidha.mp3",
  title: "Lucke - Duvidha",
  artist: "Artist: Unknown",
  cover: "covers/Lucke_-_Duvidha.jpg"
},
{
  name: "Narci_-_Angad_Lalkaar.mp3",
  title: "Narci - Angad Lalkaar",
  artist: "Artist: Unknown",
  cover: "covers/Narci_-_Angad_Lalkaar.jpg"
},
{
  name: "Raanjha_-_Arjun.mp3",
  title: "Raanjha - Arjun",
  artist: "Artist: Unknown",
  cover: "covers/Raanjha_-_Arjun.jpg"
},
{
  name: "Red_Sky_Records_-_Wahi_Karn_Hu_Mai.mp3",
  title: "Red Sky Records - Wahi Karn Hu Mai",
  artist: "Artist: Unknown",
  cover: "covers/Red_Sky_Records_-_Wahi_Karn_Hu_Mai.jpg"
}
];

let songIndex = 8;
let isLooping = false;

function highlightActiveSong() {
  document.querySelectorAll(".song-item").forEach((el, idx) => {
    el.classList.toggle("active", idx === songIndex);
  });
}


function loadSong(song) {
  title.textContent = song.title;
  artist.textContent = song.artist;
  audio.src = "songs/" + song.name;
  coverImg.src = song.cover;
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

highlightActiveSong();