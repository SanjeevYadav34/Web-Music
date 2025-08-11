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
  name: "Indrajit/songs/Enemy_-_Tommee_Profitt,_Sam_Tinnesz_&_Beacon_Light.mp3",
  title: "Enemy - Tommee Profitt, Sam Tinnesz & Beacon Light",
  artist: "Artist: Unknown",
  cover: "Indrajit/covers/Enemy_-_Tommee_Profitt,_Sam_Tinnesz_&_Beacon_Light.jpg"
},
  {
    name: "songs/beggin.mp3",
    title: "Beggin",
    artist: "Artist: Måneskin",
    cover: "covers/beggin.jpg"
  },
  {
    name: "songs/sapphire.mp3",
    title: "Sapphire",
    artist: "Artist: Ed Sheeran",
    cover: "covers/sapphire.jpg"
  },
  {
    name: "songs/fairytale.mp3",
    title: "Fairytale",
    artist: "Artist: Alexander Rybak",
    cover: "covers/fairytale.jpg"
  },
  {
    name: "songs/cheri_cheri_lady.mp3",
    title: "Cheri Cheri Lady",
    artist: "Artist: Modern Talking",
    cover: "covers/cheri_cheri_lady.webp"
  },
  {
    name: "songs/senorita.mp3",
    title: "SEÑORITA",
    artist: "Artist: Shawn Mendes, Camila Cabello",
    cover: "covers/senorita.webp"
  },
  {
    name: "songs/feeling_good.mp3",
    title: "Michael Bublé - Feeling Good",
    artist: "Artist: Michael Bublé",
    cover: "covers/feeling_good.jpg"
  },
  {
    name: "songs/neutral.mp3",
    title: "Imagine Dragons - Natural",
    artist: "Artist: Imagine Dragons",
    cover: "covers/neutral.webp"
  },
{
  name: "Indrajit/songs/Imagine_Dragons_-_Bones.mp3",
  title: "Imagine Dragons - Bones",
  artist: "Artist: Unknown",
  cover: "Indrajit/covers/Imagine_Dragons_-_Bones.jpg"
},
{
  name: "Indrajit/songs/Imagine_Dragons_-_Bad_Liar.mp3",
  title: "Imagine Dragons - Bad Liar",
  artist: "Artist: Unknown",
  cover: "Indrajit/covers/Imagine_Dragons_-_Bad_Liar.jpg"
},
{
  name: "Indrajit/songs/Imagine_Dragons_-_Demons.mp3",
  title: "Imagine Dragons - Demons",
  artist: "Artist: Unknown",
  cover: "Indrajit/covers/Imagine_Dragons_-_Demons.jpg"
},
{
  name: "Indrajit/songs/Imagine_Dragons_-_Believer.mp3",
  title: "Imagine Dragons - Believer",
  artist: "Artist: Unknown",
  cover: "Indrajit/covers/Imagine_Dragons_-_Believer.jpg"
},
{
  name: "Indrajit/songs/Imagine_Dragons_-_Enemy.mp3",
  title: "Imagine Dragons - Enemy",
  artist: "Artist: Unknown",
  cover: "Indrajit/covers/Imagine_Dragons_-_Enemy.jpg"
},
{
  name: "Indrajit/songs/Imagine_Dragons_-_Thunder.mp3",
  title: "Imagine Dragons - Thunder",
  artist: "Artist: Unknown",
  cover: "Indrajit/covers/Imagine_Dragons_-_Thunder.jpg"
},
{
  name: "Indrajit/songs/Ed_Sheeran_-_Perfect.mp3",
  title: "Ed Sheeran - Perfect",
  artist: "Artist: Unknown",
  cover: "Indrajit/covers/Ed_Sheeran_-_Perfect.jpg"
},
{
  name: "Indrajit/songs/Ed_Sheeran_-_Photograph.mp3",
  title: "Ed Sheeran - Photograph",
  artist: "Artist: Unknown",
  cover: "Indrajit/covers/Ed_Sheeran_-_Photograph.jpg"
},
{
  name: "Indrajit/songs/Ed_Sheeran_-_Shape_of_You.mp3",
  title: "Ed Sheeran - Shape of You",
  artist: "Artist: Unknown",
  cover: "Indrajit/covers/Ed_Sheeran_-_Shape_of_You.jpg"
},
{
  name: "Indrajit/songs/Ed_-_Sheeran_-_I_Don't_Care.mp3",
  title: "Ed - Sheeran - I Don't Care",
  artist: "Artist: Unknown",
  cover: "Indrajit/covers/Ed_-_Sheeran_-_I_Don't_Care.jpg"
},
{
  name: "Indrajit/songs/Ed_Sheeran_-_I_Don't_Care_Ed_Sheeran_-_Beautiful_People.mp3",
  title: "Ed Sheeran - Beautiful People",
  artist: "Artist: Unknown",
  cover: "Indrajit/covers/Ed_Sheeran_-_I_Don't_Care_Ed_Sheeran_-_Beautiful_People.jpg"
},
{
  name: "Indrajit/songs/Ed_Sheeran_-_Thinking_Out_Loud.mp3",
  title: "Ed Sheeran - Thinking Out Loud",
  artist: "Artist: Unknown",
  cover: "Indrajit/covers/Ed_Sheeran_-_Thinking_Out_Loud.jpg"
},
{
  name: "Indrajit/songs/Passenger_-_Let_Her_Go.mp3",
  title: "Passenger - Let Her Go",
  artist: "Artist: Unknown",
  cover: "Indrajit/covers/Passenger_-_Let_Her_Go.jpg"
},
{
  name: "Indrajit/songs/Bruno_Mars_-_Talking_To_The_Moon.mp3",
  title: "Bruno Mars - Talking To The Moon",
  artist: "Artist: Unknown",
  cover: "Indrajit/covers/Bruno_Mars_-_Talking_To_The_Moon.jpg"
},
{
  name: "Indrajit/songs/Marron_5_-_Girls_Like_You.mp3",
  title: "Marron 5 - Girls Like You",
  artist: "Artist: Unknown",
  cover: "Indrajit/covers/Marron_5_-_Girls_Like_You.jpg"
},
{
  name: "Indrajit/songs/Post_Malone_-_Sunflower.mp3",
  title: "Post Malone - Sunflower",
  artist: "Artist: Unknown",
  cover: "Indrajit/covers/Post_Malone_-_Sunflower.jpg"
},
{
  name: "Indrajit/songs/Avicii_-_The_Nights.mp3",
  title: "Avicii - The Nights",
  artist: "Artist: Unknown",
  cover: "Indrajit/covers/Avicii_-_The_Nights.jpg"
},
{
  name: "Indrajit/songs/Avicii_-_Waiting_For_Love.mp3",
  title: "Avicii - Waiting For Love",
  artist: "Artist: Unknown",
  cover: "Indrajit/covers/Avicii_-_Waiting_For_Love.jpg"
},
{
  name: "Indrajit/songs/The_Chainsmokers_-_Closer.mp3",
  title: "The Chainsmokers - Closer",
  artist: "Artist: Unknown",
  cover: "Indrajit/covers/The_Chainsmokers_-_Closer.jpg"
},
{
  name: "Indrajit/songs/Charlie_Puth_-_One_Call_Away.mp3",
  title: "Charlie Puth - One Call Away",
  artist: "Artist: Unknown",
  cover: "Indrajit/covers/Charlie_Puth_-_One_Call_Away.jpg"
},
{
  name: "Indrajit/songs/Charlie_Puth_-_We_Don't_Talk_Anymore.mp3",
  title: "Charlie Puth - We Don't Talk Anymore",
  artist: "Artist: Unknown",
  cover: "Indrajit/covers/Charlie_Puth_-_We_Don't_Talk_Anymore.jpg"
},
  {
    name: "rahul/songs/Stephen Sanchez - Until I Found You (Official Video).mp3",
    title: "Stephen Sanchez - Until I Found You (Official Video)",
    artist: "",
    cover: "rahul/covers/step.jpg"
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