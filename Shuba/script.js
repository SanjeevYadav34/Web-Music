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
  name: "../Komal/songs/Katchi_Sera.mp3",
  title: "Katchi Sera",
  artist: "Artist: Unknown",
  cover: "../Komal/covers/Katchi_Sera.jpg"
},
{
  name: "Anirudh_Ravichander_-_Why_This_Kolaveri_Di.mp3",
  title: "Anirudh Ravichander - Why This Kolaveri Di",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Why_This_Kolaveri_Di.jpg"
},
{
  name: "Anirudh_Ravichander_-_Po_Nee_Po.mp3",
  title: "Anirudh Ravichander - Po Nee Po",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Po_Nee_Po.jpg"
},
{
  name: "Anirudh_Ravichander_-_Idhazhin_Oram.mp3",
  title: "Anirudh Ravichander - Idhazhin Oram",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Idhazhin_Oram.jpg"
},
{
  name: "Anirudh_Ravichander_-_Velicha_Poove_Vaa.mp3",
  title: "Anirudh Ravichander - Velicha Poove Vaa",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Velicha_Poove_Vaa.jpg"
},
{
  name: "Anirudh_Ravichander_-_Ethir_Neechal.mp3",
  title: "Anirudh Ravichander - Ethir Neechal",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Ethir_Neechal.jpg"
},
{
  name: "Anirudh_Ravichander_-_Vanakkam_Chennai.mp3",
  title: "Anirudh Ravichander - Vanakkam Chennai",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Vanakkam_Chennai.jpg"
},
{
  name: "Anirudh_Ravichander_-_Oh_Penne.mp3",
  title: "Anirudh Ravichander - Oh Penne",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Oh_Penne.jpg"
},
{
  name: "Anirudh_Ravichander_-_Selfie_Pulla.mp3",
  title: "Anirudh Ravichander - Selfie Pulla",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Selfie_Pulla.jpg"
},
{
  name: "Anirudh_Ravichander_-_Aaluma_Doluma.mp3",
  title: "Anirudh Ravichander - Aaluma Doluma",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Aaluma_Doluma.jpg"
},
{
  name: "Anirudh_Ravichander_-_Thangamey.mp3",
  title: "Anirudh Ravichander - Thangamey",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Thangamey.jpg"
},
{
  name: "Anirudh_Ravichander_-_Azhage_Azhage.mp3",
  title: "Anirudh Ravichander - Azhage Azhage",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Azhage_Azhage.jpg"
},
{
  name: "Anirudh_Ravichander_-_Surviva.mp3",
  title: "Anirudh Ravichander - Surviva",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Surviva.jpg"
},
{
  name: "Anirudh_Ravichander_-_Vivegam_Theme.mp3",
  title: "Anirudh Ravichander - Vivegam Theme",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Vivegam_Theme.jpg"
},
{
  name: "Anirudh_Ravichander_-_Sodakku.mp3",
  title: "Anirudh Ravichander - Sodakku",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Sodakku.jpg"
},
{
  name: "Anirudh_Ravichander_-_Gaali_Vaaluga.mp3",
  title: "Anirudh Ravichander - Gaali Vaaluga",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Gaali_Vaaluga.jpg"
},
{
  name: "Anirudh_Ravichander_-_Kutti_Story.mp3",
  title: "Anirudh Ravichander - Kutti Story",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Kutti_Story.jpg"
},
{
  name: "Anirudh_Ravichander_-_Vaathi_Coming.mp3",
  title: "Anirudh Ravichander - Vaathi Coming",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Vaathi_Coming.jpg"
},
{
  name: "Anirudh_Ravichander_-_Master_the_Blaster.mp3",
  title: "Anirudh Ravichander - Master the Blaster",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Master_the_Blaster.jpg"
},
{
  name: "Anirudh_Ravichander_-_Chellamma.mp3",
  title: "Anirudh Ravichander - Chellamma",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Chellamma.jpg"
},
{
  name: "Anirudh_Ravichander_-_Arabic_Kuthu_(Halamithi_Habibo).mp3",
  title: "Anirudh Ravichander - Arabic Kuthu (Halamithi Habibo)",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Arabic_Kuthu_(Halamithi_Habibo).jpg"
},
{
  name: "Anirudh_Ravichander_-_Jolly_O_Gymkhana.mp3",
  title: "Anirudh Ravichander - Jolly O Gymkhana",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Jolly_O_Gymkhana.jpg"
},
{
  name: "Anirudh_Ravichander_-_Beast_Mode.mp3",
  title: "Anirudh Ravichander - Beast Mode",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Beast_Mode.jpg"
},
{
  name: "Anirudh_Ravichander_-_Ranjithame.mp3",
  title: "Anirudh Ravichander - Ranjithame",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Ranjithame.jpg"
},
{
  name: "Anirudh_Ravichander_-_Jimikki_Ponnu.mp3",
  title: "Anirudh Ravichander - Jimikki Ponnu",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Jimikki_Ponnu.jpg"
},
{
  name: "Anirudh_Ravichander_-_Badass.mp3",
  title: "Anirudh Ravichander - Badass",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Badass.jpg"
},
{
  name: "Anirudh_Ravichander_-_Ordinary_Person.mp3",
  title: "Anirudh Ravichander - Ordinary Person",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Ordinary_Person.jpg"
},
{
  name: "Anirudh_Ravichander_-_So_Baby.mp3",
  title: "Anirudh Ravichander - So Baby",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_So_Baby.jpg"
},
{
  name: "Anirudh_Ravichander_-_Pathala_Pathala.mp3",
  title: "Anirudh Ravichander - Pathala Pathala",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Pathala_Pathala.jpg"
},
{
  name: "Anirudh_Ravichander_-_Vaa_Vaathi.mp3",
  title: "Anirudh Ravichander - Vaa Vaathi",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Vaa_Vaathi.jpg"
},
{
  name: "Anirudh_Ravichander_-_Chaleya.mp3",
  title: "Anirudh Ravichander - Chaleya",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Chaleya.webp"
},
{
  name: "Anirudh_Ravichander_-_Hayyoda.mp3",
  title: "Anirudh Ravichander - Hayyoda",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Hayyoda.jpg"
},
{
  name: "Anirudh_Ravichander_-_Come_On_Girls_–_The_Celebration_of_Love.mp3",
  title: "Anirudh Ravichander - Come On Girls – The Celebration of Love",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Come_On_Girls_–_The_Celebration_of_Love.jpg"
},
{
  name: "Anirudh_Ravichander_-_Kanave_Kanave.mp3",
  title: "Anirudh Ravichander - Kanave Kanave",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Kanave_Kanave.jpg"
},
{
  name: "Anirudh_Ravichander_-_Chennai_City_Gangsta.mp3",
  title: "Anirudh Ravichander - Chennai City Gangsta",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Chennai_City_Gangsta.jpg"
},
{
  name: "Anirudh_Ravichander_-_Ailasa_Aile_Ailasa.mp3",
  title: "Anirudh Ravichander - Ailasa Aile Ailasa",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Ailasa_Aile_Ailasa.jpg"
},
{
  name: "Anirudh_Ravichander_-_What_a_Karuvaad.mp3",
  title: "Anirudh Ravichander - What a Karuvaad",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_What_a_Karuvaad.jpg"
},
{
  name: "Anirudh_Ravichander_-_Pakkam_Vanthu.mp3",
  title: "Anirudh Ravichander - Pakkam Vanthu",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Pakkam_Vanthu.jpg"
},
{
  name: "Anirudh_Ravichander_-_Aathi_Ena_Nee.mp3",
  title: "Anirudh Ravichander - Aathi Ena Nee",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Aathi_Ena_Nee.jpg"
},
{
  name: "Anirudh_Ravichander_-_Kadhal_Kan_Kattudhe.mp3",
  title: "Anirudh Ravichander - Kadhal Kan Kattudhe",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Kadhal_Kan_Kattudhe.jpg"
},
{
  name: "Anirudh_Ravichander_-_I’m_So_Cool.mp3",
  title: "Anirudh Ravichander - I’m So Cool",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_I’m_So_Cool.jpg"
},
{
  name: "Anirudh_Ravichander_-_Shake_That.mp3",
  title: "Anirudh Ravichander - Shake That",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Shake_That.jpg"
},
{
  name: "Anirudh_Ravichander_-_Kaaki_Sattai_Title_Track.mp3",
  title: "Anirudh Ravichander - Kaaki Sattai Title Track",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Kaaki_Sattai_Title_Track.jpg"
},
{
  name: "Anirudh_Ravichander_-_Maari_Thara_Local.mp3",
  title: "Anirudh Ravichander - Maari Thara Local",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Maari_Thara_Local.jpg"
},
{
  name: "Anirudh_Ravichander_-_Donu_Donu_Donu.mp3",
  title: "Anirudh Ravichander - Donu Donu Donu",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Donu_Donu_Donu.jpg"
},
{
  name: "Anirudh_Ravichander_-_Yennai_Maatrum_Kadhale.mp3",
  title: "Anirudh Ravichander - Yennai Maatrum Kadhale",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Yennai_Maatrum_Kadhale.jpg"
},
{
  name: "Anirudh_Ravichander_-_Varavaa_Varavaa.mp3",
  title: "Anirudh Ravichander - Varavaa Varavaa",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Varavaa_Varavaa.jpg"
},
{
  name: "Anirudh_Ravichander_-_The_Theri_Theme_Song.mp3",
  title: "Anirudh Ravichander - The Theri Theme Song",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_The_Theri_Theme_Song.jpg"
},
{
  name: "Anirudh_Ravichander_-_Veera_Vinayaka.mp3",
  title: "Anirudh Ravichander - Veera Vinayaka",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Veera_Vinayaka.jpg"
},
{
  name: "Anirudh_Ravichander_-_Tak_Bak.mp3",
  title: "Anirudh Ravichander - Tak Bak",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Tak_Bak.jpg"
},
{
  name: "Anirudh_Ravichander_-_Marandhadhae.mp3",
  title: "Anirudh Ravichander - Marandhadhae",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Marandhadhae.jpg"
},
{
  name: "Anirudh_Ravichander_-_Theeramal.mp3",
  title: "Anirudh Ravichander - Theeramal",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Theeramal.jpg"
},
{
  name: "Anirudh_Ravichander_-_Naanga_Podiyan.mp3",
  title: "Anirudh Ravichander - Naanga Podiyan",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Naanga_Podiyan.jpg"
},
{
  name: "Anirudh_Ravichander_-_Shoot_The_Kuruvi.mp3",
  title: "Anirudh Ravichander - Shoot The Kuruvi",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Shoot_The_Kuruvi.jpg"
},
{
  name: "Anirudh_Ravichander_-_Hey_Mama.mp3",
  title: "Anirudh Ravichander - Hey Mama",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Hey_Mama.jpg"
},
{
  name: "Anirudh_Ravichander_-_Akka_Petha_Jakkavandi.mp3",
  title: "Anirudh Ravichander - Akka Petha Jakkavandi",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Akka_Petha_Jakkavandi.jpg"
},
{
  name: "Anirudh_Ravichander_-_Remo_Nee_Kadhalan.mp3",
  title: "Anirudh Ravichander - Remo Nee Kadhalan",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Remo_Nee_Kadhalan.jpg"
},
{
  name: "Anirudh_Ravichander_-_Senjitaley.mp3",
  title: "Anirudh Ravichander - Senjitaley",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Senjitaley.jpg"
},
{
  name: "Anirudh_Ravichander_-_Meesa_Beauty.mp3",
  title: "Anirudh Ravichander - Meesa Beauty",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Meesa_Beauty.jpg"
},
{
  name: "Anirudh_Ravichander_-_Tamilselvi.mp3",
  title: "Anirudh Ravichander - Tamilselvi",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Tamilselvi.jpg"
},
{
  name: "Anirudh_Ravichander_-_Sirikkadhey.mp3",
  title: "Anirudh Ravichander - Sirikkadhey",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Sirikkadhey.jpg"
},
{
  name: "Anirudh_Ravichander_-_Ondroduthan_Ondroga.mp3",
  title: "Anirudh Ravichander - Ondroduthan Ondroga",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Ondroduthan_Ondroga.jpg"
},
{
  name: "Anirudh_Ravichander_-_Damaalu_Dumeelu.mp3",
  title: "Anirudh Ravichander - Damaalu Dumeelu",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Damaalu_Dumeelu.jpg"
},
{
  name: "Anirudh_Ravichander_-_Rangu_Rakkara.mp3",
  title: "Anirudh Ravichander - Rangu Rakkara",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Rangu_Rakkara.jpg"
},
{
  name: "Anirudh_Ravichander_-_Ra_Ra_Ra.mp3",
  title: "Anirudh Ravichander - Ra Ra Ra",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Ra_Ra_Ra.jpg"
},
{
  name: "Anirudh_Ravichander_-_Karukku_kallangolu.mp3",
  title: "Anirudh Ravichander - Karukku kallangolu",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Karukku_kallangolu.jpg"
},
{
  name: "Anirudh_Ravichander_-_Hai,_En_Kai_Mela.mp3",
  title: "Anirudh Ravichander - Hai, En Kai Mela",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Hai,_En_Kai_Mela.jpg"
},
{
  name: "Anirudh_Ravichander_-_Foreign_Return.mp3",
  title: "Anirudh Ravichander - Foreign Return",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Foreign_Return.jpg"
},
{
  name: "Anirudh_Ravichander_-_Yaanji.mp3",
  title: "Anirudh Ravichander - Yaanji",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Yaanji.jpg"
},
{
  name: "Anirudh_Ravichander_-_On_Nenappu.mp3",
  title: "Anirudh Ravichander - On Nenappu",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_On_Nenappu.jpg"
},
{
  name: "Anirudh_Ravichander_-_Karuthavanlaam_Galeejaam.mp3",
  title: "Anirudh Ravichander - Karuthavanlaam Galeejaam",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Karuthavanlaam_Galeejaam.jpg"
},
{
  name: "Anirudh_Ravichander_-_Iraiva.mp3",
  title: "Anirudh Ravichander - Iraiva",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Iraiva.jpg"
},
{
  name: "Anirudh_Ravichander_-_Idhayane.mp3",
  title: "Anirudh Ravichander - Idhayane",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Idhayane.jpg"
},
{
  name: "Anirudh_Ravichander_-_Othaiyadi_Pathayila.mp3",
  title: "Anirudh Ravichander - Othaiyadi Pathayila",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Othaiyadi_Pathayila.jpg"
},
{
  name: "Anirudh_Ravichander_-_Kannampoochi.mp3",
  title: "Anirudh Ravichander - Kannampoochi",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Kannampoochi.jpg"
},
{
  name: "Anirudh_Ravichander_-_Ezhu_Ezhu.mp3",
  title: "Anirudh Ravichander - Ezhu Ezhu",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Ezhu_Ezhu.jpg"
},
{
  name: "Anirudh_Ravichander_-_Ilamai_Thirumbudhe.mp3",
  title: "Anirudh Ravichander - Ilamai Thirumbudhe",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Ilamai_Thirumbudhe.jpg"
},
{
  name: "Anirudh_Ravichander_-_Marana_Mass.mp3",
  title: "Anirudh Ravichander - Marana Mass",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Marana_Mass.jpg"
},
{
  name: "Anirudh_Ravichander_-_Petta_Paraak.mp3",
  title: "Anirudh Ravichander - Petta Paraak",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Petta_Paraak.webp"
},
{
  name: "Anirudh_Ravichander_-_Kannamma.mp3",
  title: "Anirudh Ravichander - Kannamma",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Kannamma.jpg"
},
{
  name: "Anirudh_Ravichander_-_Marakkavillayae.mp3",
  title: "Anirudh Ravichander - Marakkavillayae",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Marakkavillayae.jpg"
},
{
  name: "Anirudh_Ravichander_-_Takkunu_Takkunu.mp3",
  title: "Anirudh Ravichander - Takkunu Takkunu",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Takkunu_Takkunu.jpg"
},
{
  name: "Anirudh_Ravichander_-_Pudhusaattam.mp3",
  title: "Anirudh Ravichander - Pudhusaattam",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Pudhusaattam.jpg"
},
{
  name: "Anirudh_Ravichander_-_Kanne_Kanne.mp3",
  title: "Anirudh Ravichander - Kanne Kanne",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Kanne_Kanne.jpg"
},
{
  name: "Anirudh_Ravichander_-_Kadhal_Psycho.mp3",
  title: "Anirudh Ravichander - Kadhal Psycho",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Kadhal_Psycho.jpg"
},
{
  name: "Anirudh_Ravichander_-_Sandakari_Neethan.mp3",
  title: "Anirudh Ravichander - Sandakari Neethan",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Sandakari_Neethan.jpg"
},
{
  name: "Anirudh_Ravichander_-_Thiruvizha.mp3",
  title: "Anirudh Ravichander - Thiruvizha",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Thiruvizha.jpg"
},
{
  name: "Anirudh_Ravichander_-_I_Want_A_Girl.mp3",
  title: "Anirudh Ravichander - I Want A Girl",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_I_Want_A_Girl.jpg"
},
{
  name: "Anirudh_Ravichander_-_Chumma_Kizhi.mp3",
  title: "Anirudh Ravichander - Chumma Kizhi",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Chumma_Kizhi.jpg"
},
{
  name: "Anirudh_Ravichander_-_Thani_Vazhi.mp3",
  title: "Anirudh Ravichander - Thani Vazhi",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Thani_Vazhi.jpg"
},
{
  name: "Anirudh_Ravichander_-_Tharam_Maara.mp3",
  title: "Anirudh Ravichander - Tharam Maara",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Tharam_Maara.jpg"
},
{
  name: "Anirudh_Ravichander_-_Yelo_Pullelo.mp3",
  title: "Anirudh Ravichander - Yelo Pullelo",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Yelo_Pullelo.jpg"
},
{
  name: "Anirudh_Ravichander_-_Dharala_Prabhu_(Title_Track).mp3",
  title: "Anirudh Ravichander - Dharala Prabhu (Title Track)",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Dharala_Prabhu_(Title_Track).jpg"
},
{
  name: "Anirudh_Ravichander_-_Vaathi_Raid.mp3",
  title: "Anirudh Ravichander - Vaathi Raid",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Vaathi_Raid.jpg"
},
{
  name: "Anirudh_Ravichander_-_Tamizhan_Endru_Sollada.mp3",
  title: "Anirudh Ravichander - Tamizhan Endru Sollada",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Tamizhan_Endru_Sollada.jpg"
},
{
  name: "Anirudh_Ravichander_-_Chellamma.mp3",
  title: "Anirudh Ravichander - Chellamma",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Chellamma.jpg"
},
{
  name: "Anirudh_Ravichander_-_Nenjame_Nenjame.mp3",
  title: "Anirudh Ravichander - Nenjame Nenjame",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Nenjame_Nenjame.jpg"
},
{
  name: "Anirudh_Ravichander_-_So_Baby.mp3",
  title: "Anirudh Ravichander - So Baby",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_So_Baby.jpg"
},
{
  name: "Anirudh_Ravichander_-_Beast_Mode.mp3",
  title: "Anirudh Ravichander - Beast Mode",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Beast_Mode.jpg"
},
{
  name: "Anirudh_Ravichander_-_Dippam_Dappam.mp3",
  title: "Anirudh Ravichander - Dippam Dappam",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Dippam_Dappam.jpg"
},
{
  name: "Anirudh_Ravichander_-_Kanne_Kanmaniyae.mp3",
  title: "Anirudh Ravichander - Kanne Kanmaniyae",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Kanne_Kanmaniyae.jpg"
},
{
  name: "Anirudh_Ravichander_-_Rendu_Kaadhal.mp3",
  title: "Anirudh Ravichander - Rendu Kaadhal",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Rendu_Kaadhal.jpg"
},
{
  name: "Anirudh_Ravichander_-_Two_Two_Two.mp3",
  title: "Anirudh Ravichander - Two Two Two",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Two_Two_Two.jpg"
},
{
  name: "Anirudh_Ravichander_-_Jalabulajangu.mp3",
  title: "Anirudh Ravichander - Jalabulajangu",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Jalabulajangu.jpg"
},
{
  name: "Anirudh_Ravichander_-_Once_Upon_A_Time.mp3",
  title: "Anirudh Ravichander - Once Upon A Time",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Once_Upon_A_Time.jpg"
},
{
  name: "Anirudh_Ravichander_-_Porkanda_Singam.mp3",
  title: "Anirudh Ravichander - Porkanda Singam",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Porkanda_Singam.jpg"
},
{
  name: "Anirudh_Ravichander_-_Vikram_Title_Song.mp3",
  title: "Anirudh Ravichander - Vikram Title Song",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Vikram_Title_Song.webp"
},
{
  name: "Anirudh_Ravichander_-_Wasted.mp3",
  title: "Anirudh Ravichander - Wasted",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Wasted.jpg"
},
{
  name: "Anirudh_Ravichander_-_Hukum_–_Thalaivar_Alappara.mp3",
  title: "Anirudh Ravichander - Hukum – Thalaivar Alappara",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Hukum_–_Thalaivar_Alappara.jpg"
},
{
  name: "Anirudh_Ravichander_-_Anbenum.mp3",
  title: "Anirudh Ravichander - Anbenum",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Anbenum.jpg"
},
{
  name: "Anirudh_Ravichander_-_Badass.mp3",
  title: "Anirudh Ravichander - Badass",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Badass.jpg"
},
{
  name: "Anirudh_Ravichander_-_Bloody_Sweet.mp3",
  title: "Anirudh Ravichander - Bloody Sweet",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Bloody_Sweet.jpg"
},
{
  name: "Anirudh_Ravichander_-_I’m_Scared.mp3",
  title: "Anirudh Ravichander - I’m Scared",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_I’m_Scared.jpg"
},
{
  name: "Anirudh_Ravichander_-_Lokiverse_2.0.mp3",
  title: "Anirudh Ravichander - Lokiverse 2.0",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Lokiverse_2.0.jpg"
},
{
  name: "Anirudh_Ravichander_-_Villain_Yaaru.mp3",
  title: "Anirudh Ravichander - Villain Yaaru",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Villain_Yaaru.jpg"
},
{
  name: "Anirudh_Ravichander_-_Come_Back_Indian.mp3",
  title: "Anirudh Ravichander - Come Back Indian",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Come_Back_Indian.jpg"
},
{
  name: "Anirudh_Ravichander_-_Kadharalz.mp3",
  title: "Anirudh Ravichander - Kadharalz",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Kadharalz.jpg"
},
{
  name: "Anirudh_Ravichander_-_Paaraa.mp3",
  title: "Anirudh Ravichander - Paaraa",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Paaraa.webp"
},
{
  name: "Anirudh_Ravichander_-_Fear_Song.mp3",
  title: "Anirudh Ravichander - Fear Song",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Fear_Song.jpg"
},
{
  name: "Anirudh_Ravichander_-_Manasilaayo.mp3",
  title: "Anirudh Ravichander - Manasilaayo",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Manasilaayo.jpg"
},
{
  name: "Anirudh_Ravichander_-_Chuttamalle.mp3",
  title: "Anirudh Ravichander - Chuttamalle",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Chuttamalle.jpg"
},
{
  name: "Anirudh_Ravichander_-_Kaavaalaa.mp3",
  title: "Anirudh Ravichander - Kaavaalaa",
  artist: "Artist: Unknown",
  cover: "covers/Anirudh_Ravichander_-_Kaavaalaa.jpg"
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