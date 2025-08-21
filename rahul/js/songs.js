const songs = [
{
  name: "Kinna_Sona_|_Bhaag_Johnny_|_Kunal_Khemu,_Zoa_Morani_|_Sunil_Kamath.mp3",
  title: "Kinna Sona | Bhaag Johnny | Kunal Khemu, Zoa Morani | Sunil Kamath",
  artist: "Artist: Unknown",
  cover: "covers/Kinna_Sona_|_Bhaag_Johnny_|_Kunal_Khemu,_Zoa_Morani_|_Sunil_Kamath.jpg"
},
{
  name: "Guzarish_-_Trending_Version_|_Aamir_Khan_|_Asin_|_Ghajini_|_A.R._Rahman_|_Javed_Ali,_Sonu_Nigam.mp3",
  title: "Guzarish - Trending Version | Aamir Khan | Asin | Ghajini | A.R. Rahman | Javed Ali, Sonu Nigam",
  artist: "Artist: Unknown",
  cover: "covers/Guzarish_-_Trending_Version_|_Aamir_Khan_|_Asin_|_Ghajini_|_A.R._Rahman_|_Javed_Ali,_Sonu_Nigam.jpg"
},
{
  name: "Emraan_Hashmi_-_Woh_Lamhe_Woh_Baatein_|_Zeher_|_Atif_Aslam.mp3",
  title: "Emraan Hashmi - Woh Lamhe Woh Baatein | Zeher | Atif Aslam",
  artist: "Artist: Unknown",
  cover: "covers/Emraan_Hashmi_-_Woh_Lamhe_Woh_Baatein_|_Zeher_|_Atif_Aslam.jpg"
},
{
  name: "Cham_Cham_Karta_|_Ajay_Atul_|_Vaishali_Samant_|_Sonali_Bendre.mp3",
  title: "Cham Cham Karta | Ajay Atul | Vaishali Samant | Sonali Bendre",
  artist: "Artist: Unknown",
  cover: "covers/Cham_Cham_Karta_|_Ajay_Atul_|_Vaishali_Samant_|_Sonali_Bendre.jpg"
},
{
  name: "Ye_Go_Ye_Ye_Maina_|_Jatra_|_Ajay-Atul_|_Ankush_Chaudhari,_Bharat_Jadhav_(Marathi).mp3",
  title: "Ye Go Ye Ye Maina | Jatra | Ajay-Atul | Ankush Chaudhari, Bharat Jadhav (Marathi)",
  artist: "Artist: Unknown",
  cover: "covers/Ye_Go_Ye_Ye_Maina_|_Jatra_|_Ajay-Atul_|_Ankush_Chaudhari,_Bharat_Jadhav_(Marathi).jpg"
},
{
  name: "Ishq_Sufiyana_|_The_Dirty_Picture_|_Emraan_Hashmi,_Vidya_Balan_|_Vishal_-_Shekhar.mp3",
  title: "Ishq Sufiyana | The Dirty Picture | Emraan Hashmi, Vidya Balan | Vishal - Shekhar",
  artist: "Artist: Unknown",
  cover: "covers/Ishq_Sufiyana_|_The_Dirty_Picture_|_Emraan_Hashmi,_Vidya_Balan_|_Vishal_-_Shekhar.jpg"
},
{
  name: "Kamli_Song_|_Dhoom_3_|_Katrina_Kaif,_Aamir_Khan_|_Sunidhi_Chauhan_|_Pritam.mp3",
  title: "Kamli Song | Dhoom 3 | Katrina Kaif, Aamir Khan | Sunidhi Chauhan | Pritam",
  artist: "Artist: Unknown",
  cover: "covers/Kamli_Song_|_Dhoom_3_|_Katrina_Kaif,_Aamir_Khan_|_Sunidhi_Chauhan_|_Pritam.jpg"
},
{
  name: "Dil_Tera_De_De_Mujhe_Mera_Dadla_|_Vaishali_Samant.mp3",
  title: "Dil Tera De De Mujhe Mera Dadla | Vaishali Samant",
  artist: "Artist: Unknown",
  cover: "covers/Dil_Tera_De_De_Mujhe_Mera_Dadla_|_Vaishali_Samant.jpg"
},
{
  name: "Dil_To_Bachcha_Hai.mp3",
  title: "Dil To Bachcha Hai",
  artist: "Artist: Unknown",
  cover: "covers/Dil_To_Bachcha_Hai.jpg"
},
{
  name: "Prateek_Kuhad_-_Co2_(Official_Audio).mp3",
  title: "Prateek Kuhad - Co2 (Official Audio)",
  artist: "Artist: Unknown",
  cover: "covers/Prateek_Kuhad_-_Co2_(Official_Audio).jpg"
},
{
  name: "Aa_Zara_|_Murder_2_|_Emraan_Hashmi,_Jacqueline_Fernandez.mp3",
  title: "Aa Zara | Murder 2 | Emraan Hashmi, Jacqueline Fernandez",
  artist: "Artist: Unknown",
  cover: "covers/Aa_Zara_|_Murder_2_|_Emraan_Hashmi,_Jacqueline_Fernandez.jpg"
},
{
  name: "Rooh_|_Tere_Bina_Jeena_Saza_Ho_Gaya_|_Tej_Gill_|_Moviebox.mp3",
  title: "Rooh | Tere Bina Jeena Saza Ho Gaya | Tej Gill | Moviebox",
  artist: "Artist: Unknown",
  cover: "covers/Rooh_|_Tere_Bina_Jeena_Saza_Ho_Gaya_|_Tej_Gill_|_Moviebox.jpg"
},
{
  name: "Dil_Maaza_Wonly_Tula_(Marathi).mp3",
  title: "Dil Maaza Wonly Tula (Marathi)",
  artist: "Artist: Unknown",
  cover: "covers/Dil_Maaza_Wonly_Tula_(Marathi).jpg"
},
{
  name: "Kuch_Khaas_|_Fashion_|_Priyanka_Chopra,_Kangna_Ranawat_|_Mohit_Chauhan,_Neha_Bhasin.mp3",
  title: "Kuch Khaas | Fashion | Priyanka Chopra, Kangna Ranawat | Mohit Chauhan, Neha Bhasin",
  artist: "Artist: Unknown",
  cover: "covers/Kuch_Khaas_|_Fashion_|_Priyanka_Chopra,_Kangna_Ranawat_|_Mohit_Chauhan,_Neha_Bhasin.jpg"
},
{
  name: "Sad_Girls_Love_Money_(Remix)_|_TikTok_Version.mp3",
  title: "Sad Girls Love Money (Remix) | TikTok Version",
  artist: "Artist: Unknown",
  cover: "covers/Sad_Girls_Love_Money_(Remix)_|_TikTok_Version.jpg"
},
{
  name: "Doja_Cat_-_Woman_(Official_Video).mp3",
  title: "Doja Cat - Woman (Official Video)",
  artist: "Artist: Unknown",
  cover: "covers/Doja_Cat_-_Woman_(Official_Video).jpg"
},
{
  name: "Melanie_Martinez_-_Play_Date_[Official_Lyric_Video].mp3",
  title: "Melanie Martinez - Play Date [Official Lyric Video]",
  artist: "Artist: Unknown",
  cover: "covers/Melanie_Martinez_-_Play_Date_[Official_Lyric_Video].jpg"
},
{
  name: "Glass_Animals_-_Heat_Waves_(Official_Video).mp3",
  title: "Glass Animals - Heat Waves (Official Video)",
  artist: "Artist: Unknown",
  cover: "covers/Glass_Animals_-_Heat_Waves_(Official_Video).jpg"
},
{
  name: "Jaymes_Young_-_Infinity_[Official_Audio].mp3",
  title: "Jaymes Young - Infinity [Official Audio]",
  artist: "Artist: Unknown",
  cover: "covers/Jaymes_Young_-_Infinity_[Official_Audio].jpg"
},
{
  name: "G-Eazy_&_Halsey_-_Him_&_I_(Lyrics).mp3",
  title: "G-Eazy & Halsey - Him & I (Lyrics)",
  artist: "Artist: Unknown",
  cover: "covers/G-Eazy_&_Halsey_-_Him_&_I_(Lyrics).jpg"
}
];