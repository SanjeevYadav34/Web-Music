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
  name: "Imagine_Dragons_-_Bones.mp3",
  title: "Imagine Dragons - Bones",
  artist: "Artist: Unknown",
  cover: "covers/Imagine_Dragons_-_Bones.jpg"
},
{
  name: "Imagine_Dragons_-_Bad_Liar.mp3",
  title: "Imagine Dragons - Bad Liar",
  artist: "Artist: Unknown",
  cover: "covers/Imagine_Dragons_-_Bad_Liar.jpg"
},
{
  name: "Imagine_Dragons_-_Demons.mp3",
  title: "Imagine Dragons - Demons",
  artist: "Artist: Unknown",
  cover: "covers/Imagine_Dragons_-_Demons.jpg"
},
{
  name: "Imagine_Dragons_-_Believer.mp3",
  title: "Imagine Dragons - Believer",
  artist: "Artist: Unknown",
  cover: "covers/Imagine_Dragons_-_Believer.jpg"
},
{
  name: "Imagine_Dragons_-_Enemy.mp3",
  title: "Imagine Dragons - Enemy",
  artist: "Artist: Unknown",
  cover: "covers/Imagine_Dragons_-_Enemy.jpg"
},
{
  name: "Imagine_Dragons_-_Thunder.mp3",
  title: "Imagine Dragons - Thunder",
  artist: "Artist: Unknown",
  cover: "covers/Imagine_Dragons_-_Thunder.jpg"
},
{
  name: "Ed_Sheeran_-_Perfect.mp3",
  title: "Ed Sheeran - Perfect",
  artist: "Artist: Unknown",
  cover: "covers/Ed_Sheeran_-_Perfect.jpg"
},
{
  name: "Ed_Sheeran_-_Photograph.mp3",
  title: "Ed Sheeran - Photograph",
  artist: "Artist: Unknown",
  cover: "covers/Ed_Sheeran_-_Photograph.jpg"
},
{
  name: "Ed_Sheeran_-_Shape_of_You.mp3",
  title: "Ed Sheeran - Shape of You",
  artist: "Artist: Unknown",
  cover: "covers/Ed_Sheeran_-_Shape_of_You.jpg"
},
{
  name: "Ed_Sheeran_-_I_Don't_Care_Ed_Sheeran_-_Beautiful_People.mp3",
  title: "Ed Sheeran - I Don't Care Ed Sheeran - Beautiful People",
  artist: "Artist: Unknown",
  cover: "covers/Ed_Sheeran_-_I_Don't_Care_Ed_Sheeran_-_Beautiful_People.jpg"
},
{
  name: "Ed_Sheeran_-_Thinking_Out_Loud.mp3",
  title: "Ed Sheeran - Thinking Out Loud",
  artist: "Artist: Unknown",
  cover: "covers/Ed_Sheeran_-_Thinking_Out_Loud.jpg"
},
{
  name: "Passenger_-_Let_Her_Go.mp3",
  title: "Passenger - Let Her Go",
  artist: "Artist: Unknown",
  cover: "covers/Passenger_-_Let_Her_Go.jpg"
},
{
  name: "Bruno_Mars_-_Talking_To_The_Moon.mp3",
  title: "Bruno Mars - Talking To The Moon",
  artist: "Artist: Unknown",
  cover: "covers/Bruno_Mars_-_Talking_To_The_Moon.jpg"
},
{
  name: "Marron_5_-_Girls_Like_You.mp3",
  title: "Marron 5 - Girls Like You",
  artist: "Artist: Unknown",
  cover: "covers/Marron_5_-_Girls_Like_You.jpg"
},
{
  name: "Post_Malone_-_Sunflower.mp3",
  title: "Post Malone - Sunflower",
  artist: "Artist: Unknown",
  cover: "covers/Post_Malone_-_Sunflower.jpg"
},
{
  name: "Avicii_-_The_Nights.mp3",
  title: "Avicii - The Nights",
  artist: "Artist: Unknown",
  cover: "covers/Avicii_-_The_Nights.jpg"
},
{
  name: "Avicii_-_Waiting_For_Love.mp3",
  title: "Avicii - Waiting For Love",
  artist: "Artist: Unknown",
  cover: "covers/Avicii_-_Waiting_For_Love.jpg"
},
{
  name: "The_Chainsmokers_-_Closer.mp3",
  title: "The Chainsmokers - Closer",
  artist: "Artist: Unknown",
  cover: "covers/The_Chainsmokers_-_Closer.jpg"
},
{
  name: "Charlie_Puth_-_One_Call_Away.mp3",
  title: "Charlie Puth - One Call Away",
  artist: "Artist: Unknown",
  cover: "covers/Charlie_Puth_-_One_Call_Away.jpg"
},
{
  name: "Charlie_Puth_-_We_Don't_Talk_Anymore.mp3",
  title: "Charlie Puth - We Don't Talk Anymore",
  artist: "Artist: Unknown",
  cover: "covers/Charlie_Puth_-_We_Don't_Talk_Anymore.jpg"
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
