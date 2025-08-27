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
  name: "Katchi_Sera.mp3",
  title: "Katchi Sera",
  artist: "Artist: Unknown",
  cover: "covers/Katchi_Sera.jpg"
},
{
  name: "Dheere_Dheere.mp3",
  title: "Dheere Dheere",
  artist: "Artist: Unknown",
  cover: "covers/Dheere_Dheere.jpg"
},
{
  name: "Chuttamulle.mp3",
  title: "Chuttamulle",
  artist: "Artist: Unknown",
  cover: "covers/Chuttamulle.jpg"
},
{
  name: "Paththavaikkum.mp3",
  title: "Paththavaikkum",
  artist: "Artist: Unknown",
  cover: "covers/Paththavaikkum.jpg"
},
{
  name: "Fakira.mp3",
  title: "Fakira",
  artist: "Artist: Unknown",
  cover: "covers/Fakira.jpg"
},
{
  name: "Sanam_Puri_-_Aashiq_Tera.mp3",
  title: "Sanam Puri - Aashiq Tera",
  artist: "Artist: Unknown",
  cover: "covers/Sanam_Puri_-_Aashiq_Tera.jpg"
},
{
  name: "Alisha.mp3",
  title: "Alisha",
  artist: "Artist: Unknown",
  cover: "covers/Alisha.jpg"
},
{
  name: "I_Think_This_Is_Love.mp3",
  title: "I Think This Is Love",
  artist: "Artist: Unknown",
  cover: "covers/I_Think_This_Is_Love.jpg"
},
{
  name: "Soniyo.mp3",
  title: "Soniyo",
  artist: "Artist: Unknown",
  cover: "covers/Soniyo.jpg"
}
];

let songIndex = 0;
let isLooping = false;

function highlightActiveSong() {
  document.querySelectorAll(".song-item").forEach((el, idx) => {
    el.classList.toggle("active", idx === songIndex);
  });
}


function loadSong(song) {
  title.textContent = song.title;
  artist.textContent = song.artist;
  audio.src = "songs/" + encodeURIComponent(song.name);
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
  item.addEventListener("click", () => {
    songIndex = index;
    loadSong(songs[songIndex]);
    audio.play();
    playBtn.textContent = "⏸️";
  });
  songListDiv.appendChild(item);
});

highlightActiveSong();