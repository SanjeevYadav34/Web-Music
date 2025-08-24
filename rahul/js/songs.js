const songs = [
{
  name: "Sajde_(From_Lost;Found).mp3",
  title: "Sajde (From Lost",
  artist: "Artist: Unknown",
  cover: "covers/Sajde_(From_Lost;Found).jpg"
},
{
  name: "Jeev_Pisatala_-_Partu_|_Saurabh_Gokhale,_Gayatri_Soham.mp3",
  title: "Jeev Pisatala - Partu | Saurabh Gokhale, Gayatri Soham",
  artist: "Artist: Unknown",
  cover: "covers/Jeev_Pisatala_-_Partu_|_Saurabh_Gokhale,_Gayatri_Soham.jpg"
},
{
  name: "Aatach_Baya_Ka_Baavarla_-_Sairat_|_Ajay_Atul_|_Nagraj_Popatrao_Manjule.mp3",
  title: "Aatach Baya Ka Baavarla - Sairat | Ajay Atul | Nagraj Popatrao Manjule",
  artist: "Artist: Unknown",
  cover: "covers/Aatach_Baya_Ka_Baavarla_-_Sairat_|_Ajay_Atul_|_Nagraj_Popatrao_Manjule.jpg"
},
{
  name: "Kaakan_-_Shankar_Mahadevan_|_Jitendra_Joshi,_Urmila_Kothare.mp3",
  title: "Kaakan - Shankar Mahadevan | Jitendra Joshi, Urmila Kothare",
  artist: "Artist: Unknown",
  cover: "covers/Kaakan_-_Shankar_Mahadevan_|_Jitendra_Joshi,_Urmila_Kothare.jpg"
},
{
  name: "Mala_Ved_Laagale_(Duet)_-_Sairat.mp3",
  title: "Mala Ved Laagale (Duet) - Sairat",
  artist: "Artist: Unknown",
  cover: "covers/Mala_Ved_Laagale_(Duet)_-_Sairat.jpg"
},
{
  name: "Pailwaan_Ala_G_Pailwaan_Ala_-_DJ_Kiran_NG_Kolhapur.mp3",
  title: "Pailwaan Ala G Pailwaan Ala - DJ Kiran NG Kolhapur",
  artist: "Artist: Unknown",
  cover: "covers/Pailwaan_Ala_G_Pailwaan_Ala_-_DJ_Kiran_NG_Kolhapur.jpg"
},
{
  name: "Gharwani_Vagu_Nako_-_Soundcheck_Mix_(DJ_Song).mp3",
  title: "Gharwani Vagu Nako - Soundcheck Mix (DJ Song)",
  artist: "Artist: Unknown",
  cover: "covers/Gharwani_Vagu_Nako_-_Soundcheck_Mix_(DJ_Song).jpg"
},
{
  name: "Mi_Ekta_Bas_-_Tirth_Shinde_|_DJ_Aniket_&_Nagesh_Soundcheck.mp3",
  title: "Mi Ekta Bas - Tirth Shinde | DJ Aniket & Nagesh Soundcheck",
  artist: "Artist: Unknown",
  cover: "covers/Mi_Ekta_Bas_-_Tirth_Shinde_|_DJ_Aniket_&_Nagesh_Soundcheck.jpg"
},
{
  name: "Bhalya_Bhalyana_Jaun_Vichar_Fakt_Maz_Nav_-_DJ_Sushant_Soundane.mp3",
  title: "Bhalya Bhalyana Jaun Vichar Fakt Maz Nav - DJ Sushant Soundane",
  artist: "Artist: Unknown",
  cover: "covers/Bhalya_Bhalyana_Jaun_Vichar_Fakt_Maz_Nav_-_DJ_Sushant_Soundane.jpg"
},
{
  name: "Turururu_Chalu_Nako.mp3",
  title: "Turururu Chalu Nako",
  artist: "Artist: Unknown",
  cover: "covers/Turururu_Chalu_Nako.jpg"
},
{
  name: "Aase_Wajwa_Ki_-_Dholki_|_Siddharth_Jadhav,_Manasi_Naik.mp3",
  title: "Aase Wajwa Ki - Dholki | Siddharth Jadhav, Manasi Naik",
  artist: "Artist: Unknown",
  cover: "covers/Aase_Wajwa_Ki_-_Dholki_|_Siddharth_Jadhav,_Manasi_Naik.jpg"
},
{
  name: "Sajna_Hai_Mujhe_-_Vaishali_Samant_|_Sagarika_Music.mp3",
  title: "Sajna Hai Mujhe - Vaishali Samant | Sagarika Music",
  artist: "Artist: Unknown",
  cover: "covers/Sajna_Hai_Mujhe_-_Vaishali_Samant_|_Sagarika_Music.jpg"
},
{
  name: "Mazya_Dolyatil_Kajal_Express_To_Impress.mp3",
  title: "Mazya Dolyatil Kajal Express To Impress",
  artist: "Artist: Unknown",
  cover: "covers/Mazya_Dolyatil_Kajal_Express_To_Impress.jpg"
},
{
  name: "Gondhal_-_Jaundya_Na_Balasaheb_|_Ajay_Atul.mp3",
  title: "Gondhal - Jaundya Na Balasaheb | Ajay Atul",
  artist: "Artist: Unknown",
  cover: "covers/Gondhal_-_Jaundya_Na_Balasaheb_|_Ajay_Atul.jpg"
},
{
  name: "Ishakacha_Baan_-_Taleem_|_Ronkini_Gupta,_Swapnil_Godbole.mp3",
  title: "Ishakacha Baan - Taleem | Ronkini Gupta, Swapnil Godbole",
  artist: "Artist: Unknown",
  cover: "covers/Ishakacha_Baan_-_Taleem_|_Ronkini_Gupta,_Swapnil_Godbole.jpg"
},
{
  name: "Email_Kal_Internet_Var_Kela_-_Morya_|_Lavani_Song.mp3",
  title: "Email Kal Internet Var Kela - Morya | Lavani Song",
  artist: "Artist: Unknown",
  cover: "covers/Email_Kal_Internet_Var_Kela_-_Morya_|_Lavani_Song.jpg"
},
{
  name: "Baya_-_Maska_|_Chinar-Mahesh_|_Prarthana_Behere.mp3",
  title: "Baya - Maska | Chinar-Mahesh | Prarthana Behere",
  artist: "Artist: Unknown",
  cover: "covers/Baya_-_Maska_|_Chinar-Mahesh_|_Prarthana_Behere.jpg"
},
{
  name: "Jailer_-_Hukum_|_Rajinikanth_|_Anirudh_Ravichander.mp3",
  title: "Jailer - Hukum | Rajinikanth | Anirudh Ravichander",
  artist: "Artist: Unknown",
  cover: "covers/Jailer_-_Hukum_|_Rajinikanth_|_Anirudh_Ravichander.jpg"
},
{
  name: "Biba_Sada_(From_Abdullahpur_Ka_Devdas).mp3",
  title: "Biba Sada (From Abdullahpur",
  artist: "Artist: Unknown",
  cover: "covers/Biba_Sada_(From_Abdullahpur_Ka_Devdas).jpg"
},
{
  name: "Paaro.mp3",
  title: "Paaro",
  artist: "Artist: Unknown",
  cover: "covers/Paaro.jpg"
}
];