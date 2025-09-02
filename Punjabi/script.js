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
    name: "songs/Guru Randhawa - SIRRA.mp3",
    title: "Guru Randhawa - SIRRA",
    artist: "Artist: Unknown",
    cover: "covers/Guru Randhawa - SIRRA.webp"
},
{
  name: "songs/Shubh_-_Supreme.mp3",
  title: "Shubh - Supreme",
  artist: "Artist: Unknown",
  cover: "covers/Shubh_-_Supreme.jpg"
},
{
  name: "songs/Prabh_Singh_-_9:45.mp3",
  title: "Prabh Singh - 9:45",
  artist: "Artist: Unknown",
  cover: "covers/Prabh_Singh_-_9:45.jpg"
},
{
  name: "songs/Shubh_-_Fell_For_You.mp3",
  title: "Shubh - Fell For You",
  artist: "Artist: Unknown",
  cover: "covers/Shubh_-_Fell_For_You.jpg"
},
{
  name: "songs/Guru_Randhawa_-_Qatal.mp3",
  title: "Guru Randhawa - Qatal",
  artist: "Artist: Unknown",
  cover: "covers/Guru_Randhawa_-_Qatal.jpg"
},
{
  name: "songs/oheydoz, Jaskaran & Rita Kim - Superstar.mp3",
  title: "oheydoz, Jaskaran & Rita Kim - Superstar",
  artist: "Artist: Unknown",
  cover: "covers/oheydoz, Jaskaran & Rita Kim - Superstar.webp"
},
{
  name: "songs/AP_Dhillon,_Gurinder_Gill_-_Excuses.mp3",
  title: "AP Dhillon, Gurinder Gill - Excuses",
  artist: "Artist: Unknown",
  cover: "covers/AP_Dhillon,_Gurinder_Gill_-_Excuses.jpg"
},
{
  name: "songs/Karan_Aujla_-_Softly.mp3",
  title: "Karan Aujla - Softly",
  artist: "Artist: Unknown",
  cover: "covers/Karan_Aujla_-_Softly.jpg"
},
{
  name: "songs/Shubh_-_One_Love.mp3",
  title: "Shubh - One Love",
  artist: "Artist: Unknown",
  cover: "covers/Shubh_-_One_Love.jpg"
},
{
  name: "songs/Diljit_Dosanjh_&_Sia_-_Hass_Hass.mp3",
  title: "Diljit Dosanjh & Sia - Hass Hass",
  artist: "Artist: Unknown",
  cover: "covers/Diljit_Dosanjh_&_Sia_-_Hass_Hass.jpg"
},
{
  name: "songs/Tesher_-_Jalebi_Baby.mp3",
  title: "Tesher - Jalebi Baby",
  artist: "Artist: Unknown",
  cover: "covers/Tesher_-_Jalebi_Baby.jpg"
},
{
  name: "songs/Guru_Randhawa_-_Azul.mp3",
  title: "Guru Randhawa - Azul",
  artist: "Artist: Unknown",
  cover: "covers/Guru_Randhawa_-_Azul.jpg"
},
{
  name: "songs/Talwinder_-_Haseen.mp3",
  title: "Talwinder - Haseen",
  artist: "Artist: Unknown",
  cover: "covers/Talwinder_-_Haseen.jpg"
},
{
  name: "songs/Harshal_Music_ft._Shubh_&_Sonam_Bajwa_-_Fell_For_You_Mashup.mp3",
  title: "Harshal Music ft. Shubh & Sonam Bajwa - Fell For You Mashup",
  artist: "Artist: Unknown",
  cover: "covers/Harshal_Music_ft._Shubh_&_Sonam_Bajwa_-_Fell_For_You_Mashup.jpg"
},
{
  name: "songs/Deepti_-_Russian_Bandana_(Dhanda_Nyoliwala).mp3",
  title: "Deepti - Russian Bandana (Dhanda Nyoliwala)",
  artist: "Artist: Unknown",
  cover: "covers/Deepti_-_Russian_Bandana_(Dhanda_Nyoliwala).jpg"
},
{
  name: "songs/Karan_Aujla_-_Wavy.mp3",
  title: "Karan Aujla - Wavy",
  artist: "Artist: Unknown",
  cover: "covers/Karan_Aujla_-_Wavy.jpg"
},
{
  name: "songs/Diljit_Dosanjh_ft._Sultaan_-_Lalkaara.mp3",
  title: "Diljit Dosanjh ft. Sultaan - Lalkaara",
  artist: "Artist: Unknown",
  cover: "covers/Diljit_Dosanjh_ft._Sultaan_-_Lalkaara.jpg"
},
{
  name: "songs/Shubh_-_MVP.mp3",
  title: "Shubh - MVP",
  artist: "Artist: Unknown",
  cover: "covers/Shubh_-_MVP.jpg"
},
{
  name: "songs/Shubh_-_You_And_Me.mp3",
  title: "Shubh - You And Me",
  artist: "Artist: Unknown",
  cover: "covers/Shubh_-_You_And_Me.jpg"
},
{
  name: "songs/Afusic_-_Pal_Pal.mp3",
  title: "Afusic - Pal Pal",
  artist: "Artist: Unknown",
  cover: "covers/Afusic_-_Pal_Pal.jpg"
},
{
  name: "songs/Release_-_Kinni_Kinni.mp3",
  title: "Release - Kinni Kinni",
  artist: "Artist: Unknown",
  cover: "covers/Release_-_Kinni_Kinni.jpg"
},
{
  name: "songs/Sai_Abhyankkar_-_Aasa_Kooda.mp3",
  title: "Sai Abhyankkar - Aasa Kooda",
  artist: "Artist: Unknown",
  cover: "covers/Sai_Abhyankkar_-_Aasa_Kooda.jpg"
},
{
  name: "songs/Aditya_Rikhari_&_Ankita_Chhetri_-_Sahiba.mp3",
  title: "Aditya Rikhari & Ankita Chhetri - Sahiba",
  artist: "Artist: Unknown",
  cover: "covers/Aditya_Rikhari_&_Ankita_Chhetri_-_Sahiba.jpg"
},
{
  name: "songs/Yo_Yo_Honey_Singh_&_Nora_Fatehi_-_Payal_Song.mp3",
  title: "Yo Yo Honey Singh & Nora Fatehi - Payal Song",
  artist: "Artist: Unknown",
  cover: "covers/Yo_Yo_Honey_Singh_&_Nora_Fatehi_-_Payal_Song.jpg"
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
    <img src="../${song.cover}" alt="cover">
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