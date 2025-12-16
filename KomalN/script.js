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
  name: "KK_-_Pal.mp3",
  title: "KK - Pal",
  artist: "Artist: Unknown",
  cover: "covers/KK_-_Pal.jpg"
},
{
  name: "KK_-_Tadap_Tadap.mp3",
  title: "KK - Tadap Tadap",
  artist: "Artist: Unknown",
  cover: "covers/KK_-_Tadap_Tadap.jpg"
},
{
  name: "KK_-_Zara_Sa.mp3",
  title: "KK - Zara Sa",
  artist: "Artist: Unknown",
  cover: "covers/KK_-_Zara_Sa.jpg"
},
{
  name: "KK_-_Tu_Hi_Meri_Shab_Hai.mp3",
  title: "KK - Tu Hi Meri Shab Hai",
  artist: "Artist: Unknown",
  cover: "covers/KK_-_Tu_Hi_Meri_Shab_Hai.jpg"
},
{
  name: "KK_-_Khuda_Jaane.mp3",
  title: "KK - Khuda Jaane",
  artist: "Artist: Unknown",
  cover: "covers/KK_-_Khuda_Jaane.jpg"
},
{
  name: "KK_-_Aankhon_Mein_Teri.mp3",
  title: "KK - Aankhon Mein Teri",
  artist: "Artist: Unknown",
  cover: "covers/KK_-_Aankhon_Mein_Teri.jpg"
},
{
  name: "KK_-_Sach_Keh_Raha_Hai_Deewana.mp3",
  title: "KK - Sach Keh Raha Hai Deewana",
  artist: "Artist: Unknown",
  cover: "covers/KK_-_Sach_Keh_Raha_Hai_Deewana.jpg"
},
{
  name: "KK_-_Dil_Ibaadat.mp3",
  title: "KK - Dil Ibaadat",
  artist: "Artist: Unknown",
  cover: "covers/KK_-_Dil_Ibaadat.jpg"
},
{
  name: "KK_-_Labon_Ko.mp3",
  title: "KK - Labon Ko",
  artist: "Artist: Unknown",
  cover: "covers/KK_-_Labon_Ko.jpg"
},
{
  name: "KK_-_Alvida.mp3",
  title: "KK - Alvida",
  artist: "Artist: Unknown",
  cover: "covers/KK_-_Alvida.jpg"
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