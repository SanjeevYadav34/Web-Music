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
  name: "Itna_Na_Mujhse_Tu_Pyar_Badha_Talat_Mahmood_Lata_Mangeshkar.mp3",
  title: "Itna Na Mujhse Tu Pyar Badha Talat Mahmood Lata Mangeshkar",
  artist: "Artist: Unknown",
  cover: "covers/Itna_Na_Mujhse_Tu_Pyar_Badha_Talat_Mahmood_Lata_Mangeshkar.jpg"
},
{
  name: "Finding_Her_Kushagra_Bharath_Saaheal.mp3",
  title: "Finding Her Kushagra Bharath Saaheal",
  artist: "Artist: Unknown",
  cover: "covers/Finding_Her_Kushagra_Bharath_Saaheal.jpg"
},
{
  name: "Paro_Aditya_Rikhari_UNPLG'd.mp3",
  title: "Paro Aditya Rikhari UNPLG'd",
  artist: "Artist: Unknown",
  cover: "covers/Paro_Aditya_Rikhari_UNPLG'd.jpg"
},
{
  name: "Abhi_Na_Jao_Chhod_Kar_Asha_Bhosle_Mohammed_Rafi.mp3",
  title: "Abhi Na Jao Chhod Kar Asha Bhosle Mohammed Rafi",
  artist: "Artist: Unknown",
  cover: "covers/Abhi_Na_Jao_Chhod_Kar_Asha_Bhosle_Mohammed_Rafi.jpg"
},
{
  name: "Tauba_Tumhare_Ishare_Abhijeet_Alka_Yagnik.mp3",
  title: "Tauba Tumhare Ishare Abhijeet Alka Yagnik",
  artist: "Artist: Unknown",
  cover: "covers/Tauba_Tumhare_Ishare_Abhijeet_Alka_Yagnik.jpg"
},
{
  name: "O_Rangrez_Shankar_Ehsaan_Loy_Shreya_Ghoshal.mp3",
  title: "O Rangrez Shankar Ehsaan Loy Shreya Ghoshal",
  artist: "Artist: Unknown",
  cover: "covers/O_Rangrez_Shankar_Ehsaan_Loy_Shreya_Ghoshal.jpg"
},
{
  name: "Tum_Tak_From_Raanjhanaa_A_R_Rahman_Javed_Ali_Kirti.mp3",
  title: "Tum Tak From Raanjhanaa A R Rahman Javed Ali Kirti",
  artist: "Artist: Unknown",
  cover: "covers/Tum_Tak_From_Raanjhanaa_A_R_Rahman_Javed_Ali_Kirti.jpg"
},
{
  name: "Aaoge_Jab_Tum_Rashid_Khan_Sandesh_Shandilya_Faaiz.mp3",
  title: "Aaoge Jab Tum Rashid Khan Sandesh Shandilya Faaiz",
  artist: "Artist: Unknown",
  cover: "covers/Aaoge_Jab_Tum_Rashid_Khan_Sandesh_Shandilya_Faaiz.jpg"
},
{
  name: "Ek_Din_Aap_From_Yes_Boss_Kumar_Sanu_Alka_Yagnik.mp3",
  title: "Ek Din Aap From Yes Boss Kumar Sanu Alka Yagnik",
  artist: "Artist: Unknown",
  cover: "covers/Ek_Din_Aap_From_Yes_Boss_Kumar_Sanu_Alka_Yagnik.jpg"
},
{
  name: "In_Dino_Pritam_Soham.mp3",
  title: "In Dino Pritam Soham",
  artist: "Artist: Unknown",
  cover: "covers/In_Dino_Pritam_Soham.jpg"
}
];

let songIndex = 0;
let isLooping = false;

function loadSong(song) {
  title.textContent = song.title;
  artist.textContent = song.artist;
  audio.src = "songs/" + encodeURIComponent(song.name);
  coverImg.src = song.cover;
  resetProgress();
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
