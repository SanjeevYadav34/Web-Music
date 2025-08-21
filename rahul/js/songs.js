const songs = [
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