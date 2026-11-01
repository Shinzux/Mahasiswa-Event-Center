/* ==========================================================
   DATA EVENT
   Field:
   - id          : kode unik event
   - title       : nama event
   - category    : Perlombaan | Komunitas | Pengembangan Diri
   - organizer   : penyelenggara (HMSI / HMIF)
   - date        : tanggal mulai (format YYYY-MM-DD, atau YYYY-MM jika belum pasti)
   - dateEnd     : tanggal selesai (opsional, untuk event beberapa hari)
   - location    : lokasi pelaksanaan
   - target      : peserta yang dituju
   - description : deskripsi singkat
   - logo        : path gambar logo
   ========================================================== */

var DATA_EVENT = [
  {
    id: "EVT-01",
    title: "SIFEST",
    category: "Perlombaan",
    organizer: "HMSI",
    date: "2026-11-12",
    location: "Belum diumumkan",
    target: "Umum",
    description: "Program perlombaan pentas seni sebagai wadah menyalurkan minat/bakat sekaligus memperingati Dies Natalis HMSI dengan tujuan mempererat tali silaturahmi.",
    logo: "assets/img/logo-sifest.png"
  },
  {
    id: "EVT-02",
    title: "INFORMAFEST",
    category: "Perlombaan",
    organizer: "HMIF",
    date: "2027-07-22",
    location: "Jl. Pelajar Pejuang 45 No.8, Lkr. Sel., Kec. Lengkong, Kota Bandung, Jawa Barat",
    target: "Mahasiswa Universitas Kebangsaan Republik Indonesia (UKRI)",
    description: "Ajang perlombaan akademik (Desain Grafis & UI/UX) serta pentas seni untuk mengasah kemampuan dan menyalurkan bakat mahasiswa Teknik Informatika.",
    logo: "assets/img/logo-informafest.png"
  },
  {
    id: "EVT-03",
    title: "Seminar Nasional x Workshop",
    category: "Komunitas",
    organizer: "HMIF",
    date: "2027-05",
    location: "Belum diumumkan",
    target: "Mahasiswa Universitas Kebangsaan Republik Indonesia (UKRI)",
    description: "Pertemuan interaktif bagi mahasiswa untuk saling mengenal, berbagi ide, dan mendorong pertukaran gagasan.",
    logo: "assets/img/logo-seminar-nasional.png"
  },
  {
    id: "EVT-04",
    title: "INOVASI NEX",
    category: "Pengembangan Diri",
    organizer: "HMSI",
    date: "2026-11-27",
    dateEnd: "2026-11-29",
    location: "Belum diumumkan",
    target: "Mahasiswa Prodi Sistem Informasi",
    description: "Kegiatan penyambutan dan pengenalan kampus (maba) agar mahasiswa baru siap beradaptasi dengan sistem akademik, fasilitas, serta membangun kebersamaan.",
    logo: "assets/img/logo-inovasi-nex.png"
  },
  {
    id: "EVT-05",
    title: "ITLEARN",
    category: "Pengembangan Diri",
    organizer: "HMIF",
    date: "2026-11-27",
    dateEnd: "2026-11-29",
    location: "Belum diumumkan",
    target: "Mahasiswa Prodi Teknik Informatika",
    description: "Kegiatan penyambutan dan pengenalan lingkungan kampus khusus mahasiswa baru Teknik Informatika untuk memahami sistem perkuliahan dan budaya akademik.",
    logo: "assets/img/logo-itlearn.png"
  }
];


/* ==========================================================
   FUNGSI LOGO
   Menampilkan foto logo event
   ========================================================== */

function logoEvent(e) {
  if (e.logo) {
    return '<img src="' + e.logo + '" alt="Logo ' + e.title + '" loading="lazy">';
  }
  return "";
}