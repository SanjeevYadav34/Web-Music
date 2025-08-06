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
  name: "Imagine_Dragons_-_Take_me_to_the_beach.mp3",
  title: "Imagine Dragons - Take me to the beach",
  artist: "Artist: Unknown",
  cover: "covers/Imagine_Dragons_-_Take_me_to_the_beach.jpg"
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
