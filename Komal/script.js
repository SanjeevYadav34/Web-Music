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
  name: "Darkhaast_-_Mithoon,_Arijit_Singh,_Sunidhi_Chauhan.mp3",
  title: "Darkhaast - Mithoon, Arijit Singh, Sunidhi Chauhan",
  artist: "Artist: Unknown",
  cover: "covers/Darkhaast_-_Mithoon,_Arijit_Singh,_Sunidhi_Chauhan.jpg"
},
{
  name: "Khoya_Khoya_-_Sachin-Jigar,_Mohit_Chauhan,_Priya_S..mp3",
  title: "Khoya Khoya - Sachin-Jigar, Mohit Chauhan, Priya S.",
  artist: "Artist: Unknown",
  cover: "covers/Khoya_Khoya_-_Sachin-Jigar,_Mohit_Chauhan,_Priya_S..jpg"
},
{
  name: "Khwab_-_Iqlipse_Nova,_Aditya_A.mp3",
  title: "Khwab - Iqlipse Nova, Aditya A",
  artist: "Artist: Unknown",
  cover: "covers/Khwab_-_Iqlipse_Nova,_Aditya_A.jpg"
},
{
  name: "I_Am_In_Love_-_Pritam,_KK,_Dominique,_Neelesh_Misra.mp3",
  title: "I Am In Love - Pritam, KK, Dominique, Neelesh Misra",
  artist: "Artist: Unknown",
  cover: "covers/I_Am_In_Love_-_Pritam,_KK,_Dominique,_Neelesh_Misra.jpg"
},
{
  name: "Ik_Vaari_Aa_-_Pritam,_Arijit_Singh,_Amitabh_Bhattacharya.mp3",
  title: "Ik Vaari Aa - Pritam, Arijit Singh, Amitabh Bhattacharya",
  artist: "Artist: Unknown",
  cover: "covers/Ik_Vaari_Aa_-_Pritam,_Arijit_Singh,_Amitabh_Bhattacharya.jpg"
},
{
  name: "Dildaara_(Stand_By_Me)_-_Vishal-Shekhar,_Shafqat_Amanat_Ali.mp3",
  title: "Dildaara (Stand By Me) - Vishal-Shekhar, Shafqat Amanat Ali",
  artist: "Artist: Unknown",
  cover: "covers/Dildaara_(Stand_By_Me)_-_Vishal-Shekhar,_Shafqat_Amanat_Ali.jpg"
},
{
  name: "Dil_Na_Jaaneya_-_Rochak_Kohli,_AKASA,_Lauv.mp3",
  title: "Dil Na Jaaneya - Rochak Kohli, AKASA, Lauv",
  artist: "Artist: Unknown",
  cover: "covers/Dil_Na_Jaaneya_-_Rochak_Kohli,_AKASA,_Lauv.jpg"
},
{
  name: "Tumse_Hi_Tumse_-_Vishal-Shekhar,_Shekhar_Ravjiani,_Caralisa.mp3",
  title: "Tumse Hi Tumse - Vishal-Shekhar, Shekhar Ravjiani, Caralisa",
  artist: "Artist: Unknown",
  cover: "covers/Tumse_Hi_Tumse_-_Vishal-Shekhar,_Shekhar_Ravjiani,_Caralisa.jpg"
},
{
  name: "Ajab_Leher_-_Vishal-Shekhar,_Neeraj_Shridhar.mp3",
  title: "Ajab Leher - Vishal-Shekhar, Neeraj Shridhar",
  artist: "Artist: Unknown",
  cover: "covers/Ajab_Leher_-_Vishal-Shekhar,_Neeraj_Shridhar.jpg"
},
{
  name: "Khabar_Nahi_-_Vishal-Shekhar,_Shreya_Ghoshal.mp3",
  title: "Khabar Nahi - Vishal-Shekhar, Shreya Ghoshal",
  artist: "Artist: Unknown",
  cover: "covers/Khabar_Nahi_-_Vishal-Shekhar,_Shreya_Ghoshal.jpg"
},
{
  name: "Pee_Loon_-_Pritam,_Mohit_Chauhan,_Irshad_Kamil.mp3",
  title: "Pee Loon - Pritam, Mohit Chauhan, Irshad Kamil",
  artist: "Artist: Unknown",
  cover: "covers/Pee_Loon_-_Pritam,_Mohit_Chauhan,_Irshad_Kamil.jpg"
},
{
  name: "Lamhey_-_Anubha_Bajaj.mp3",
  title: "Lamhey - Anubha Bajaj",
  artist: "Artist: Unknown",
  cover: "covers/Lamhey_-_Anubha_Bajaj.jpg"
},
{
  name: "IRAADAY_-_ZAYEM.mp3",
  title: "IRAADAY - ZAYEM",
  artist: "Artist: Unknown",
  cover: "covers/IRAADAY_-_ZAYEM.jpg"
},
{
  name: "Tere_Bina_-_Zaeden.mp3",
  title: "Tere Bina - Zaeden",
  artist: "Artist: Unknown",
  cover: "covers/Tere_Bina_-_Zaeden.jpg"
},
{
  name: "Sajde_-_Pritam,_KK,_Sunidhi_Chauhan.mp3",
  title: "Sajde - Pritam, KK, Sunidhi Chauhan",
  artist: "Artist: Unknown",
  cover: "covers/Sajde_-_Pritam,_KK,_Sunidhi_Chauhan.jpg"
},
{
  name: "Sajde_-_Shankar-Ehsaan-Loy,_Arijit_Singh,_Nihira_Joshi.mp3",
  title: "Sajde - Shankar-Ehsaan-Loy, Arijit Singh, Nihira Joshi",
  artist: "Artist: Unknown",
  cover: "covers/Sajde_-_Shankar-Ehsaan-Loy,_Arijit_Singh,_Nihira_Joshi.jpg"
},
{
  name: "Oh_Girl_You’re_Mine_-_Tarun_Sagar,_Alyssa_Mendonsa,_Loy_Mendonsa.mp3",
  title: "Oh Girl You’re Mine - Tarun Sagar, Alyssa Mendonsa, Loy Mendonsa",
  artist: "Artist: Unknown",
  cover: "covers/Oh_Girl_You’re_Mine_-_Tarun_Sagar,_Alyssa_Mendonsa,_Loy_Mendonsa.jpg"
},
{
  name: "Caller_Tune_-_Neeraj_Shridhar,_Neeti_Mohan.mp3",
  title: "Caller Tune - Neeraj Shridhar, Neeti Mohan",
  artist: "Artist: Unknown",
  cover: "covers/Caller_Tune_-_Neeraj_Shridhar,_Neeti_Mohan.jpg"
},
{
  name: "You_Get_Me_Rockin_&_Reeling_-_Pritam,_Neeraj_Shridhar.mp3",
  title: "You Get Me Rockin & Reeling - Pritam, Neeraj Shridhar",
  artist: "Artist: Unknown",
  cover: "covers/You_Get_Me_Rockin_&_Reeling_-_Pritam,_Neeraj_Shridhar.jpg"
},
{
  name: "Katchi_Sera.mp3",
  title: "Katchi Sera",
  artist: "Artist: Unknown",
  cover: "covers/Katchi_Sera.jpg"
},
{
  name: "Dheere_Dheere.mp3",
  title: "Dheere Dheere",
  artist: "Artist: Unknown",
  cover: "covers/Dheere_Dheere.jpg"
},
{
  name: "Chuttamulle.mp3",
  title: "Chuttamulle",
  artist: "Artist: Unknown",
  cover: "covers/Chuttamulle.jpg"
},
{
  name: "Paththavaikkum.mp3",
  title: "Paththavaikkum",
  artist: "Artist: Unknown",
  cover: "covers/Paththavaikkum.jpg"
},
{
  name: "Fakira.mp3",
  title: "Fakira",
  artist: "Artist: Unknown",
  cover: "covers/Fakira.jpg"
},
{
  name: "Sanam_Puri_-_Aashiq_Tera.mp3",
  title: "Sanam Puri - Aashiq Tera",
  artist: "Artist: Unknown",
  cover: "covers/Sanam_Puri_-_Aashiq_Tera.jpg"
},
{
  name: "Alisha.mp3",
  title: "Alisha",
  artist: "Artist: Unknown",
  cover: "covers/Alisha.jpg"
},
{
  name: "I_Think_This_Is_Love.mp3",
  title: "I Think This Is Love",
  artist: "Artist: Unknown",
  cover: "covers/I_Think_This_Is_Love.jpg"
},
{
  name: "Soniyo.mp3",
  title: "Soniyo",
  artist: "Artist: Unknown",
  cover: "covers/Soniyo.jpg"
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