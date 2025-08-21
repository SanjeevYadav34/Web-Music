const songs = [
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
}
];