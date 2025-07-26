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
    name: "neel.mp3",
    title: "#Video  हरइन  #Neelkamal Singh New Song  Heroine  #Bhojpuri Gana",
    artist: "",
    cover: "covers/neel.jpg"
  },
  {
    name: "AISA  BANNA SAWARNA  ANJUM HUSSAIN  #qawali #trending #sogs #Aisabannasawarna #Sad #hits #song.mp3",
    title: "AISA  BANNA SAWARNA  ANJUM HUSSAIN  #qawali #trending #sogs #Aisabannasawarna #Sad #hits #song",
    artist: "",
    cover: "covers/aisa.jpg"
  },
  {
    name: "Aashiq Tera (Official Song)  Happy Bhag Jayegi  Diana Penty, Abhay Deol, Ali Fazal, Momal.mp3",
    title: "Aashiq Tera (Official Song)  Happy Bhag Jayegi  Diana Penty, Abhay Deol, Ali Fazal, Momal",
    artist: "",
    cover: "covers/aash.jpg"
  },
  {
    name: "Chandana Chandana Zali Raat - Saptashrungi Aai - Marathi Koligeet.mp3",
    title: "Chandana Chandana Zali Raat - Saptashrungi Aai - Marathi Koligeet",
    artist: "",
    cover: "covers/chan.jpg"
  },
  {
    name: "Chaudhary Lyric Video - Mame Khan  Amit Trivedi.mp3",
    title: "Chaudhary Lyric Video - Mame Khan  Amit Trivedi",
    artist: "",
    cover: "covers/chau.jpg"
  },
  {
    name: "Dagabaaz Re Dabangg 2 Full Video Song ᴴᴰ  Salman Khan, Sonakshi Sinha.mp3",
    title: "Dagabaaz Re Dabangg 2 Full Video Song ᴴᴰ  Salman Khan, Sonakshi Sinha",
    artist: "",
    cover: "covers/daga.jpg"
  },
  {
    name: "Dekha Ek Khwab Song  Silsila  Amitabh Bachchan, Rekha  Kishore Kumar, Lata Mangeshkar, Shiv-Hari.mp3",
    title: "Dekha Ek Khwab Song  Silsila  Amitabh Bachchan, Rekha  Kishore Kumar, Lata Mangeshkar, Shiv-Hari",
    artist: "",
    cover: "covers/dekh.jpg"
  },
  {
    name: "Do Patti_ Raanjhan (Full Video) Kriti Sanon, Shaheer Sheikh  Parampara Tandon  Sachet-Parampara.mp3",
    title: "Do Patti_ Raanjhan (Full Video) Kriti Sanon, Shaheer Sheikh  Parampara Tandon  Sachet-Parampara",
    artist: "",
    cover: "covers/do p.jpg"
  },
  {
    name: "GANGSTER SHIT 1st (Official Video) SAMBATA I Prod By. KHAKIEE.mp3",
    title: "GANGSTER SHIT 1st (Official Video) SAMBATA I Prod By. KHAKIEE",
    artist: "",
    cover: "covers/gang.jpg"
  },
  {
    name: "Gaar Dongarachi Hawa.mp3",
    title: "Gaar Dongarachi Hawa",
    artist: "",
    cover: "covers/gaar.jpg"
  },
  {
    name: "Jaise Jayache Karma With Lyrics  जस  जयच करम  Prahlad Shinde  Madhukar Pathak  Anant Patil.mp3",
    title: "Jaise Jayache Karma With Lyrics  जस  जयच करम  Prahlad Shinde  Madhukar Pathak  Anant Patil",
    artist: "",
    cover: "covers/jais.jpg"
  },
  {
    name: "Kali Kali Zulfon Ke Phande Na (Complete Original Version).mp3",
    title: "Kali Kali Zulfon Ke Phande Na (Complete Original Version).mp3",
    artist: "",
    cover: "covers/kali.jpg"
  },
  {
    name: "Kun Faya Kun Full Video Song Rockstar  Ranbir Kapoor  A.R. Rahman, Javed Ali, Mohit Chauhan.mp3",
    title: "Kun Faya Kun Full Video Song Rockstar  Ranbir Kapoor  A.R. Rahman, Javed Ali, Mohit Chauhan",
    artist: "",
    cover: "covers/kun .jpg"
  },
  {
    name: "Lyrical  Bulleya Song with Lyrics  Sultan  Salman, Anushka, Vishal & Shekhar, Irshad Kamil, Papon.mp3",
    title: "Lyrical  Bulleya Song with Lyrics  Sultan  Salman, Anushka, Vishal & Shekhar, Irshad Kamil, Papon.",
    artist: "",
    cover: "covers/lyri.jpg"
  },
  {
    name: "Maagato Mee Pandurang with lyrics   मगत म पडरग  Prahlad Shinde.mp3",
    title: "Maagato Mee Pandurang with lyrics   मगत म पडरग  Prahlad Shinde",
    artist: "",
    cover: "covers/maag.jpg"
  },
  {
    name: "Perfect (Acoustic).mp3",
    title: "Perfect (Acoustic)",
    artist: "",
    cover: "covers/perf.jpg"
  },
  {
    name: "Pinnak - SAMBATA l OFFICIAL VIDEO l (Prod By. KHAKIEE ).mp3",
    title: "Pinnak - SAMBATA l OFFICIAL VIDEO l (Prod By. KHAKIEE ).mp3",
    artist: "",
    cover: "covers/pinn.jpg"
  },
  {
    name: "Rangrez (Official Video)  Ustad Puran Chand Wadali Ji  Lakhwinder Wadali  Sufiyan Bhatt  Latest.mp3",
    title: "Rangrez (Official Video)  Ustad Puran Chand Wadali Ji  Lakhwinder Wadali  Sufiyan Bhatt  Latest",
    artist: "",
    cover: "covers/rang.jpg"
  },
  {
    name: "Sahiba (Music Video) Jasleen Royal Vijay Deverakonda Radhika Madan Stebin PriyaAditya Sudhanshu.mp3",
    title: "Sahiba (Music Video) Jasleen Royal Vijay Deverakonda Radhika Madan Stebin PriyaAditya Sudhanshu",
    artist: "",
    cover: "covers/sahi.jpg"
  },
  {
    name: "Sambata x Karan Kanchan - Vazan (Official Video)  Red Bull 64 Bars  Def Jam India.mp3",
    title: "Sambata x Karan Kanchan - Vazan (Official Video)  Red Bull 64 Bars  Def Jam India",
    artist: "",
    cover: "covers/samb.jpg"
  },
  {
    name: "Sangna Devi Majhya Bhavala.mp3",
    title: "Sangna Devi Majhya Bhavala",
    artist: "",
    cover: "covers/sang.jpg"
  },
  {
    name: "Stephen Sanchez - Until I Found You (Official Video).mp3",
    title: "Stephen Sanchez - Until I Found You (Official Video)",
    artist: "",
    cover: "covers/step.jpg"
  },
  {
    name: "Sutla Maza Padar   (Dj Vrv And Devensh vfx) Remix Marathi.mp3",
    title: "Sutla Maza Padar   (Dj Vrv And Devensh vfx) Remix Marathi",
    artist: "",
    cover: "covers/sutl.jpg"
  },
  {
    name: "Tere Bina Na Guzara Full Song  Satinder Sartaaj  JOSH BRAR  Karan Bir Music  New Punjabi Songs.mp3",
    title: "Tere Bina Na Guzara Full Song  Satinder Sartaaj  JOSH BRAR  Karan Bir Music  New Punjabi Songs",
    artist: "",
    cover: "covers/tere.jpg"
  },
  {
    name: "Tujha Upkara Jagi Tod Nahi  Vithu Mauli Tu Mauli Jagachi Lyrics In Marathi  Sahil Pandhre.mp3",
    title: "Tujha Upkara Jagi Tod Nahi  Vithu Mauli Tu Mauli Jagachi Lyrics In Marathi  Sahil Pandhre",
    artist: "",
    cover: "covers/tujh.jpg"
  },
  {
    name: "Vatanyacha Gol Dana Raje Udu Nko Tanatana.mp3",
    title: "Vatanyacha Gol Dana Raje Udu Nko Tanatana",
    artist: "",
    cover: "covers/vata.jpg"
  },
  {
    name: "YUNG DSA - YEDA YUNG  OFFICIAL MUSIC VIDEO  PROD BY YD @yeardown  2024.mp3",
    title: "YUNG DSA - YEDA YUNG  OFFICIAL MUSIC VIDEO  PROD BY YD @yeardown  2024",
    artist: "",
    cover: "covers/yung.jpg"
  },
  {
    name: "त मरद नह मथ क दरद हव रज ज  Video  Shivani Singh - Ft. Queen Tanya  Marad Matha Ke Darad.mp3",
    title: "त मरद नह मथ क दरद हव रज ज  Video  Shivani Singh - Ft. Queen Tanya  Marad Matha Ke Darad",
    artist: "",
    cover: "covers/त मरद नह मथ क दरद हव रज ज  Video  Shivani Singh - Ft. Queen Tanya  Marad Matha Ke Darad.jpg"
  },
  {
    name: "लगई दह चलय क हक रजज - #Arvind Akela Kallu - Choliya Ke Hook Raja Ji  Bhojpuri Video Song.mp3",
    title: "लगई दह चलय क हक रजज - #Arvind Akela Kallu - Choliya Ke Hook Raja Ji  Bhojpuri Video Song",
    artist: "",
    cover: "covers/laga.jpg"
  },
  {
    name: "वसवच पर नसल ग, नसल ग नव सर.mp3",
    title: "वसवच पर नसल ग, नसल ग नव सर",
    artist: "",
    cover: "covers/वसवच पर नसल ग, नसल ग नव सर.jpg"
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
