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
},
{
  name: "O_Makhna_Ve_-_Taarzan_The_Wonder_Car_(2004)_StarGOLDHD_HDTV_1080p.mp3",
  title: "O Makhna Ve - Taarzan The Wonder Car (2004) StarGOLDHD HDTV 1080p",
  artist: "Artist: Unknown",
  cover: "covers/O_Makhna_Ve_-_Taarzan_The_Wonder_Car_(2004)_StarGOLDHD_HDTV_1080p.jpg"
},
{
  name: "Kabhi_Aar_Kabhi_Paar_-_Remix_|_Full_Video_Song_|_Sona_Mahapatra_|_Majrooh.mp3",
  title: "Kabhi Aar Kabhi Paar - Remix | Full Video Song | Sona Mahapatra | Majrooh",
  artist: "Artist: Unknown",
  cover: "covers/Kabhi_Aar_Kabhi_Paar_-_Remix_|_Full_Video_Song_|_Sona_Mahapatra_|_Majrooh.jpg"
},
{
  name: "Dekhta_Hai_Tu_Kya_(Full_Song)_Film_-_Krazzy-4.mp3",
  title: "Dekhta Hai Tu Kya (Full Song) Film - Krazzy-4",
  artist: "Artist: Unknown",
  cover: "covers/Dekhta_Hai_Tu_Kya_(Full_Song)_Film_-_Krazzy-4.jpg"
},
{
  name: "Gazab_(Video_Song)_|_Aa_Dekhen_Zara_|_Bipasha_Basu_&_Neil_Nitin_Mukesh_|_Pritam.mp3",
  title: "Gazab (Video Song) | Aa Dekhen Zara | Bipasha Basu & Neil Nitin Mukesh | Pritam",
  artist: "Artist: Unknown",
  cover: "covers/Gazab_(Video_Song)_|_Aa_Dekhen_Zara_|_Bipasha_Basu_&_Neil_Nitin_Mukesh_|_Pritam.jpg"
},
{
  name: "Harry_Anand_-_Kaliyon_Ka_Chaman_(Official_Video).mp3",
  title: "Harry Anand - Kaliyon Ka Chaman (Official Video)",
  artist: "Artist: Unknown",
  cover: "covers/Harry_Anand_-_Kaliyon_Ka_Chaman_(Official_Video).jpg"
},
{
  name: "Lagan_Lagi_Lyrical_Video_|_Tere_Naam_|_Sukhwinder_Singh_|_Salman_Khan,_Bhoomika_Chawla.mp3",
  title: "Lagan Lagi Lyrical Video | Tere Naam | Sukhwinder Singh | Salman Khan, Bhoomika Chawla",
  artist: "Artist: Unknown",
  cover: "covers/Lagan_Lagi_Lyrical_Video_|_Tere_Naam_|_Sukhwinder_Singh_|_Salman_Khan,_Bhoomika_Chawla.jpg"
},
{
  name: "Namak_(Lyrical_Full_Song)_|_Omkara_|_Bipasha_Basu_&_Saif_Ali_Khan.mp3",
  title: "Namak (Lyrical Full Song) | Omkara | Bipasha Basu & Saif Ali Khan",
  artist: "Artist: Unknown",
  cover: "covers/Namak_(Lyrical_Full_Song)_|_Omkara_|_Bipasha_Basu_&_Saif_Ali_Khan.jpg"
},
{
  name: "Dhat_Teri_Ki_Full_Video_-_Gori_Tere_Pyaar_Mein_|_Imran_Khan,_Esha_Gupta_|_Aditi_Singh_Sharma.mp3",
  title: "Dhat Teri Ki Full Video - Gori Tere Pyaar Mein | Imran Khan, Esha Gupta | Aditi Singh Sharma",
  artist: "Artist: Unknown",
  cover: "covers/Dhat_Teri_Ki_Full_Video_-_Gori_Tere_Pyaar_Mein_|_Imran_Khan,_Esha_Gupta_|_Aditi_Singh_Sharma.jpg"
},
{
  name: "Mere_Naseeb_Mein_(Remix)_-_Baby_H_|_Prem_&_Hardeep_|_Megha_Chatterji.mp3",
  title: "Mere Naseeb Mein (Remix) - Baby H | Prem & Hardeep | Megha Chatterji",
  artist: "Artist: Unknown",
  cover: "covers/Mere_Naseeb_Mein_(Remix)_-_Baby_H_|_Prem_&_Hardeep_|_Megha_Chatterji.jpg"
},
{
  name: "Piya_Aaye_Na_|_Aashiqui_2_Full_Song_|_Aditya_Roy_Kapur,_Shraddha_Kapoor.mp3",
  title: "Piya Aaye Na | Aashiqui 2 Full Song | Aditya Roy Kapur, Shraddha Kapoor",
  artist: "Artist: Unknown",
  cover: "covers/Piya_Aaye_Na_|_Aashiqui_2_Full_Song_|_Aditya_Roy_Kapur,_Shraddha_Kapoor.jpg"
},
{
  name: "Malang_Song_|_Dhoom_3_|_Aamir_Khan,_Katrina_Kaif_|_Siddharth_Mahadevan,_Shilpa_Rao_|_Pritam,_Sameer.mp3",
  title: "Malang Song | Dhoom 3 | Aamir Khan, Katrina Kaif | Siddharth Mahadevan, Shilpa Rao | Pritam, Sameer",
  artist: "Artist: Unknown",
  cover: "covers/Malang_Song_|_Dhoom_3_|_Aamir_Khan,_Katrina_Kaif_|_Siddharth_Mahadevan,_Shilpa_Rao_|_Pritam,_Sameer.jpg"
},
{
  name: "Maula_Mere_Maula_|_Anwar_(2007)_|_Siddharth_Koirala_|_Nauheed_Cyrusi.mp3",
  title: "Maula Mere Maula | Anwar (2007) | Siddharth Koirala | Nauheed Cyrusi",
  artist: "Artist: Unknown",
  cover: "covers/Maula_Mere_Maula_|_Anwar_(2007)_|_Siddharth_Koirala_|_Nauheed_Cyrusi.jpg"
},
{
  name: "Crazy_Kiya_Re_|_Dhoom_2_|_Aishwarya_Rai,_Hrithik_Roshan,_Sunidhi_Chauhan_|_Pritam,_Sameer.mp3",
  title: "Crazy Kiya Re | Dhoom 2 | Aishwarya Rai, Hrithik Roshan, Sunidhi Chauhan | Pritam, Sameer",
  artist: "Artist: Unknown",
  cover: "covers/Crazy_Kiya_Re_|_Dhoom_2_|_Aishwarya_Rai,_Hrithik_Roshan,_Sunidhi_Chauhan_|_Pritam,_Sameer.jpg"
},
{
  name: "Tu_Isaq_Mera_|_Hate_Story_2015_|_Daisy_Shah,_Karan_Singh_Grover_|_Neha_Kakkar.mp3",
  title: "Tu Isaq Mera | Hate Story 2015 | Daisy Shah, Karan Singh Grover | Neha Kakkar",
  artist: "Artist: Unknown",
  cover: "covers/Tu_Isaq_Mera_|_Hate_Story_2015_|_Daisy_Shah,_Karan_Singh_Grover_|_Neha_Kakkar.jpg"
},
{
  name: "Ye_Naa_Gade_|_Hunterrr_|_Gulshan_Devaiah,_Radhika_Apte_&_Sai_Tamhankar.mp3",
  title: "Ye Naa Gade | Hunterrr | Gulshan Devaiah, Radhika Apte & Sai Tamhankar",
  artist: "Artist: Unknown",
  cover: "covers/Ye_Naa_Gade_|_Hunterrr_|_Gulshan_Devaiah,_Radhika_Apte_&_Sai_Tamhankar.jpg"
},
{
  name: "Kaanta_Laga_Baby_Doll_2002.mp3",
  title: "Kaanta Laga Baby Doll 2002",
  artist: "Artist: Unknown",
  cover: "covers/Kaanta_Laga_Baby_Doll_2002.jpg"
},
{
  name: "Daru_Desi_|_Cocktail_|_Saif_Ali_Khan,_Deepika_Padukone_&_Diana_Penty_|_Pritam.mp3",
  title: "Daru Desi | Cocktail | Saif Ali Khan, Deepika Padukone & Diana Penty | Pritam",
  artist: "Artist: Unknown",
  cover: "covers/Daru_Desi_|_Cocktail_|_Saif_Ali_Khan,_Deepika_Padukone_&_Diana_Penty_|_Pritam.jpg"
},
{
  name: "Dhan_Te_Nan_|_Kaminey_|_Shahid_Kapoor,_Priyanka_Chopra_|_Vishal_Bharadwaj.mp3",
  title: "Dhan Te Nan | Kaminey | Shahid Kapoor, Priyanka Chopra | Vishal Bharadwaj",
  artist: "Artist: Unknown",
  cover: "covers/Dhan_Te_Nan_|_Kaminey_|_Shahid_Kapoor,_Priyanka_Chopra_|_Vishal_Bharadwaj.jpg"
},
{
  name: "Galavar_Khali_Lyrics_Video_|_Swapnil_Bandodkar_|_Ajay_Atul_|_Sagarika_(Marathi).mp3",
  title: "Galavar Khali Lyrics Video | Swapnil Bandodkar | Ajay Atul | Sagarika (Marathi)",
  artist: "Artist: Unknown",
  cover: "covers/Galavar_Khali_Lyrics_Video_|_Swapnil_Bandodkar_|_Ajay_Atul_|_Sagarika_(Marathi).jpg"
},
{
  name: "Manchala_|_Hasee_Toh_Phasee_|_Parineeti_Chopra,_Sidharth_|_Shafqat_Amanat_Ali.mp3",
  title: "Manchala | Hasee Toh Phasee | Parineeti Chopra, Sidharth | Shafqat Amanat Ali",
  artist: "Artist: Unknown",
  cover: "covers/Manchala_|_Hasee_Toh_Phasee_|_Parineeti_Chopra,_Sidharth_|_Shafqat_Amanat_Ali.jpg"
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