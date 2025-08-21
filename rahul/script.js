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
    name: "aisa.mp3",
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
  },
{
  name: "PAL_PAL_|_AFUSIC_|_TALWINDER_|_TALHA_ANJUM_|_MUSIC_VIDEO_|_PAKISTAN_SONG.mp3",
  title: "PAL PAL | AFUSIC | TALWINDER | TALHA ANJUM | MUSIC VIDEO | PAKISTAN SONG",
  artist: "Artist: Unknown",
  cover: "covers/PAL_PAL_|_AFUSIC_|_TALWINDER_|_TALHA_ANJUM_|_MUSIC_VIDEO_|_PAKISTAN_SONG.jpg"
},
{
  name: "The_Bilz_&_Kashif_-_Tere_Nainon_Mein.mp3",
  title: "The Bilz & Kashif - Tere Nainon Mein",
  artist: "Artist: Unknown",
  cover: "covers/The_Bilz_&_Kashif_-_Tere_Nainon_Mein.jpg"
},
{
  name: "Tyla_-_Water_(Official_Music_Video).mp3",
  title: "Tyla - Water (Official Music Video)",
  artist: "Artist: Unknown",
  cover: "covers/Tyla_-_Water_(Official_Music_Video).jpg"
},
{
  name: "Trinidad_Cardona_-_Love_Me_Back_(Official_Video).mp3",
  title: "Trinidad Cardona - Love Me Back (Official Video)",
  artist: "Artist: Unknown",
  cover: "covers/Trinidad_Cardona_-_Love_Me_Back_(Official_Video).jpg"
},
{
  name: "Katy_Perry_-_Harleys_In_Hawaii_(Official).mp3",
  title: "Katy Perry - Harleys In Hawaii (Official)",
  artist: "Artist: Unknown",
  cover: "covers/Katy_Perry_-_Harleys_In_Hawaii_(Official).jpg"
},
{
  name: "PAYAL_SONG_(Official_Video):_YO_YO_HONEY_SINGH_|_NORA_FATEHI_|_PARADOX_|_GLORY_|_BHUSHAN_KUMAR.mp3",
  title: "PAYAL SONG (Official Video): YO YO HONEY SINGH | NORA FATEHI | PARADOX | GLORY | BHUSHAN KUMAR",
  artist: "Artist: Unknown",
  cover: "covers/PAYAL_SONG_(Official_Video):_YO_YO_HONEY_SINGH_|_NORA_FATEHI_|_PARADOX_|_GLORY_|_BHUSHAN_KUMAR.jpg"
},
{
  name: "@SaiAbhyankkar_-_Aasa_Kooda_(Music_Video)_|_Thejo_Bharathwaj_|_Preity_Mukundhan_|_Sai_Smriti.mp3",
  title: "@SaiAbhyankkar - Aasa Kooda (Music Video) | Thejo Bharathwaj | Preity Mukundhan | Sai Smriti",
  artist: "Artist: Unknown",
  cover: "covers/@SaiAbhyankkar_-_Aasa_Kooda_(Music_Video)_|_Thejo_Bharathwaj_|_Preity_Mukundhan_|_Sai_Smriti.jpg"
},
{
  name: "Ranjheya_Ve_|_Zain_Zohaib_|_Yratta_media.mp3",
  title: "Ranjheya Ve | Zain Zohaib | Yratta media",
  artist: "Artist: Unknown",
  cover: "covers/Ranjheya_Ve_|_Zain_Zohaib_|_Yratta_media.jpg"
},
{
  name: "Maand_(Lyrics)_-_Bayaan,_Hasan_Raheem,_Rovalio.mp3",
  title: "Maand (Lyrics) - Bayaan, Hasan Raheem, Rovalio",
  artist: "Artist: Unknown",
  cover: "covers/Maand_(Lyrics)_-_Bayaan,_Hasan_Raheem,_Rovalio.jpg"
},
{
  name: "Mar_Jawaan_Lyrical_|_Fashion_|_Priyanka_Chopra,_Kangna_Ranawat_|_Shruti_Pathak,_Salim_Merchant.mp3",
  title: "Mar Jawaan Lyrical | Fashion | Priyanka Chopra, Kangna Ranawat | Shruti Pathak, Salim Merchant",
  artist: "Artist: Unknown",
  cover: "covers/Mar_Jawaan_Lyrical_|_Fashion_|_Priyanka_Chopra,_Kangna_Ranawat_|_Shruti_Pathak,_Salim_Merchant.jpg"
},
{
  name: "Jhol_|_Coke_Studio_Pakistan_|_Season_15_|_Maanu_x_Annural_Khalid.mp3",
  title: "Jhol | Coke Studio Pakistan | Season 15 | Maanu x Annural Khalid",
  artist: "Artist: Unknown",
  cover: "covers/Jhol_|_Coke_Studio_Pakistan_|_Season_15_|_Maanu_x_Annural_Khalid.jpg"
},
{
  name: "LYRICAL:_Awari_Song_|_Ek_Villain_|_Sidharth_Malhotra_|_Shraddha_Kapoor.mp3",
  title: "LYRICAL: Awari Song | Ek Villain | Sidharth Malhotra | Shraddha Kapoor",
  artist: "Artist: Unknown",
  cover: "covers/LYRICAL:_Awari_Song_|_Ek_Villain_|_Sidharth_Malhotra_|_Shraddha_Kapoor.jpg"
},
{
  name: "Aa_Jao_Meri_Tamanna_Lyrical_-_Ajab_Prem_Ki_Ghazab_Kahani_|_Ranbir,_Katrina_|_Javed_Ali,_Jojo_|_Pritam.mp3",
  title: "Aa Jao Meri Tamanna Lyrical - Ajab Prem Ki Ghazab Kahani | Ranbir, Katrina | Javed Ali, Jojo | Pritam",
  artist: "Artist: Unknown",
  cover: "covers/Aa_Jao_Meri_Tamanna_Lyrical_-_Ajab_Prem_Ki_Ghazab_Kahani_|_Ranbir,_Katrina_|_Javed_Ali,_Jojo_|_Pritam.jpg"
},
{
  name: "King_-_Tu_Aake_Dekhle_|_The_Carnival_|_The_Last_Ride_|_Prod._by_Shahbeatz_|_Latest_Hit_Songs_2020.mp3",
  title: "King - Tu Aake Dekhle | The Carnival | The Last Ride | Prod. by Shahbeatz | Latest Hit Songs 2020",
  artist: "Artist: Unknown",
  cover: "covers/King_-_Tu_Aake_Dekhle_|_The_Carnival_|_The_Last_Ride_|_Prod._by_Shahbeatz_|_Latest_Hit_Songs_2020.jpg"
},
{
  name: "O_Meri_Laila_-_Lyrical_|_Laila_Majnu_|_Jyotica_Tangri_|_Avinash_Tiwary_&_Tripti_Dimri.mp3",
  title: "O Meri Laila - Lyrical | Laila Majnu | Jyotica Tangri | Avinash Tiwary & Tripti Dimri",
  artist: "Artist: Unknown",
  cover: "covers/O_Meri_Laila_-_Lyrical_|_Laila_Majnu_|_Jyotica_Tangri_|_Avinash_Tiwary_&_Tripti_Dimri.jpg"
},
{
  name: "Har_Kisi_Ko_Nahi_Milta_Yahan_Pyaar_Zindagi_Mein_|_Boss_Video_Song_|_Akshay_Kumar,_Sonakshi_Sinha.mp3",
  title: "Har Kisi Ko Nahi Milta Yahan Pyaar Zindagi Mein | Boss Video Song | Akshay Kumar, Sonakshi Sinha",
  artist: "Artist: Unknown",
  cover: "covers/Har_Kisi_Ko_Nahi_Milta_Yahan_Pyaar_Zindagi_Mein_|_Boss_Video_Song_|_Akshay_Kumar,_Sonakshi_Sinha.jpg"
},
{
  name: "Right_Here_Right_Now_|_Lyrical_|_Bluff_Master_|_Abhishek_Bachchan_|_Priyanka_Chopra_|_HD_Video.mp3",
  title: "Right Here Right Now | Lyrical | Bluff Master | Abhishek Bachchan | Priyanka Chopra | HD Video",
  artist: "Artist: Unknown",
  cover: "covers/Right_Here_Right_Now_|_Lyrical_|_Bluff_Master_|_Abhishek_Bachchan_|_Priyanka_Chopra_|_HD_Video.jpg"
},
{
  name: "Long_Drive.mp3",
  title: "Long Drive",
  artist: "Artist: Unknown",
  cover: "covers/Long_Drive.jpg"
},
{
  name: "Asim_Azhar_-_Jo_Tu_Na_Mila_|_Kunaal_Vermaa.mp3",
  title: "Asim Azhar - Jo Tu Na Mila | Kunaal Vermaa",
  artist: "Artist: Unknown",
  cover: "covers/Asim_Azhar_-_Jo_Tu_Na_Mila_|_Kunaal_Vermaa.jpg"
},
{
  name: "Ek_Din_Teri_Raahon_Mein_-_Naqaab_|_Javed_Ali_|_Bobby_Deol,_Urvashi_Sharma,_Akshaye_|_Pritam.mp3",
  title: "Ek Din Teri Raahon Mein - Naqaab | Javed Ali | Bobby Deol, Urvashi Sharma, Akshaye | Pritam",
  artist: "Artist: Unknown",
  cover: "covers/Ek_Din_Teri_Raahon_Mein_-_Naqaab_|_Javed_Ali_|_Bobby_Deol,_Urvashi_Sharma,_Akshaye_|_Pritam.jpg"
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