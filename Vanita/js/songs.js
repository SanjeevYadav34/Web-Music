const songs = [
{
  name: "Darkhaast_-_Mithoon,_Arijit_Singh,_Sunidhi_Chauhan.mp3",
  title: "Darkhaast - Mithoon, Arijit Singh, Sunidhi Chauhan",
  artist: "Artist: Unknown",
  cover: "covers/Darkhaast_-_Mithoon,_Arijit_Singh,_Sunidhi_Chauhan.jpg"
},
{
  name: "Khoya_Khoya_-_Sachin-Jigar,_Mohit_Chauhan,_Priya_S..mp3",
  title: "Khoya Khoya - Sachin-Jigar, Mohit Chauhan, Priya S.",
  artist: "Artist: Unknown",
  cover: "covers/Khoya_Khoya_-_Sachin-Jigar,_Mohit_Chauhan,_Priya_S..jpg"
},
{
  name: "Khwab_-_Iqlipse_Nova,_Aditya_A.mp3",
  title: "Khwab - Iqlipse Nova, Aditya A",
  artist: "Artist: Unknown",
  cover: "covers/Khwab_-_Iqlipse_Nova,_Aditya_A.jpg"
},
{
  name: "I_Am_In_Love_-_Pritam,_KK,_Dominique,_Neelesh_Misra.mp3",
  title: "I Am In Love - Pritam, KK, Dominique, Neelesh Misra",
  artist: "Artist: Unknown",
  cover: "covers/I_Am_In_Love_-_Pritam,_KK,_Dominique,_Neelesh_Misra.jpg"
},
{
  name: "Ik_Vaari_Aa_-_Pritam,_Arijit_Singh,_Amitabh_Bhattacharya.mp3",
  title: "Ik Vaari Aa - Pritam, Arijit Singh, Amitabh Bhattacharya",
  artist: "Artist: Unknown",
  cover: "covers/Ik_Vaari_Aa_-_Pritam,_Arijit_Singh,_Amitabh_Bhattacharya.jpg"
},
{
  name: "Dildaara_(Stand_By_Me)_-_Vishal-Shekhar,_Shafqat_Amanat_Ali.mp3",
  title: "Dildaara (Stand By Me) - Vishal-Shekhar, Shafqat Amanat Ali",
  artist: "Artist: Unknown",
  cover: "covers/Dildaara_(Stand_By_Me)_-_Vishal-Shekhar,_Shafqat_Amanat_Ali.jpg"
},
{
  name: "Dil_Na_Jaaneya_-_Rochak_Kohli,_AKASA,_Lauv.mp3",
  title: "Dil Na Jaaneya - Rochak Kohli, AKASA, Lauv",
  artist: "Artist: Unknown",
  cover: "covers/Dil_Na_Jaaneya_-_Rochak_Kohli,_AKASA,_Lauv.jpg"
},
{
  name: "Tumse_Hi_Tumse_-_Vishal-Shekhar,_Shekhar_Ravjiani,_Caralisa.mp3",
  title: "Tumse Hi Tumse - Vishal-Shekhar, Shekhar Ravjiani, Caralisa",
  artist: "Artist: Unknown",
  cover: "covers/Tumse_Hi_Tumse_-_Vishal-Shekhar,_Shekhar_Ravjiani,_Caralisa.jpg"
},
{
  name: "Ajab_Leher_-_Vishal-Shekhar,_Neeraj_Shridhar.mp3",
  title: "Ajab Leher - Vishal-Shekhar, Neeraj Shridhar",
  artist: "Artist: Unknown",
  cover: "covers/Ajab_Leher_-_Vishal-Shekhar,_Neeraj_Shridhar.jpg"
},
{
  name: "Khabar_Nahi_-_Vishal-Shekhar,_Shreya_Ghoshal.mp3",
  title: "Khabar Nahi - Vishal-Shekhar, Shreya Ghoshal",
  artist: "Artist: Unknown",
  cover: "covers/Khabar_Nahi_-_Vishal-Shekhar,_Shreya_Ghoshal.jpg"
},
{
  name: "Pee_Loon_-_Pritam,_Mohit_Chauhan,_Irshad_Kamil.mp3",
  title: "Pee Loon - Pritam, Mohit Chauhan, Irshad Kamil",
  artist: "Artist: Unknown",
  cover: "covers/Pee_Loon_-_Pritam,_Mohit_Chauhan,_Irshad_Kamil.jpg"
},
{
  name: "Lamhey_-_Anubha_Bajaj.mp3",
  title: "Lamhey - Anubha Bajaj",
  artist: "Artist: Unknown",
  cover: "covers/Lamhey_-_Anubha_Bajaj.jpg"
},
{
  name: "IRAADAY_-_ZAYEM.mp3",
  title: "IRAADAY - ZAYEM",
  artist: "Artist: Unknown",
  cover: "covers/IRAADAY_-_ZAYEM.jpg"
},
{
  name: "Tere_Bina_-_Zaeden.mp3",
  title: "Tere Bina - Zaeden",
  artist: "Artist: Unknown",
  cover: "covers/Tere_Bina_-_Zaeden.jpg"
},
{
  name: "Sajde_-_Pritam,_KK,_Sunidhi_Chauhan.mp3",
  title: "Sajde - Pritam, KK, Sunidhi Chauhan",
  artist: "Artist: Unknown",
  cover: "covers/Sajde_-_Pritam,_KK,_Sunidhi_Chauhan.jpg"
},
{
  name: "Sajde_-_Shankar-Ehsaan-Loy,_Arijit_Singh,_Nihira_Joshi.mp3",
  title: "Sajde - Shankar-Ehsaan-Loy, Arijit Singh, Nihira Joshi",
  artist: "Artist: Unknown",
  cover: "covers/Sajde_-_Shankar-Ehsaan-Loy,_Arijit_Singh,_Nihira_Joshi.jpg"
},
{
  name: "Oh_Girl_You’re_Mine_-_Tarun_Sagar,_Alyssa_Mendonsa,_Loy_Mendonsa.mp3",
  title: "Oh Girl You’re Mine - Tarun Sagar, Alyssa Mendonsa, Loy Mendonsa",
  artist: "Artist: Unknown",
  cover: "covers/Oh_Girl_You’re_Mine_-_Tarun_Sagar,_Alyssa_Mendonsa,_Loy_Mendonsa.jpg"
},
{
  name: "Caller_Tune_-_Neeraj_Shridhar,_Neeti_Mohan.mp3",
  title: "Caller Tune - Neeraj Shridhar, Neeti Mohan",
  artist: "Artist: Unknown",
  cover: "covers/Caller_Tune_-_Neeraj_Shridhar,_Neeti_Mohan.jpg"
},
{
  name: "You_Get_Me_Rockin_&_Reeling_-_Pritam,_Neeraj_Shridhar.mp3",
  title: "You Get Me Rockin & Reeling - Pritam, Neeraj Shridhar",
  artist: "Artist: Unknown",
  cover: "covers/You_Get_Me_Rockin_&_Reeling_-_Pritam,_Neeraj_Shridhar.jpg"
}
];