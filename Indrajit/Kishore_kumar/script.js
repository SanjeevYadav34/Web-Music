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
  name: "Kishore_Kumar_-_Kuchh_To_Log_Kahenge.mp3",
  title: "Kishore Kumar - Kuchh To Log Kahenge",
  artist: "Artist: Unknown",
  cover: "covers/Kishore_Kumar_-_Kuchh_To_Log_Kahenge.jpg"
},
{
  name: "Kishore_Kumar_-_Ek_Ajanabee_Haseena_Se.mp3",
  title: "Kishore Kumar - Ek Ajanabee Haseena Se",
  artist: "Artist: Unknown",
  cover: "covers/Kishore_Kumar_-_Ek_Ajanabee_Haseena_Se.jpg"
},
{
  name: "Kishore_Kumar_-_Mera_Jeevan_Kora_Kagaz.mp3",
  title: "Kishore Kumar - Mera Jeevan Kora Kagaz",
  artist: "Artist: Unknown",
  cover: "covers/Kishore_Kumar_-_Mera_Jeevan_Kora_Kagaz.jpg"
},
{
  name: "Kishore_Kumar_-_Chingari_Koi_Bhadke.mp3",
  title: "Kishore Kumar - Chingari Koi Bhadke",
  artist: "Artist: Unknown",
  cover: "covers/Kishore_Kumar_-_Chingari_Koi_Bhadke.jpg"
},
{
  name: "Kishore_Kumar_-_O_Sathi_Re.mp3",
  title: "Kishore Kumar - O Sathi Re",
  artist: "Artist: Unknown",
  cover: "covers/Kishore_Kumar_-_O_Sathi_Re.jpg"
},
{
  name: "Kishore_Kumar_-_Dil_Aisa_Kisi_Ne_Mera_Toda.mp3",
  title: "Kishore Kumar - Dil Aisa Kisi Ne Mera Toda",
  artist: "Artist: Unknown",
  cover: "covers/Kishore_Kumar_-_Dil_Aisa_Kisi_Ne_Mera_Toda.jpg"
},
{
  name: "Kishore_Kumar_-_Yeh_Kya_Hua.mp3",
  title: "Kishore Kumar - Yeh Kya Hua",
  artist: "Artist: Unknown",
  cover: "covers/Kishore_Kumar_-_Yeh_Kya_Hua.jpg"
},
{
  name: "Kishore_Kumar_-_Yeh_Raaten_Yeh_Mausam.mp3",
  title: "Kishore Kumar - Yeh Raaten Yeh Mausam",
  artist: "Artist: Unknown",
  cover: "covers/Kishore_Kumar_-_Yeh_Raaten_Yeh_Mausam.jpg"
},
{
  name: "Kishore_Kumar_-_Tum_Bin_Jaoon_Kahan.mp3",
  title: "Kishore Kumar - Tum Bin Jaoon Kahan",
  artist: "Artist: Unknown",
  cover: "covers/Kishore_Kumar_-_Tum_Bin_Jaoon_Kahan.jpg"
},
{
  name: "Kishore_Kumar_-_Zindagi_Ke_Safar_Mein_Guzar_Jaate.mp3",
  title: "Kishore Kumar - Zindagi Ke Safar Mein Guzar Jaate",
  artist: "Artist: Unknown",
  cover: "covers/Kishore_Kumar_-_Zindagi_Ke_Safar_Mein_Guzar_Jaate.jpg"
},
{
  name: "Kishore_Kumar_-_Zindagi_Ka_Safar_Hai_Yeh_Kaisa_Safar.mp3",
  title: "Kishore Kumar - Zindagi Ka Safar Hai Yeh Kaisa Safar",
  artist: "Artist: Unknown",
  cover: "covers/Kishore_Kumar_-_Zindagi_Ka_Safar_Hai_Yeh_Kaisa_Safar.jpg"
},
{
  name: "Kishore_Kumar_-_Zindagi_Ek_Safar_Hai_Suhana.mp3",
  title: "Kishore Kumar - Zindagi Ek Safar Hai Suhana",
  artist: "Artist: Unknown",
  cover: "covers/Kishore_Kumar_-_Zindagi_Ek_Safar_Hai_Suhana.jpg"
},
{
  name: "Kishore_Kumar_-_O_Mere_Dil_Ke_Chain.mp3",
  title: "Kishore Kumar - O Mere Dil Ke Chain",
  artist: "Artist: Unknown",
  cover: "covers/Kishore_Kumar_-_O_Mere_Dil_Ke_Chain.jpg"
},
{
  name: "Kishore_Kumar_-_Phoolon_Ke_Rang_Se.mp3",
  title: "Kishore Kumar - Phoolon Ke Rang Se",
  artist: "Artist: Unknown",
  cover: "covers/Kishore_Kumar_-_Phoolon_Ke_Rang_Se.jpg"
},
{
  name: "Kishore_Kumar_-_Aane_Wala_Pal_Jane_Wala_Hai.mp3",
  title: "Kishore Kumar - Aane Wala Pal Jane Wala Hai",
  artist: "Artist: Unknown",
  cover: "covers/Kishore_Kumar_-_Aane_Wala_Pal_Jane_Wala_Hai.jpg"
},
{
  name: "Kishore_Kumar_-_Mere_Sapnon_Ki_Rani.mp3",
  title: "Kishore Kumar - Mere Sapnon Ki Rani",
  artist: "Artist: Unknown",
  cover: "covers/Kishore_Kumar_-_Mere_Sapnon_Ki_Rani.jpg"
},
{
  name: "Kishore_Kumar_-_Yeh_Sham_Mastani.mp3",
  title: "Kishore Kumar - Yeh Sham Mastani",
  artist: "Artist: Unknown",
  cover: "covers/Kishore_Kumar_-_Yeh_Sham_Mastani.jpg"
},
{
  name: "Kishore_Kumar_-_Roop_Tera_Mastana.mp3",
  title: "Kishore Kumar - Roop Tera Mastana",
  artist: "Artist: Unknown",
  cover: "covers/Kishore_Kumar_-_Roop_Tera_Mastana.jpg"
},
{
  name: "Kishore_Kumar_-_Pal_Pal_Dil_Ke_Paas_Tum_Rehti_Ho.mp3",
  title: "Kishore Kumar - Pal Pal Dil Ke Paas Tum Rehti Ho",
  artist: "Artist: Unknown",
  cover: "covers/Kishore_Kumar_-_Pal_Pal_Dil_Ke_Paas_Tum_Rehti_Ho.jpg"
},
{
  name: "Kishore_Kumar_-_Chalte_Chalte_Mere_Yeh_Geet_Yaad_Rakhna.mp3",
  title: "Kishore Kumar - Chalte Chalte Mere Yeh Geet Yaad Rakhna",
  artist: "Artist: Unknown",
  cover: "covers/Kishore_Kumar_-_Chalte_Chalte_Mere_Yeh_Geet_Yaad_Rakhna.jpg"
},
{
  name: "Kishore_Kumar_-_Yeh_Jo_Mohabbat_Hai.mp3",
  title: "Kishore Kumar - Yeh Jo Mohabbat Hai",
  artist: "Artist: Unknown",
  cover: "covers/Kishore_Kumar_-_Yeh_Jo_Mohabbat_Hai.jpg"
},
{
  name: "Kishore_Kumar_-_Ek_Ladki_Bheegi_Bhagi_Si.mp3",
  title: "Kishore Kumar - Ek Ladki Bheegi Bhagi Si",
  artist: "Artist: Unknown",
  cover: "covers/Kishore_Kumar_-_Ek_Ladki_Bheegi_Bhagi_Si.jpg"
},
{
  name: "Kishore_Kumar_-_Diye_Jalte_Hai_Phool_Khilte_Hai.mp3",
  title: "Kishore Kumar - Diye Jalte Hai Phool Khilte Hai",
  artist: "Artist: Unknown",
  cover: "covers/Kishore_Kumar_-_Diye_Jalte_Hai_Phool_Khilte_Hai.jpg"
},
{
  name: "Kishore_Kumar_-_Mere_Mehboob_Qayamat_Hogi.mp3",
  title: "Kishore Kumar - Mere Mehboob Qayamat Hogi",
  artist: "Artist: Unknown",
  cover: "covers/Kishore_Kumar_-_Mere_Mehboob_Qayamat_Hogi.jpg"
},
{
  name: "Kishore_Kumar_-_Apni_To_Jaise_Taise_Kat_Jayegi.mp3",
  title: "Kishore Kumar - Apni To Jaise Taise Kat Jayegi",
  artist: "Artist: Unknown",
  cover: "covers/Kishore_Kumar_-_Apni_To_Jaise_Taise_Kat_Jayegi.jpg"
},
{
  name: "Kishore_Kumar_-_Mere_Naina_Sawan_Bhadon_Phir_Bhi_Mera_Man_Pyasa.mp3",
  title: "Kishore Kumar - Mere Naina Sawan Bhadon Phir Bhi Mera Man Pyasa",
  artist: "Artist: Unknown",
  cover: "covers/Kishore_Kumar_-_Mere_Naina_Sawan_Bhadon_Phir_Bhi_Mera_Man_Pyasa.jpg"
},
{
  name: "Kishore_Kumar_-_Mere_Samne_Wali_Khidki_Mein.mp3",
  title: "Kishore Kumar - Mere Samne Wali Khidki Mein",
  artist: "Artist: Unknown",
  cover: "covers/Kishore_Kumar_-_Mere_Samne_Wali_Khidki_Mein.jpg"
},
{
  name: "Kishore_Kumar_-_Chalte_Chalte.mp3",
  title: "Kishore Kumar - Chalte Chalte",
  artist: "Artist: Unknown",
  cover: "covers/Kishore_Kumar_-_Chalte_Chalte.jpg"
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