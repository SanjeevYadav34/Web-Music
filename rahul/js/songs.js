const songs = [
{
  name: "The_Chainsmokers_-_Closer_(Lyrics)_feat._Halsey.mp3",
  title: "The Chainsmokers - Closer (Lyrics) feat. Halsey",
  artist: "Artist: Unknown",
  cover: "covers/The_Chainsmokers_-_Closer_(Lyrics)_feat._Halsey.jpg"
},
{
  name: "Sevdaliza_-_Alibi_ft._Pabllo_Vittar_&_Yseult_(Official_Music_Video).mp3",
  title: "Sevdaliza - Alibi ft. Pabllo Vittar & Yseult (Official Music Video)",
  artist: "Artist: Unknown",
  cover: "covers/Sevdaliza_-_Alibi_ft._Pabllo_Vittar_&_Yseult_(Official_Music_Video).jpg"
},
{
  name: "Manali_Trance_|_Yo_Yo_Honey_Singh_x_Neha_Kakkar_x_Lisa_Haydon.mp3",
  title: "Manali Trance | Yo Yo Honey Singh x Neha Kakkar x Lisa Haydon",
  artist: "Artist: Unknown",
  cover: "covers/Manali_Trance_|_Yo_Yo_Honey_Singh_x_Neha_Kakkar_x_Lisa_Haydon.jpg"
},
{
  name: "Ek_Nazar_Mein_Bhi_|_Taxi_No_9211_|_John_Abraham_|_Sameera_Reddy.mp3",
  title: "Ek Nazar Mein Bhi | Taxi No 9211 | John Abraham | Sameera Reddy",
  artist: "Artist: Unknown",
  cover: "covers/Ek_Nazar_Mein_Bhi_|_Taxi_No_9211_|_John_Abraham_|_Sameera_Reddy.jpg"
},
{
  name: "Gori_Radha_Ne_Kalo_Kaan_|_Wrong_Side_Raju_|_Pratik_Gandhi_|_Kirtidan_Gadhvi.mp3",
  title: "Gori Radha Ne Kalo Kaan | Wrong Side Raju | Pratik Gandhi | Kirtidan Gadhvi",
  artist: "Artist: Unknown",
  cover: "covers/Gori_Radha_Ne_Kalo_Kaan_|_Wrong_Side_Raju_|_Pratik_Gandhi_|_Kirtidan_Gadhvi.jpg"
},
{
  name: "Milaa_Yun_|_Haseen_Dillruba_|_Taapsee_Pannu,_Vikrant_Massey,_Harshvardhan_|_Amit_Trivedi.mp3",
  title: "Milaa Yun | Haseen Dillruba | Taapsee Pannu, Vikrant Massey, Harshvardhan | Amit Trivedi",
  artist: "Artist: Unknown",
  cover: "covers/Milaa_Yun_|_Haseen_Dillruba_|_Taapsee_Pannu,_Vikrant_Massey,_Harshvardhan_|_Amit_Trivedi.jpg"
},
{
  name: "Tu_Zaroori_|_Zid_|_Mannara,_Karanvir_|_Sunidhi_Chauhan,_Sharib_Sabri.mp3",
  title: "Tu Zaroori | Zid | Mannara, Karanvir | Sunidhi Chauhan, Sharib Sabri",
  artist: "Artist: Unknown",
  cover: "covers/Tu_Zaroori_|_Zid_|_Mannara,_Karanvir_|_Sunidhi_Chauhan,_Sharib_Sabri.jpg"
},
{
  name: "Pehli_Nazar_Mein_|_Atif_Aslam_|_Race_|_Akshaye,_Bipasha,_Saif.mp3",
  title: "Pehli Nazar Mein | Atif Aslam | Race | Akshaye, Bipasha, Saif",
  artist: "Artist: Unknown",
  cover: "covers/Pehli_Nazar_Mein_|_Atif_Aslam_|_Race_|_Akshaye,_Bipasha,_Saif.jpg"
},
{
  name: "Kashyala_Lavato_(Lavani_Song)_|_Poshter_Girl_|_Rasika_|_Amitraj,_Bela_Shende.mp3",
  title: "Kashyala Lavato (Lavani Song) | Poshter Girl | Rasika | Amitraj, Bela Shende",
  artist: "Artist: Unknown",
  cover: "covers/Kashyala_Lavato_(Lavani_Song)_|_Poshter_Girl_|_Rasika_|_Amitraj,_Bela_Shende.jpg"
},
{
  name: "Mann_Ki_Lagan_|_Rahat_Fateh_Ali_Khan_|_John_Abraham_|_Paap.mp3",
  title: "Mann Ki Lagan | Rahat Fateh Ali Khan | John Abraham | Paap",
  artist: "Artist: Unknown",
  cover: "covers/Mann_Ki_Lagan_|_Rahat_Fateh_Ali_Khan_|_John_Abraham_|_Paap.jpg"
},
{
  name: "Vinchoo_Chawla_|_Shaswati_|_Dance_Song_(Marathi).mp3",
  title: "Vinchoo Chawla | Shaswati | Dance Song (Marathi)",
  artist: "Artist: Unknown",
  cover: "covers/Vinchoo_Chawla_|_Shaswati_|_Dance_Song_(Marathi).jpg"
},
{
  name: "Tose_Naina_Lage_|_Anwar_(2007)_|_Siddharth_Koirala_|_Nauheed_Cyrusi.mp3",
  title: "Tose Naina Lage | Anwar (2007) | Siddharth Koirala | Nauheed Cyrusi",
  artist: "Artist: Unknown",
  cover: "covers/Tose_Naina_Lage_|_Anwar_(2007)_|_Siddharth_Koirala_|_Nauheed_Cyrusi.jpg"
},
{
  name: "Natarang_Ubha_(Marathi).mp3",
  title: "Natarang Ubha (Marathi)",
  artist: "Artist: Unknown",
  cover: "covers/Natarang_Ubha_(Marathi).jpg"
},
{
  name: "He_Assa_Pahila_|_Kesari_(Saffron)_|_Virat_Madake_&_Rupa_Borgaonkar.mp3",
  title: "He Assa Pahila | Kesari (Saffron) | Virat Madake & Rupa Borgaonkar",
  artist: "Artist: Unknown",
  cover: "covers/He_Assa_Pahila_|_Kesari_(Saffron)_|_Virat_Madake_&_Rupa_Borgaonkar.jpg"
},
{
  name: "I_Wanna_Be_Yours.mp3",
  title: "I Wanna Be Yours",
  artist: "Artist: Unknown",
  cover: "covers/I_Wanna_Be_Yours.jpg"
}
];