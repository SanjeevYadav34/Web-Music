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
  name: "Hiphop_Tamizha_-_Manithan_Tamizhan.mp3",
  title: "Hiphop Tamizha - Manithan Tamizhan",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Manithan_Tamizhan.jpg"
},
{
  name: "Hiphop_Tamizha_-_Tamizhanda.mp3",
  title: "Hiphop Tamizha - Tamizhanda",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Tamizhanda.jpg"
},
{
  name: "Hiphop_Tamizha_-_Tamizh_Theriyum.mp3",
  title: "Hiphop Tamizha - Tamizh Theriyum",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Tamizh_Theriyum.jpg"
},
{
  name: "Hiphop_Tamizha_-_Club_Le_Mabbu_Le.mp3",
  title: "Hiphop Tamizha - Club Le Mabbu Le",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Club_Le_Mabbu_Le.jpg"
},
{
  name: "Hiphop_Tamizha_-_Sentamizh_Penne.mp3",
  title: "Hiphop Tamizha - Sentamizh Penne",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Sentamizh_Penne.jpg"
},
{
  name: "Hiphop_Tamizha_-_Ini_Illaye_Hum.mp3",
  title: "Hiphop Tamizha - Ini Illaye Hum",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Ini_Illaye_Hum.jpg"
},
{
  name: "Hiphop_Tamizha_-_Cheap_Popularity_(Skit).mp3",
  title: "Hiphop Tamizha - Cheap Popularity (Skit)",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Cheap_Popularity_(Skit).jpg"
},
{
  name: "Hiphop_Tamizha_-_Iraiva.mp3",
  title: "Hiphop Tamizha - Iraiva",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Iraiva.jpg"
},
{
  name: "Hiphop_Tamizha_-_Karpom_Karpipom.mp3",
  title: "Hiphop Tamizha - Karpom Karpipom",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Karpom_Karpipom.jpg"
},
{
  name: "Hiphop_Tamizha_-_Hey_Do_What_I_Say.mp3",
  title: "Hiphop Tamizha - Hey Do What I Say",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Hey_Do_What_I_Say.jpg"
},
{
  name: "Hiphop_Tamizha_-_Stop_Piracy_(Outro).mp3",
  title: "Hiphop Tamizha - Stop Piracy (Outro)",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Stop_Piracy_(Outro).jpg"
},
{
  name: "Hiphop_Tamizha_-_Excuse_Me_Kathali_(single).mp3",
  title: "Hiphop Tamizha - Excuse Me Kathali (single)",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Excuse_Me_Kathali_(single).jpg"
},
{
  name: "Hiphop_Tamizha_-_Ezhuvoam_Vaa_(single).mp3",
  title: "Hiphop Tamizha - Ezhuvoam Vaa (single)",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Ezhuvoam_Vaa_(single).jpg"
},
{
  name: "Hiphop_Tamizha_-_Nice_Vs_Naughty_(Na_Na_Na).mp3",
  title: "Hiphop Tamizha - Nice Vs Naughty (Na Na Na)",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Nice_Vs_Naughty_(Na_Na_Na).jpg"
},
{
  name: "Hiphop_Tamizha_-_Club_le_Mabbu_le_(single_/_video).mp3",
  title: "Hiphop Tamizha - Club le Mabbu le (single / video)",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Club_le_Mabbu_le_(single_/_video).jpg"
},
{
  name: "Hiphop_Tamizha_-_Vaadi_Pulla_Vaadi_(single).mp3",
  title: "Hiphop Tamizha - Vaadi Pulla Vaadi (single)",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Vaadi_Pulla_Vaadi_(single).jpg"
},
{
  name: "Hiphop_Tamizha_-_Poda_(single).mp3",
  title: "Hiphop Tamizha - Poda (single)",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Poda_(single).jpg"
},
{
  name: "Hiphop_Tamizha_-_Takkaru_Takkaru_(single).mp3",
  title: "Hiphop Tamizha - Takkaru Takkaru (single)",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Takkaru_Takkaru_(single).jpg"
},
{
  name: "Hiphop_Tamizha_-_Kovai_Gethu_(single).mp3",
  title: "Hiphop Tamizha - Kovai Gethu (single)",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Kovai_Gethu_(single).jpg"
},
{
  name: "Hiphop_Tamizha_-_Maanavan.mp3",
  title: "Hiphop Tamizha - Maanavan",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Maanavan.jpg"
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