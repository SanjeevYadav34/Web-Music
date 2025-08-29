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
  name: "Sai_Abhyankkar_-_Valam_Varavendum.mp3",
  title: "Sai Abhyankkar - Valam Varavendum",
  artist: "Artist: Unknown",
  cover: "covers/Sai_Abhyankkar_-_Valam_Varavendum.jpg"
},
{
  name: "../../../Komal/songs/Katchi_Sera.mp3",
  title: "Katchi Sera",
  artist: "Artist: Unknown",
  cover: "../Komal/covers/Katchi_Sera.jpg"
},
{
  name: "Sai_Abhyankkar_-_Aasa_Kooda.mp3",
  title: "Sai Abhyankkar - Aasa Kooda",
  artist: "Artist: Unknown",
  cover: "covers/Sai_Abhyankkar_-_Aasa_Kooda.jpg"
},
{
  name: "Sai_Abhyankkar_-_Sithira_Puthiri.mp3",
  title: "Sai Abhyankkar - Sithira Puthiri",
  artist: "Artist: Unknown",
  cover: "covers/Sai_Abhyankkar_-_Sithira_Puthiri.jpg"
},
{
  name: "Sai_Abhyankkar_-_Vizhi_Veekura.mp3",
  title: "Sai Abhyankkar - Vizhi Veekura",
  artist: "Artist: Unknown",
  cover: "covers/Sai_Abhyankkar_-_Vizhi_Veekura.jpg"
},
{
  name: "Sai_Abhyankkar_-_Salambala.mp3",
  title: "Sai Abhyankkar - Salambala",
  artist: "Artist: Unknown",
  cover: "covers/Sai_Abhyankkar_-_Salambala.jpg"
},
{
  name: "Sai_Abhyankkar_-_Verappa.mp3",
  title: "Sai Abhyankkar - Verappa",
  artist: "Artist: Unknown",
  cover: "covers/Sai_Abhyankkar_-_Verappa.jpg"
},
{
  name: "Sai_Abhyankkar_-_Benz_In_The_Universe_Theme.mp3",
  title: "Sai Abhyankkar - Benz In The Universe Theme",
  artist: "Artist: Unknown",
  cover: "covers/Sai_Abhyankkar_-_Benz_In_The_Universe_Theme.jpg"
},
{
  name: "Sai_Abhyankkar_-_Twin_Fish_Walter.mp3",
  title: "Sai Abhyankkar - Twin Fish Walter",
  artist: "Artist: Unknown",
  cover: "covers/Sai_Abhyankkar_-_Twin_Fish_Walter.jpg"
},
{
  name: "Sai_Abhyankkar_-_Blud_Is_On_His_Way.mp3",
  title: "Sai Abhyankkar - Blud Is On His Way",
  artist: "Artist: Unknown",
  cover: "covers/Sai_Abhyankkar_-_Blud_Is_On_His_Way.jpg"
},
{
  name: "Sai_Abhyankkar_-_Soda_Break.mp3",
  title: "Sai Abhyankkar - Soda Break",
  artist: "Artist: Unknown",
  cover: "covers/Sai_Abhyankkar_-_Soda_Break.jpg"
},
{
  name: "Sai_Abhyankkar_-_Boom_Boom_(From_Dude_-_Telugu).mp3",
  title: "Sai Abhyankkar - Boom Boom (From Dude - Telugu)",
  artist: "Artist: Unknown",
  cover: "covers/Sai_Abhyankkar_-_Boom_Boom_(From_Dude_-_Telugu).jpg"
},
{
  name: "Sai_Abhyankkar_-_Oorum_Blood.mp3",
  title: "Sai Abhyankkar - Oorum Blood",
  artist: "Artist: Unknown",
  cover: "covers/Sai_Abhyankkar_-_Oorum_Blood.jpg"
},
{
  name: "Sai_Abhyankkar_-_Salambala_(From_Madharaasi).mp3",
  title: "Sai Abhyankkar - Salambala (From Madharaasi)",
  artist: "Artist: Unknown",
  cover: "covers/Sai_Abhyankkar_-_Salambala_(From_Madharaasi).jpg"
},
{
  name: "Sai_Abhyankkar_-_Jaalakaari_(From_Balti).mp3",
  title: "Sai Abhyankkar - Jaalakaari (From Balti)",
  artist: "Artist: Unknown",
  cover: "covers/Sai_Abhyankkar_-_Jaalakaari_(From_Balti).jpg"
},
{
  name: "Sai_Abhyankkar_-_Boom_Boom_(From_Dude_-_Telugu,_Film_Version).mp3",
  title: "Sai Abhyankkar - Boom Boom (From Dude - Telugu, Film Version)",
  artist: "Artist: Unknown",
  cover: "covers/Sai_Abhyankkar_-_Boom_Boom_(From_Dude_-_Telugu,_Film_Version).jpg"
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