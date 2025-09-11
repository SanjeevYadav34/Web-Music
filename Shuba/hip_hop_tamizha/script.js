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
  name: "Hiphop_Tamizha_-_Manithan_Tamizhan.mp3",
  title: "Hiphop Tamizha - Manithan Tamizhan",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Manithan_Tamizhan.jpg"
},
{
  name: "Hiphop_Tamizha_-_Tamizhanda.mp3",
  title: "Hiphop Tamizha - Tamizhanda",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Tamizhanda.jpg"
},
{
  name: "Hiphop_Tamizha_-_Tamizh_Theriyum.mp3",
  title: "Hiphop Tamizha - Tamizh Theriyum",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Tamizh_Theriyum.jpg"
},
{
  name: "Hiphop_Tamizha_-_Club_Le_Mabbu_Le.mp3",
  title: "Hiphop Tamizha - Club Le Mabbu Le",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Club_Le_Mabbu_Le.jpg"
},
{
  name: "Hiphop_Tamizha_-_Sentamizh_Penne.mp3",
  title: "Hiphop Tamizha - Sentamizh Penne",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Sentamizh_Penne.jpg"
},
{
  name: "Hiphop_Tamizha_-_Ini_Illaye_Hum.mp3",
  title: "Hiphop Tamizha - Ini Illaye Hum",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Ini_Illaye_Hum.jpg"
},
{
  name: "Hiphop_Tamizha_-_Cheap_Popularity_(Skit).mp3",
  title: "Hiphop Tamizha - Cheap Popularity (Skit)",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Cheap_Popularity_(Skit).jpg"
},
{
  name: "Hiphop_Tamizha_-_Iraiva.mp3",
  title: "Hiphop Tamizha - Iraiva",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Iraiva.jpg"
},
{
  name: "Hiphop_Tamizha_-_Karpom_Karpipom.mp3",
  title: "Hiphop Tamizha - Karpom Karpipom",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Karpom_Karpipom.jpg"
},
{
  name: "Hiphop_Tamizha_-_Hey_Do_What_I_Say.mp3",
  title: "Hiphop Tamizha - Hey Do What I Say",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Hey_Do_What_I_Say.jpg"
},
{
  name: "Hiphop_Tamizha_-_Stop_Piracy_(Outro).mp3",
  title: "Hiphop Tamizha - Stop Piracy (Outro)",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Stop_Piracy_(Outro).jpg"
},
{
  name: "Hiphop_Tamizha_-_Excuse_Me_Kathali_(single).mp3",
  title: "Hiphop Tamizha - Excuse Me Kathali (single)",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Excuse_Me_Kathali_(single).jpg"
},
{
  name: "Hiphop_Tamizha_-_Ezhuvoam_Vaa_(single).mp3",
  title: "Hiphop Tamizha - Ezhuvoam Vaa (single)",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Ezhuvoam_Vaa_(single).jpg"
},
{
  name: "Hiphop_Tamizha_-_Nice_Vs_Naughty_(Na_Na_Na).mp3",
  title: "Hiphop Tamizha - Nice Vs Naughty (Na Na Na)",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Nice_Vs_Naughty_(Na_Na_Na).jpg"
},
{
  name: "Hiphop_Tamizha_-_Club_le_Mabbu_le_(single_/_video).mp3",
  title: "Hiphop Tamizha - Club le Mabbu le (single / video)",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Club_le_Mabbu_le_(single_/_video).jpg"
},
{
  name: "Hiphop_Tamizha_-_Vaadi_Pulla_Vaadi_(single).mp3",
  title: "Hiphop Tamizha - Vaadi Pulla Vaadi (single)",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Vaadi_Pulla_Vaadi_(single).jpg"
},
{
  name: "Hiphop_Tamizha_-_Poda_(single).mp3",
  title: "Hiphop Tamizha - Poda (single)",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Poda_(single).jpg"
},
{
  name: "Hiphop_Tamizha_-_Takkaru_Takkaru_(single).mp3",
  title: "Hiphop Tamizha - Takkaru Takkaru (single)",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Takkaru_Takkaru_(single).jpg"
},
{
  name: "Hiphop_Tamizha_-_Kovai_Gethu_(single).mp3",
  title: "Hiphop Tamizha - Kovai Gethu (single)",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Kovai_Gethu_(single).jpg"
},
{
  name: "Hiphop_Tamizha_-_Maanavan.mp3",
  title: "Hiphop Tamizha - Maanavan",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Maanavan.jpg"
},
{
  name: "Hiphop_Tamizha_-_Tamizhi_(single).mp3",
  title: "Hiphop Tamizha - Tamizhi (single)",
  artist: "Artist: Unknown",
  cover: "covers/Hiphop_Tamizha_-_Tamizhi_(single).webp"
},
{
  name: "Hiphop_Tamizha_-_Quarantine_&_Chill_(single).mp3",
  title: "Hiphop Tamizha - Quarantine & Chill (single)",
  artist: "Artist: Unknown",
  cover: "covers/Hiphop_Tamizha_-_Quarantine_&_Chill_(single).webp"
},
{
  name: "Hiphop_Tamizha_-_Oorukaaran_(single).mp3",
  title: "Hiphop Tamizha - Oorukaaran (single)",
  artist: "Artist: Unknown",
  cover: "covers/Hiphop_Tamizha_-_Oorukaaran_(single).webp"
},
{
  name: "Hiphop_Tamizha_-_Chinna_Paiyan.mp3",
  title: "Hiphop Tamizha - Chinna Paiyan",
  artist: "Artist: Unknown",
  cover: "covers/Hiphop_Tamizha_-_Chinna_Paiyan.webp"
},
{
  name: "Hiphop_Tamizha_-_Nadanthavaraikumey.mp3",
  title: "Hiphop Tamizha - Nadanthavaraikumey",
  artist: "Artist: Unknown",
  cover: "covers/Hiphop_Tamizha_-_Nadanthavaraikumey.webp"
},
{
  name: "Hiphop_Tamizha_-_Poi_Poi_Poi.mp3",
  title: "Hiphop Tamizha - Poi Poi Poi",
  artist: "Artist: Unknown",
  cover: "covers/Hiphop_Tamizha_-_Poi_Poi_Poi.webp"
},
{
  name: "Hiphop_Tamizha_-_International_(single).mp3",
  title: "Hiphop Tamizha - International (single)",
  artist: "Artist: Unknown",
  cover: "covers/Hiphop_Tamizha_-_International_(single).webp"
},
{
  name: "Hiphop_Tamizha_-_Single_Kingulam_(A1_Express).mp3",
  title: "Hiphop Tamizha - Single Kingulam (A1 Express)",
  artist: "Artist: Unknown",
  cover: "covers/Hiphop_Tamizha_-_Single_Kingulam_(A1_Express).webp"
},
{
  name: "Hiphop_Tamizha_-_Net_ah_Thorandha_(Naa_Oru_Alien).mp3",
  title: "Hiphop Tamizha - Net ah Thorandha (Naa Oru Alien)",
  artist: "Artist: Unknown",
  cover: "covers/Hiphop_Tamizha_-_Net_ah_Thorandha_(Naa_Oru_Alien).webp"
},
{
  name: "Hiphop_Tamizha_-_Yaarumey_Venam.mp3",
  title: "Hiphop Tamizha - Yaarumey Venam",
  artist: "Artist: Unknown",
  cover: "covers/Hiphop_Tamizha_-_Yaarumey_Venam.webp"
},
{
  name: "Hiphop_Tamizha_-_BreakUp_Song_(Naan_Sirithal).mp3",
  title: "Hiphop Tamizha - BreakUp Song (Naan Sirithal)",
  artist: "Artist: Unknown",
  cover: "covers/Hiphop_Tamizha_-_BreakUp_Song_(Naan_Sirithal).webp"
},
{
  name: "Hiphop_Tamizha_-_Dhom_Dhom.mp3",
  title: "Hiphop Tamizha - Dhom Dhom",
  artist: "Artist: Unknown",
  cover: "covers/Hiphop_Tamizha_-_Dhom_Dhom.webp"
},
{
  name: "Hiphop_Tamizha_-_Ajukku_Gumukku.mp3",
  title: "Hiphop Tamizha - Ajukku Gumukku",
  artist: "Artist: Unknown",
  cover: "covers/Hiphop_Tamizha_-_Ajukku_Gumukku.webp"
},
{
  name: "Hiphop_Tamizha_-_Happy_Birthday.mp3",
  title: "Hiphop Tamizha - Happy Birthday",
  artist: "Artist: Unknown",
  cover: "covers/Hiphop_Tamizha_-_Happy_Birthday.webp"
},
{
  name: "Hiphop_Tamizha_-_Keka_Beka.mp3",
  title: "Hiphop Tamizha - Keka Beka",
  artist: "Artist: Unknown",
  cover: "covers/Hiphop_Tamizha_-_Keka_Beka.webp"
},
{
  name: "Hiphop_Tamizha_-_Naan_Siricha.mp3",
  title: "Hiphop Tamizha - Naan Siricha",
  artist: "Artist: Unknown",
  cover: "covers/Hiphop_Tamizha_-_Naan_Siricha.webp"
},
{
  name: "Hiphop_Tamizha_-_Odavum_Mudiyathu_Oliyavum_Mudiyathu.mp3",
  title: "Hiphop Tamizha - Odavum Mudiyathu Oliyavum Mudiyathu",
  artist: "Artist: Unknown",
  cover: "covers/Hiphop_Tamizha_-_Odavum_Mudiyathu_Oliyavum_Mudiyathu.webp"
},
{
  name: "Hiphop_Tamizha_-_Dark_Thoughts.mp3",
  title: "Hiphop Tamizha - Dark Thoughts",
  artist: "Artist: Unknown",
  cover: "covers/Hiphop_Tamizha_-_Dark_Thoughts.webp"
},
{
  name: "Hiphop_Tamizha_-_Ellamey_Konja_Kaalam.mp3",
  title: "Hiphop Tamizha - Ellamey Konja Kaalam",
  artist: "Artist: Unknown",
  cover: "covers/Hiphop_Tamizha_-_Ellamey_Konja_Kaalam.webp"
},
{
  name: "Hiphop_Tamizha_-_Inayam.mp3",
  title: "Hiphop Tamizha - Inayam",
  artist: "Artist: Unknown",
  cover: "covers/Hiphop_Tamizha_-_Inayam.webp"
},
{
  name: "Hiphop_Tamizha_-_Pogattum_Pogattum_Po.mp3",
  title: "Pogattum Pogattum Po",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Pogattum_Pogattum_Po.webp"
},
{
  name: "Hiphop_Tamizha_-_Yaarumey_Venam_alternate_listing_single.mp3",
  title: "Yaarumey Venam (alternate listing / single)",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Yaarumey_Venam_alternate_listing_single.webp"
},
{
  name: "Hiphop_Tamizha_-_Amigo.mp3",
  title: "Amigo",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Amigo.webp"
},
{
  name: "Hiphop_Tamizha_-_Veedhikoka_Jaathi.mp3",
  title: "Veedhikoka Jaathi",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Veedhikoka_Jaathi.webp"
},
{
  name: "Hiphop_Tamizha_-_Telavaarutunte.mp3",
  title: "Telavaarutunte",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Telavaarutunte.webp"
},
{
  name: "Hiphop_Tamizha_-_Seatu_Siragadha.mp3",
  title: "Seatu Siragadha",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Seatu_Siragadha.webp"
},
{
  name: "Hiphop_Tamizha_-_Puttibhoomi.mp3",
  title: "Puttibhoomi",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Puttibhoomi.webp"
},
{
  name: "Hiphop_Tamizha_-_Poratamey.mp3",
  title: "Poratamey",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Poratamey.webp"
},
{
  name: "Hiphop_Tamizha_-_Charitraney_Likhinchara.mp3",
  title: "Charitraney Likhinchara",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Charitraney_Likhinchara.webp"
},
{
  name: "Hiphop_Tamizha_-_Sivakumar_Pondati.mp3",
  title: "Sivakumar Pondati",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Sivakumar_Pondati.webp"
},
{
  name: "Hiphop_Tamizha_-_Bahubaliku_Oru_Kattappa.mp3",
  title: "Bahubaliku Oru Kattappa",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Bahubaliku_Oru_Kattappa.webp"
},
{
  name: "Hiphop_Tamizha_-_Neruppa_Irupaan.mp3",
  title: "Neruppa Irupaan",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Neruppa_Irupaan.webp"
},
{
  name: "Hiphop_Tamizha_-_Thillalangadi_Lady.mp3",
  title: "Thillalangadi Lady",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Thillalangadi_Lady.webp"
},
{
  name: "Hiphop_Tamizha_-_BreakUp_Song_alternate_listings.mp3",
  title: "BreakUp Song (alternate listings)",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_BreakUp_Song_alternate_listings.webp"
},
{
  name: "Hiphop_Tamizha_-_Thappellam_Thappe_Illai_from_Naan.mp3",
  title: "Thappellam Thappe Illai (from Naan)",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Thappellam_Thappe_Illai_from_Naan.webp"
},
{
  name: "Hiphop_Tamizha_-_Thani_Oruvan_theme_song.mp3",
  title: "Thani Oruvan (theme / song)",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Thani_Oruvan_theme_song.webp"
},
{
  name: "Hiphop_Tamizha_-_Theemai_Dhaan_Vellum.mp3",
  title: "Theemai Dhaan Vellum",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Theemai_Dhaan_Vellum.webp"
},
{
  name: "Hiphop_Tamizha_-_Aasai_Peraasai.mp3",
  title: "Aasai Peraasai",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Aasai_Peraasai.webp"
},
{
  name: "Hiphop_Tamizha_-_Pazhagikalaam_Aambala.mp3",
  title: "Pazhagikalaam (Aambala)",
  artist: "Artist: Hiphop Tamizha",
  cover: "covers/Hiphop_Tamizha_-_Pazhagikalaam_Aambala.webp"
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