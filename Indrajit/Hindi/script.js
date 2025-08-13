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
  name: "Rockstar_-_Aur_Ho.mp3",
  title: "Rockstar - Aur Ho",
  artist: "Artist: Unknown",
  cover: "covers/Rockstar_-_Aur_Ho.jpg"
},
{
  name: "Rockstar_-_Tum_Ho.mp3",
  title: "Rockstar - Tum Ho",
  artist: "Artist: Unknown",
  cover: "covers/Rockstar_-_Tum_Ho.jpg"
},
{
  name: "Rockstar_-_Jo_Bhi_main.mp3",
  title: "Rockstar - Jo Bhi main",
  artist: "Artist: Unknown",
  cover: "covers/Rockstar_-_Jo_Bhi_main.jpg"
},
{
  name: "Rockstar_-_Sadda_Haq.mp3",
  title: "Rockstar - Sadda Haq",
  artist: "Artist: Unknown",
  cover: "covers/Rockstar_-_Sadda_Haq.jpg"
},
{
  name: "Rockstar_-_Phir_Se_Ud_Chala.mp3",
  title: "Rockstar - Phir Se Ud Chala",
  artist: "Artist: Unknown",
  cover: "covers/Rockstar_-_Phir_Se_Ud_Chala.jpg"
},
{
  name: "Rockstar_-_Nadaan_Parinde.mp3",
  title: "Rockstar - Nadaan Parinde",
  artist: "Artist: Unknown",
  cover: "covers/Rockstar_-_Nadaan_Parinde.jpg"
},
{
  name: "Rockstar_-_Kun_Faya_Kun.mp3",
  title: "Rockstar - Kun Faya Kun",
  artist: "Artist: Unknown",
  cover: "covers/Rockstar_-_Kun_Faya_Kun.jpg"
},
{
  name: "Rockstar_-_Jaagran.mp3",
  title: "Rockstar - Jaagran",
  artist: "Artist: Unknown",
  cover: "covers/Rockstar_-_Jaagran.jpg"
},
{
  name: "Kites_-_Zindagi_Do_Pal_Ki.mp3",
  title: "Kites - Zindagi Do Pal Ki",
  artist: "Artist: Unknown",
  cover: "covers/Kites_-_Zindagi_Do_Pal_Ki.jpg"
},
{
  name: "Kites_-_Dil_Kyun_Yeh_Mera.mp3",
  title: "Kites - Dil Kyun Yeh Mera",
  artist: "Artist: Unknown",
  cover: "covers/Kites_-_Dil_Kyun_Yeh_Mera.jpg"
},
{
  name: "Kites_-_Tum_Bhi_Ho_Wahi.mp3",
  title: "Kites - Tum Bhi Ho Wahi",
  artist: "Artist: Unknown",
  cover: "covers/Kites_-_Tum_Bhi_Ho_Wahi.jpg"
},
{
  name: "Kites_in_the_Sky_Song.mp3",
  title: "Kites in the Sky Song",
  artist: "Artist: Unknown",
  cover: "covers/Kites_in_the_Sky_Song.jpg"
},
{
  name: "Wake_Up_Sid_-_Iktara.mp3",
  title: "Wake Up Sid - Iktara",
  artist: "Artist: Unknown",
  cover: "covers/Wake_Up_Sid_-_Iktara.jpg"
},
{
  name: "Wake_Up_Sid_-_Aaj_Kal_Zindagi.mp3",
  title: "Wake Up Sid - Aaj Kal Zindagi",
  artist: "Artist: Unknown",
  cover: "covers/Wake_Up_Sid_-_Aaj_Kal_Zindagi.jpg"
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