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
},
{
  name: "Bade_Achhe_Lagte_Hain_Amit_Kumar_R._D._Burman.mp3",
  title: "Bade Achhe Lagte Hain Amit Kumar R. D. Burman",
  artist: "Artist: Unknown",
  cover: "covers/Bade_Achhe_Lagte_Hain_Amit_Kumar_R._D._Burman.jpg"
},
{
  name: "Sanson_Ki_Mala_Peh_Simroon_Nusrat_Fateh_Ali_Khan.mp3",
  title: "Sanson Ki Mala Peh Simroon Nusrat Fateh Ali Khan",
  artist: "Artist: Unknown",
  cover: "covers/Sanson_Ki_Mala_Peh_Simroon_Nusrat_Fateh_Ali_Khan.jpg"
},
{
  name: "Suno_Na_Suno_Na_Abhijeet.mp3",
  title: "Suno Na Suno Na Abhijeet",
  artist: "Artist: Unknown",
  cover: "covers/Suno_Na_Suno_Na_Abhijeet.jpg"
},
{
  name: "Main_Koi_Aisa_Geet_Gaoon_Abhijeet_Alka_Yagnik.mp3",
  title: "Main Koi Aisa Geet Gaoon Abhijeet Alka Yagnik",
  artist: "Artist: Unknown",
  cover: "covers/Main_Koi_Aisa_Geet_Gaoon_Abhijeet_Alka_Yagnik.jpg"
},
{
  name: "Soniyo_Raju_Singh_Sonu_Nigam.mp3",
  title: "Soniyo Raju Singh Sonu Nigam",
  artist: "Artist: Unknown",
  cover: "covers/Soniyo_Raju_Singh_Sonu_Nigam.jpg"
},
{
  name: "Jadu_Hai_Nasha_Hai_2002_Shreya_Ghoshal_Neelesh_Misra.mp3",
  title: "Jadu Hai Nasha Hai 2002 Shreya Ghoshal Neelesh Misra",
  artist: "Artist: Unknown",
  cover: "covers/Jadu_Hai_Nasha_Hai_2002_Shreya_Ghoshal_Neelesh_Misra.jpg"
},
{
  name: "Jiyein_Kyun_Pritam_Papon.mp3",
  title: "Jiyein Kyun Pritam Papon",
  artist: "Artist: Unknown",
  cover: "covers/Jiyein_Kyun_Pritam_Papon.jpg"
},
{
  name: "Bin_Tere_Vishal-Shekhar_Shafqat_Amanat_Ali.mp3",
  title: "Bin Tere Vishal-Shekhar Shafqat Amanat Ali",
  artist: "Artist: Unknown",
  cover: "covers/Bin_Tere_Vishal-Shekhar_Shafqat_Amanat_Ali.jpg"
},
{
  name: "Saware_Pritam_Arijit_Singh.mp3",
  title: "Saware Pritam Arijit Singh",
  artist: "Artist: Unknown",
  cover: "covers/Saware_Pritam_Arijit_Singh.jpg"
},
{
  name: "Tu_Hi_Re_From_Bombay_Hariharan_Kavita_Krishnamurthy.mp3",
  title: "Tu Hi Re From Bombay Hariharan Kavita Krishnamurthy",
  artist: "Artist: Unknown",
  cover: "covers/Tu_Hi_Re_From_Bombay_Hariharan_Kavita_Krishnamurthy.jpg"
},
{
  name: "Tum_Se_Hi_Pritam_Mohit_Chauhan_Irshad_Kamil.mp3",
  title: "Tum Se Hi Pritam Mohit Chauhan Irshad Kamil",
  artist: "Artist: Unknown",
  cover: "covers/Tum_Se_Hi_Pritam_Mohit_Chauhan_Irshad_Kamil.jpg"
},
{
  name: "Dhoonde_Akhiyaan_From_Jabariya_Jodi_Yasser_Desai_Altamash_Faridi_Rashmi_Virag.mp3",
  title: "Dhoonde Akhiyaan From Jabariya Jodi Yasser Desai Altamash Faridi Rashmi Virag",
  artist: "Artist: Unknown",
  cover: "covers/Dhoonde_Akhiyaan_From_Jabariya_Jodi_Yasser_Desai_Altamash_Faridi_Rashmi_Virag.jpg"
},
{
  name: "Mere_Bina_Pritam_Nikhil_D'Souza.mp3",
  title: "Mere Bina Pritam Nikhil D'Souza",
  artist: "Artist: Unknown",
  cover: "covers/Mere_Bina_Pritam_Nikhil_D'Souza.jpg"
},
{
  name: "Moh_Moh_Ke_Dhaage_Female_Anu_Malik_Monali_Thakur_Varun_Grover.mp3",
  title: "Moh Moh Ke Dhaage Female Anu Malik Monali Thakur Varun Grover",
  artist: "Artist: Unknown",
  cover: "covers/Moh_Moh_Ke_Dhaage_Female_Anu_Malik_Monali_Thakur_Varun_Grover.jpg"
},
{
  name: "Tum_Mile_Pritam_Neeraj_Shridhar.mp3",
  title: "Tum Mile Pritam Neeraj Shridhar",
  artist: "Artist: Unknown",
  cover: "covers/Tum_Mile_Pritam_Neeraj_Shridhar.jpg"
},
{
  name: "Ajab_Si_Vishal-Shekhar_KK.mp3",
  title: "Ajab Si Vishal-Shekhar KK",
  artist: "Artist: Unknown",
  cover: "covers/Ajab_Si_Vishal-Shekhar_KK.jpg"
},
{
  name: "Raanjhanaa_From_Raanjhanaa_A_R_Rahman_Jaswinder_Singh.mp3",
  title: "Raanjhanaa From Raanjhanaa A R Rahman Jaswinder Singh",
  artist: "Artist: Unknown",
  cover: "covers/Raanjhanaa_From_Raanjhanaa_A_R_Rahman_Jaswinder_Singh.jpg"
},
{
  name: "Mera_Yaar_Shankar-Ehsaan-Loy_Javed_Bashir.mp3",
  title: "Mera Yaar Shankar-Ehsaan-Loy Javed Bashir",
  artist: "Artist: Unknown",
  cover: "covers/Mera_Yaar_Shankar-Ehsaan-Loy_Javed_Bashir.jpg"
},
{
  name: "Khudaya_Khair_Pritam_Soham_Chakraborty_Akriti_Kakar.mp3",
  title: "Khudaya Khair Pritam Soham Chakraborty Akriti Kakar",
  artist: "Artist: Unknown",
  cover: "covers/Khudaya_Khair_Pritam_Soham_Chakraborty_Akriti_Kakar.jpg"
},
{
  name: "Saudebazi_Encore_Pritam_Javed_Ali.mp3",
  title: "Saudebazi Encore Pritam Javed Ali",
  artist: "Artist: Unknown",
  cover: "covers/Saudebazi_Encore_Pritam_Javed_Ali.jpg"
},
{
  name: "Ramta_Jogi_Sukhwinder_Singh_Alka_Yagnik.mp3",
  title: "Ramta Jogi Sukhwinder Singh Alka Yagnik",
  artist: "Artist: Unknown",
  cover: "covers/Ramta_Jogi_Sukhwinder_Singh_Alka_Yagnik.jpg"
},
{
  name: "Taal_Se_Taal_Western_Version_Sukhwinder_Singh.mp3",
  title: "Taal Se Taal Western Version Sukhwinder Singh",
  artist: "Artist: Unknown",
  cover: "covers/Taal_Se_Taal_Western_Version_Sukhwinder_Singh.jpg"
},
{
  name: "Kehna_Hi_Kya_From_Bombay_K._S._Chithra.mp3",
  title: "Kehna Hi Kya From Bombay K. S. Chithra",
  artist: "Artist: Unknown",
  cover: "covers/Kehna_Hi_Kya_From_Bombay_K._S._Chithra.jpg"
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
