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
    name: "mera_mann.mp3",
    title: "Mera Mann",
    artist: "",
    cover: "covers/mera_mann.webp"
  },
  {
    name: "rahul/songs/aisa.mp3",
    title: "AISA  BANNA SAWARNA  ANJUM HUSSAIN  #qawali #trending #sogs #Aisabannasawarna #Sad #hits #song",
    artist: "",
    cover: "rahul/covers/aisa.jpg"
  },
  {
    name: "rahul/songs/Aashiq Tera (Official Song)  Happy Bhag Jayegi  Diana Penty, Abhay Deol, Ali Fazal, Momal.mp3",
    title: "Aashiq Tera (Official Song)  Happy Bhag Jayegi  Diana Penty, Abhay Deol, Ali Fazal, Momal",
    artist: "",
    cover: "rahul/covers/aash.jpg"
  },
  {
    name: "rahul/songs/Dagabaaz Re Dabangg 2 Full Video Song ᴴᴰ  Salman Khan, Sonakshi Sinha.mp3",
    title: "Dagabaaz Re Dabangg 2 Full Video Song ᴴᴰ  Salman Khan, Sonakshi Sinha",
    artist: "",
    cover: "rahul/covers/daga.jpg"
  },
  {
    name: "rahul/songs/Dekha Ek Khwab Song  Silsila  Amitabh Bachchan, Rekha  Kishore Kumar, Lata Mangeshkar, Shiv-Hari.mp3",
    title: "Dekha Ek Khwab Song  Silsila  Amitabh Bachchan, Rekha  Kishore Kumar, Lata Mangeshkar, Shiv-Hari",
    artist: "",
    cover: "rahul/covers/dekh.jpg"
  },
  {
    name: "rahul/songs/Do Patti_ Raanjhan (Full Video) Kriti Sanon, Shaheer Sheikh  Parampara Tandon  Sachet-Parampara.mp3",
    title: "Do Patti_ Raanjhan (Full Video) Kriti Sanon, Shaheer Sheikh  Parampara Tandon  Sachet-Parampara",
    artist: "",
    cover: "rahul/covers/do p.jpg"
  },
  {
    name: "rahul/songs/Kali Kali Zulfon Ke Phande Na (Complete Original Version).mp3",
    title: "Kali Kali Zulfon Ke Phande Na (Complete Original Version).mp3",
    artist: "",
    cover: "rahul/covers/kali.jpg"
  },
  {
    name: "rahul/songs/Kun Faya Kun Full Video Song Rockstar  Ranbir Kapoor  A.R. Rahman, Javed Ali, Mohit Chauhan.mp3",
    title: "Kun Faya Kun Full Video Song Rockstar  Ranbir Kapoor  A.R. Rahman, Javed Ali, Mohit Chauhan",
    artist: "",
    cover: "rahul/covers/kun .jpg"
  },
  {
    name: "rahul/songs/Lyrical  Bulleya Song with Lyrics  Sultan  Salman, Anushka, Vishal & Shekhar, Irshad Kamil, Papon.mp3",
    title: "Lyrical  Bulleya Song with Lyrics  Sultan  Salman, Anushka, Vishal & Shekhar, Irshad Kamil, Papon.",
    artist: "",
    cover: "rahul/covers/lyri.jpg"
  },
  {
    name: "rahul/songs/Rangrez (Official Video)  Ustad Puran Chand Wadali Ji  Lakhwinder Wadali  Sufiyan Bhatt  Latest.mp3",
    title: "Rangrez (Official Video)  Ustad Puran Chand Wadali Ji  Lakhwinder Wadali  Sufiyan Bhatt  Latest",
    artist: "",
    cover: "rahul/covers/rang.jpg"
  },
  {
    name: "rahul/songs/Sahiba (Music Video) Jasleen Royal Vijay Deverakonda Radhika Madan Stebin PriyaAditya Sudhanshu.mp3",
    title: "Sahiba (Music Video) Jasleen Royal Vijay Deverakonda Radhika Madan Stebin PriyaAditya Sudhanshu",
    artist: "",
    cover: "rahul/covers/sahi.jpg"
  },
  {
    name: "rahul/songs/Tere Bina Na Guzara Full Song  Satinder Sartaaj  JOSH BRAR  Karan Bir Music  New Punjabi Songs.mp3",
    title: "Tere Bina Na Guzara Full Song  Satinder Sartaaj  JOSH BRAR  Karan Bir Music  New Punjabi Songs",
    artist: "",
    cover: "rahul/covers/tere.jpg"
  },
{
  name: "sanso-ki.mp3",
  title: "Sanson Ki Mala Pe Nusrat Fateh Ali Khan",
  artist: "Artist: Unknown",
  cover: "covers/sanso-ki.jpg"
}
];

let songIndex = 1;
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
