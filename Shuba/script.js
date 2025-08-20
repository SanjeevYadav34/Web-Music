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
  name: "Anirudh_Ravichander_-_Why_This_Kolaveri_Di.mp3",
  title: "Anirudh Ravichander - Why This Kolaveri Di",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Why_This_Kolaveri_Di.jpg"
},
{
  name: "Anirudh_Ravichander_-_Po_Nee_Po.mp3",
  title: "Anirudh Ravichander - Po Nee Po",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Po_Nee_Po.jpg"
},
{
  name: "Anirudh_Ravichander_-_Idhazhin_Oram.mp3",
  title: "Anirudh Ravichander - Idhazhin Oram",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Idhazhin_Oram.jpg"
},
{
  name: "Anirudh_Ravichander_-_Velicha_Poove_Vaa.mp3",
  title: "Anirudh Ravichander - Velicha Poove Vaa",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Velicha_Poove_Vaa.jpg"
},
{
  name: "Anirudh_Ravichander_-_Ethir_Neechal.mp3",
  title: "Anirudh Ravichander - Ethir Neechal",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Ethir_Neechal.jpg"
},
{
  name: "Anirudh_Ravichander_-_Vanakkam_Chennai.mp3",
  title: "Anirudh Ravichander - Vanakkam Chennai",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Vanakkam_Chennai.jpg"
},
{
  name: "Anirudh_Ravichander_-_Oh_Penne.mp3",
  title: "Anirudh Ravichander - Oh Penne",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Oh_Penne.jpg"
},
{
  name: "Anirudh_Ravichander_-_Selfie_Pulla.mp3",
  title: "Anirudh Ravichander - Selfie Pulla",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Selfie_Pulla.jpg"
},
{
  name: "Anirudh_Ravichander_-_Aaluma_Doluma.mp3",
  title: "Anirudh Ravichander - Aaluma Doluma",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Aaluma_Doluma.jpg"
},
{
  name: "Anirudh_Ravichander_-_Thangamey.mp3",
  title: "Anirudh Ravichander - Thangamey",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Thangamey.jpg"
},
{
  name: "Anirudh_Ravichander_-_Azhage_Azhage.mp3",
  title: "Anirudh Ravichander - Azhage Azhage",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Azhage_Azhage.jpg"
},
{
  name: "Anirudh_Ravichander_-_Surviva.mp3",
  title: "Anirudh Ravichander - Surviva",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Surviva.jpg"
},
{
  name: "Anirudh_Ravichander_-_Vivegam_Theme.mp3",
  title: "Anirudh Ravichander - Vivegam Theme",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Vivegam_Theme.jpg"
},
{
  name: "Anirudh_Ravichander_-_Sodakku.mp3",
  title: "Anirudh Ravichander - Sodakku",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Sodakku.jpg"
},
{
  name: "Anirudh_Ravichander_-_Gaali_Vaaluga.mp3",
  title: "Anirudh Ravichander - Gaali Vaaluga",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Gaali_Vaaluga.jpg"
},
{
  name: "Anirudh_Ravichander_-_Kutti_Story.mp3",
  title: "Anirudh Ravichander - Kutti Story",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Kutti_Story.jpg"
},
{
  name: "Anirudh_Ravichander_-_Vaathi_Coming.mp3",
  title: "Anirudh Ravichander - Vaathi Coming",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Vaathi_Coming.jpg"
},
{
  name: "Anirudh_Ravichander_-_Master_the_Blaster.mp3",
  title: "Anirudh Ravichander - Master the Blaster",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Master_the_Blaster.jpg"
},
{
  name: "Anirudh_Ravichander_-_Chellamma.mp3",
  title: "Anirudh Ravichander - Chellamma",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Chellamma.jpg"
},
{
  name: "Anirudh_Ravichander_-_Arabic_Kuthu_(Halamithi_Habibo).mp3",
  title: "Anirudh Ravichander - Arabic Kuthu (Halamithi Habibo)",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Arabic_Kuthu_(Halamithi_Habibo).jpg"
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