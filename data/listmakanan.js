const makanan = [
  {
    id: '1',
    nama: 'Telur Dadar',
    harga: 5000,
    deskripsi: 'Telur dadar adalah hidangan sederhana yang terbuat dari telur yang dikocok dan digoreng menjadi dadar tipis. Telur dikocok hingga tercampur rata, lalu digoreng dalam minyak atau mentega hingga keemasan di kedua sisi. Telur dadar lezat, gurih, dan sering disajikan dengan nasi, roti, atau digunakan sebagai isian dalam sandwich. Bahan tambahan seperti keju, sayuran, atau daging dapat ditambahkan untuk variasi rasa. Telur dadar cocok sebagai hidangan sarapan, brunch, atau makanan ringan.',
    gambar: require('../assets/makanan/telordadar.jpg'),
  },
  {
    id: '2',
    nama: 'Usus',
    harga: 5000,
    deskripsi: 'Usus warteg adalah hidangan populer di warteg Indonesia. Usus sapi dipotong kecil, direbus, dan digoreng hingga empuk dan renyah. Biasanya disajikan dengan nasi putih dan lauk-pauk lainnya. Rasanya gurih, pedas, dan terjangkau harganya.',
    gambar: require('../assets/makanan/usus.jpg'),
  },
  {
    id: '3',
    nama: 'Kerang',
    harga: 5000,
    deskripsi: 'Makanan kerang adalah hidangan laut yang terbuat dari kerang yang dimasak dengan berbagai cara, seperti direbus, dikukus, dipanggang, atau digoreng. Kerang memiliki daging gurih dengan rasa yang sedikit manis dan tekstur kenyal. Hidangan kerang sering disajikan dengan saus atau bumbu untuk meningkatkan citarasa lautnya. Kerang merupakan favorit pecinta makanan laut dan sering menjadi hidangan utama dalam acara makan malam atau festival makanan laut.',
    gambar: require('../assets/makanan/kerang.jpg'),
  },
  {
    id: '4',
    nama: 'Kikil',
    harga: 4000,
    deskripsi: 'Makanan kikil adalah hidangan yang terbuat dari bagian kaki sapi yang diolah menjadi masakan lezat. Kikil memiliki tekstur yang kenyal dan empuk, sehingga memberikan pengalaman makan yang unik. Biasanya, kikil direbus terlebih dahulu hingga empuk, kemudian dimasak dengan bumbu dan rempah-rempah khas seperti santan, cabai, bawang, dan rempah lainnya. Hidangan kikil seringkali memiliki rasa gurih, pedas, dan kaya akan rempah. Kikil sering disajikan dengan nasi putih atau sebagai bagian dari hidangan berkuah seperti soto atau sup. Rasanya yang lezat dan teksturnya yang unik menjadikan kikil sebagai hidangan yang populer di beberapa negara dan menjadi favorit para pecinta masakan tradisional.',
    gambar: require('../assets/makanan/kikil.jpg'),
  },
  {
    id: '5',
    nama: 'Soto Ayam',
    harga: 10000,
    deskripsi: 'Soto ayam adalah hidangan sup ayam khas Indonesia yang populer. Hidangan ini terdiri dari potongan daging ayam yang dimasak dalam kuah kaldu ayam yang gurih. Kuah kaldu ayam yang kaya rasa ini biasanya diberi tambahan rempah-rempah seperti serai, daun jeruk, jahe, dan bawang putih. Soto ayam sering disajikan dengan nasi putih dan ditambahi dengan pelengkap seperti mie, tauge, daun seledri, irisan telur, dan bawang goreng. Rasanya yang hangat, gurih, dan nikmat membuat soto ayam menjadi hidangan favorit yang cocok disantap saat makan siang atau makan malam.',
    gambar: require('../assets/makanan/sotoayam.jpg'),
  },

  {
  id: '6',
  nama: 'Mie Goreng',
  harga: 12000,
  deskripsi: 'Mie goreng adalah hidangan mie yang dimasak dengan cara digoreng. Mie goreng biasanya terbuat dari mie kuning yang digoreng bersama dengan bumbu-bumbu seperti saus kecap, saus cabai, bawang putih, dan sayuran seperti wortel dan kubis. Beberapa variasi mie goreng juga ditambahi dengan daging, ayam, atau seafood. Rasanya yang gurih, pedas, dan sedikit manis membuat mie goreng menjadi hidangan favorit yang populer di banyak negara. Mie goreng sering disajikan sebagai makanan utama atau makanan ringan.',
  gambar: require('../assets/makanan/miegoreng.jpg'),
},
// {
//   id: '7',
//   nama: 'Nasi Goreng',
//   harga: 15000,
//   deskripsi: 'Nasi goreng adalah hidangan nasi yang dimasak dengan cara digoreng. Nasi goreng biasanya terbuat dari nasi putih yang digoreng bersama dengan bumbu-bumbu seperti saus kecap, saus cabai, bawang putih, dan sayuran seperti wortel dan kacang polong. Beberapa variasi nasi goreng juga ditambahi dengan daging, ayam, atau seafood. Rasanya yang gurih, sedikit pedas, dan sedikit manis membuat nasi goreng menjadi hidangan yang sangat populer di banyak negara. Nasi goreng sering disajikan sebagai makanan utama dalam hidangan prasmanan atau restoran dan juga sering dijadikan makanan yang mudah dan praktis.',
//   gambar: require('../assets/makanan/nasigoreng.jpg'),
// },
{
  id: '8',
  nama: 'Ayam Goreng',
  harga: 10000,
  deskripsi: 'Ayam goreng adalah hidangan ayam yang dimasak dengan cara digoreng hingga kulitnya renyah dan dagingnya matang sempurna. Ayam goreng biasanya dibumbui dengan rempah-rempah dan rempah khas seperti kunyit, bawang putih, jahe, dan ketumbar. Rasanya yang gurih, renyah, dan lezat membuat ayam goreng menjadi hidangan yang populer di banyak negara. Ayam goreng sering disajikan sebagai hidangan utama dengan nasi dan sayuran, dan juga sering menjadi pilihan dalam hidangan prasmanan atau restoran cepat saji.',
  gambar: require('../assets/makanan/ayamgoreng.jpg'),
},
// {
//   id: '9',
//   nama: 'Sate',
//   harga: 8000,
//   deskripsi: 'Sate adalah hidangan daging yang dipotong kecil-kecil dan ditusuk dengan tusukan bambu atau sate. Daging yang biasa digunakan untuk sate adalah daging sapi, daging ayam, atau daging kambing. Daging tersebut kemudian dibumbui dengan campuran bumbu rempah khas seperti kecap manis, bawang putih, jahe, dan kunyit. Sate biasanya dipanggang di atas bara api atau grill hingga matang dan memiliki aroma yang harum. Sate sering disajikan dengan bumbu kacang dan nasi atau lontong. Rasanya yang gurih, pedas, dan kaya rempah membuat sate menjadi hidangan yang populer di banyak negara.',
//   gambar: require('../assets/makanan/sate.jpg'),
// },
// {
//   id: '10',
//   nama: 'Bakso',
//   harga: 9000,
//   deskripsi: 'Bakso adalah hidangan bola daging yang terbuat dari campuran daging sapi giling, tepung tapioka, dan bumbu-bumbu seperti bawang putih, merica, dan garam. Bakso biasanya disajikan dalam kuah kaldu panas bersama dengan mie, tahu, pangsit, dan irisan daun seledri. Rasanya yang gurih, kenyal, dan lezat membuat bakso menjadi hidangan favorit yang populer di Indonesia. Bakso sering dijual di gerobak atau warung bakso dan bisa dinikmati sebagai makanan ringan atau makanan utama.',
//   gambar: require('../assets/makanan/bakso.jpg'),
// },
];

export default makanan;
