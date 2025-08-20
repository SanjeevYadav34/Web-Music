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
},
{
  name: "Anirudh_Ravichander_-_Jolly_O_Gymkhana.mp3",
  title: "Anirudh Ravichander - Jolly O Gymkhana",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Jolly_O_Gymkhana.jpg"
},
{
  name: "Anirudh_Ravichander_-_Beast_Mode.mp3",
  title: "Anirudh Ravichander - Beast Mode",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Beast_Mode.jpg"
},
{
  name: "Anirudh_Ravichander_-_Ranjithame.mp3",
  title: "Anirudh Ravichander - Ranjithame",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Ranjithame.jpg"
},
{
  name: "Anirudh_Ravichander_-_Jimikki_Ponnu.mp3",
  title: "Anirudh Ravichander - Jimikki Ponnu",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Jimikki_Ponnu.jpg"
},
{
  name: "Anirudh_Ravichander_-_Badass.mp3",
  title: "Anirudh Ravichander - Badass",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Badass.jpg"
},
{
  name: "Anirudh_Ravichander_-_Ordinary_Person.mp3",
  title: "Anirudh Ravichander - Ordinary Person",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Ordinary_Person.jpg"
},
{
  name: "Anirudh_Ravichander_-_So_Baby.mp3",
  title: "Anirudh Ravichander - So Baby",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_So_Baby.jpg"
},
{
  name: "Anirudh_Ravichander_-_Pathala_Pathala.mp3",
  title: "Anirudh Ravichander - Pathala Pathala",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Pathala_Pathala.jpg"
},
{
  name: "Anirudh_Ravichander_-_Vaa_Vaathi.mp3",
  title: "Anirudh Ravichander - Vaa Vaathi",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Vaa_Vaathi.jpg"
},
{
  name: "Anirudh_Ravichander_-_Chaleya.mp3",
  title: "Anirudh Ravichander - Chaleya",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Chaleya.jpg"
},
{
  name: "Anirudh_Ravichander_-_Hayyoda.mp3",
  title: "Anirudh Ravichander - Hayyoda",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Hayyoda.jpg"
},
{
  name: "Anirudh_Ravichander_-_Come_On_Girls_–_The_Celebration_of_Love.mp3",
  title: "Anirudh Ravichander - Come On Girls – The Celebration of Love",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Come_On_Girls_–_The_Celebration_of_Love.jpg"
},
{
  name: "Anirudh_Ravichander_-_Kanave_Kanave.mp3",
  title: "Anirudh Ravichander - Kanave Kanave",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Kanave_Kanave.jpg"
},
{
  name: "Anirudh_Ravichander_-_Chennai_City_Gangsta.mp3",
  title: "Anirudh Ravichander - Chennai City Gangsta",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Chennai_City_Gangsta.jpg"
},
{
  name: "Anirudh_Ravichander_-_Ailasa_Aile_Ailasa.mp3",
  title: "Anirudh Ravichander - Ailasa Aile Ailasa",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Ailasa_Aile_Ailasa.jpg"
},
{
  name: "Anirudh_Ravichander_-_What_a_Karuvaad.mp3",
  title: "Anirudh Ravichander - What a Karuvaad",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_What_a_Karuvaad.jpg"
},
{
  name: "Anirudh_Ravichander_-_Pakkam_Vanthu.mp3",
  title: "Anirudh Ravichander - Pakkam Vanthu",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Pakkam_Vanthu.jpg"
},
{
  name: "Anirudh_Ravichander_-_Aathi_Ena_Nee.mp3",
  title: "Anirudh Ravichander - Aathi Ena Nee",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Aathi_Ena_Nee.jpg"
},
{
  name: "Anirudh_Ravichander_-_Kadhal_Kan_Kattudhe.mp3",
  title: "Anirudh Ravichander - Kadhal Kan Kattudhe",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Kadhal_Kan_Kattudhe.jpg"
},
{
  name: "Anirudh_Ravichander_-_I’m_So_Cool.mp3",
  title: "Anirudh Ravichander - I’m So Cool",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_I’m_So_Cool.jpg"
},
{
  name: "Anirudh_Ravichander_-_Shake_That.mp3",
  title: "Anirudh Ravichander - Shake That",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Shake_That.jpg"
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