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
},
{
  name: "Yeh_Jawani_Hai_Deewani_-_Badtameez_Dil.mp3",
  title: "Yeh Jawani Hai Deewani - Badtameez Dil",
  artist: "Artist: Unknown",
  cover: "covers/Yeh_Jawani_Hai_Deewani_-_Badtameez_Dil.jpg"
},
{
  name: "Yeh_Jawani_Hai_Deewani_-_Ilahi_(Arijit_Singh).mp3",
  title: "Yeh Jawani Hai Deewani - Ilahi (Arijit Singh)",
  artist: "Artist: Unknown",
  cover: "covers/Yeh_Jawani_Hai_Deewani_-_Ilahi_(Arijit_Singh).jpg"
},
{
  name: "Yeh_Jawani_Hai_Deewani_-_Ilahi_(Reprise_Mohit_Chauhan).mp3",
  title: "Yeh Jawani Hai Deewani - Ilahi (Reprise Mohit Chauhan)",
  artist: "Artist: Unknown",
  cover: "covers/Yeh_Jawani_Hai_Deewani_-_Ilahi_(Reprise_Mohit_Chauhan).jpg"
},
{
  name: "Yeh_Jawani_Hai_Deewani_-_Kabira.mp3",
  title: "Yeh Jawani Hai Deewani - Kabira",
  artist: "Artist: Unknown",
  cover: "covers/Yeh_Jawani_Hai_Deewani_-_Kabira.jpg"
},
{
  name: "Yeh_Jawani_Hai_Deewani_-_Kabira_(Encore).mp3",
  title: "Yeh Jawani Hai Deewani - Kabira (Encore)",
  artist: "Artist: Unknown",
  cover: "covers/Yeh_Jawani_Hai_Deewani_-_Kabira_(Encore).jpg"
},
{
  name: "Yeh_Jawani_Hai_Deewani_-_Subhanallah.mp3",
  title: "Yeh Jawani Hai Deewani - Subhanallah",
  artist: "Artist: Unknown",
  cover: "covers/Yeh_Jawani_Hai_Deewani_-_Subhanallah.jpg"
},
{
  name: "Ae_Dil_Hai_Mushkil_Song.mp3",
  title: "Ae Dil Hai Mushkil Song",
  artist: "Artist: Unknown",
  cover: "covers/Ae_Dil_Hai_Mushkil_Song.jpg"
},
{
  name: "Ae_Dil_Hai_Mushkil_-_Bulleya.mp3",
  title: "Ae Dil Hai Mushkil - Bulleya",
  artist: "Artist: Unknown",
  cover: "covers/Ae_Dil_Hai_Mushkil_-_Bulleya.jpg"
},
{
  name: "Ae_Dil_Hai_Mushkil_-_Channa_Mereya.mp3",
  title: "Ae Dil Hai Mushkil - Channa Mereya",
  artist: "Artist: Unknown",
  cover: "covers/Ae_Dil_Hai_Mushkil_-_Channa_Mereya.jpg"
},
{
  name: "Ae_Dil_Hai_Mushkil_-_Aaj_Jane_Ki_Zid_Na_Karo.mp3",
  title: "Ae Dil Hai Mushkil - Aaj Jane Ki Zid Na Karo",
  artist: "Artist: Unknown",
  cover: "covers/Ae_Dil_Hai_Mushkil_-_Aaj_Jane_Ki_Zid_Na_Karo.jpg"
},
{
  name: "Dil_Chahta_Hai_Song.mp3",
  title: "Dil Chahta Hai Song",
  artist: "Artist: Unknown",
  cover: "covers/Dil_Chahta_Hai_Song.jpg"
},
{
  name: "Dil_Chahta_Hai_(Reprise).mp3",
  title: "Dil Chahta Hai (Reprise)",
  artist: "Artist: Unknown",
  cover: "covers/Dil_Chahta_Hai_(Reprise).jpg"
},
{
  name: "Dil_Chahta_Hai_-_Tanhayee.mp3",
  title: "Dil Chahta Hai - Tanhayee",
  artist: "Artist: Unknown",
  cover: "covers/Dil_Chahta_Hai_-_Tanhayee.jpg"
},
{
  name: "Dil_Chahta_Hai_-_Jaane_Kyon_Log_Pyar.mp3",
  title: "Dil Chahta Hai - Jaane Kyon Log Pyar",
  artist: "Artist: Unknown",
  cover: "covers/Dil_Chahta_Hai_-_Jaane_Kyon_Log_Pyar.jpg"
},
{
  name: "Dil_Chahta_Hai_-_Kaisi_Hai_Ye_Rut.mp3",
  title: "Dil Chahta Hai - Kaisi Hai Ye Rut",
  artist: "Artist: Unknown",
  cover: "covers/Dil_Chahta_Hai_-_Kaisi_Hai_Ye_Rut.jpg"
},
{
  name: "Dil_Chahta_Hai_-_Koi_Kahe_Kehta_Rahe.mp3",
  title: "Dil Chahta Hai - Koi Kahe Kehta Rahe",
  artist: "Artist: Unknown",
  cover: "covers/Dil_Chahta_Hai_-_Koi_Kahe_Kehta_Rahe.jpg"
},
{
  name: "Dil_Chahta_Hai_-_Woh_Ladki_Hai_Kahan.mp3",
  title: "Dil Chahta Hai - Woh Ladki Hai Kahan",
  artist: "Artist: Unknown",
  cover: "covers/Dil_Chahta_Hai_-_Woh_Ladki_Hai_Kahan.jpg"
},
{
  name: "Tamasha_-_Matargashti.mp3",
  title: "Tamasha - Matargashti",
  artist: "Artist: Unknown",
  cover: "covers/Tamasha_-_Matargashti.jpg"
},
{
  name: "Tamasha_-_Agar_Tum_Saath_Ho.mp3",
  title: "Tamasha - Agar Tum Saath Ho",
  artist: "Artist: Unknown",
  cover: "covers/Tamasha_-_Agar_Tum_Saath_Ho.jpg"
},
{
  name: "Tamasha_-_Safarnama.mp3",
  title: "Tamasha - Safarnama",
  artist: "Artist: Unknown",
  cover: "covers/Tamasha_-_Safarnama.jpg"
},
{
  name: "Barfi_-_Ala_Barfi_(Mohit_Chauhan).mp3",
  title: "Barfi - Ala Barfi (Mohit Chauhan)",
  artist: "Artist: Unknown",
  cover: "covers/Barfi_-_Ala_Barfi_(Mohit_Chauhan).jpg"
},
{
  name: "Barfi_-_Ala_Barfi_(Swanand_Kirkire).mp3",
  title: "Barfi - Ala Barfi (Swanand Kirkire)",
  artist: "Artist: Unknown",
  cover: "covers/Barfi_-_Ala_Barfi_(Swanand_Kirkire).jpg"
},
{
  name: "Barfi_-_Main_Kya_Karoon.mp3",
  title: "Barfi - Main Kya Karoon",
  artist: "Artist: Unknown",
  cover: "covers/Barfi_-_Main_Kya_Karoon.jpg"
},
{
  name: "Barfi_-_Aashiyan_(Solo).mp3",
  title: "Barfi - Aashiyan (Solo)",
  artist: "Artist: Unknown",
  cover: "covers/Barfi_-_Aashiyan_(Solo).jpg"
},
{
  name: "Barfi_-_Kyon.mp3",
  title: "Barfi - Kyon",
  artist: "Artist: Unknown",
  cover: "covers/Barfi_-_Kyon.jpg"
},
{
  name: "Barfi_-_Phir_le_Aya_Dil_(Arijit_Singh).mp3",
  title: "Barfi - Phir le Aya Dil (Arijit Singh)",
  artist: "Artist: Unknown",
  cover: "covers/Barfi_-_Phir_le_Aya_Dil_(Arijit_Singh).jpg"
},
{
  name: "Barfi_-_Phir_le_Aya_Dil_(Rekha_Bhardwaj).mp3",
  title: "Barfi - Phir le Aya Dil (Rekha Bhardwaj)",
  artist: "Artist: Unknown",
  cover: "covers/Barfi_-_Phir_le_Aya_Dil_(Rekha_Bhardwaj).jpg"
},
{
  name: "Barfi_-_Phir_le_Aya_Dil_(Reprise).mp3",
  title: "Barfi - Phir le Aya Dil (Reprise)",
  artist: "Artist: Unknown",
  cover: "covers/Barfi_-_Phir_le_Aya_Dil_(Reprise).jpg"
},
{
  name: "Kedarnath_-_Namo_Namo.mp3",
  title: "Kedarnath - Namo Namo",
  artist: "Artist: Unknown",
  cover: "covers/Kedarnath_-_Namo_Namo.jpg"
},
{
  name: "Kedarnath_-_Qaafirana.mp3",
  title: "Kedarnath - Qaafirana",
  artist: "Artist: Unknown",
  cover: "covers/Kedarnath_-_Qaafirana.jpg"
},
{
  name: "Kedarnath_-_Jaan_Nisaar_(Arijit).mp3",
  title: "Kedarnath - Jaan Nisaar (Arijit)",
  artist: "Artist: Unknown",
  cover: "covers/Kedarnath_-_Jaan_Nisaar_(Arijit).jpg"
},
{
  name: "Kedarnath_-_Jaan_Nisaar_(Asees).mp3",
  title: "Kedarnath - Jaan Nisaar (Asees)",
  artist: "Artist: Unknown",
  cover: "covers/Kedarnath_-_Jaan_Nisaar_(Asees).jpg"
},
{
  name: "Amit_Trivedi_-_Naina_Da_Kya_Kasoor.mp3",
  title: "Amit Trivedi - Naina Da Kya Kasoor",
  artist: "Artist: Unknown",
  cover: "covers/Amit_Trivedi_-_Naina_Da_Kya_Kasoor.jpg"
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