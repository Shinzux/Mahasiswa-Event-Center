/* ==========================================================================
   FUNGSI LOAD TEMPLATE (Modular Navbar & Footer)
   --------------------------------------------------------------------------
   MANFAAT & KEGUNAAN:
   1. Mencegah duplikasi kode: Navbar dan Footer cukup dibuat satu kali di folder
      `template/` (navbar.html & footer.html).
   2. Mempermudah pemeliharaan: Jika ada menu yang ingin ditambah/diubah, cukup
      edit file template tersebut dan semua halaman otomatis ikut berubah.
   3. Menandai menu aktif: Secara otomatis menambahkan class "active" pada link
      navbar sesuai halaman yang sedang dibuka pengguna.

   CARA KERJA:
   - `fetch(file)`       : Mengambil isi file HTML template.
   - `container.innerHTML`: Memasukkan isi template ke dalam wadah (placeholder).
   - `navLinks.forEach`  : Memeriksa URL halaman saat ini dan menandai link aktif.
   ========================================================================== */

function loadTemplate(id, file) {
  fetch(file)
    .then(function (response) {
      if (!response.ok) throw new Error("Gagal memuat " + file);
      return response.text();
    })
    .then(function (html) {
      var container = document.getElementById(id);
      container.innerHTML = html;

      // Menandai menu aktif di navbar secara otomatis sesuai nama file yang dibuka
      var currentFile = window.location.pathname.split("/").pop() || "index.html";
      var navLinks = container.querySelectorAll(".nav-link");
      navLinks.forEach(function (link) {
        var href = link.getAttribute("href");
        if (href === currentFile || (currentFile === "gis-event.html" && href === "gis.html")) {
          link.classList.add("active");
        }
      });
    })
    .catch(function (error) {
      console.error(error);
    });
}

// Panggil fungsi di atas untuk mengisi wadah navbar dan footer di setiap halaman:
loadTemplate("navbar-placeholder", "template/navbar.html");
loadTemplate("footer-placeholder", "template/footer.html");

/* ==========================================================
   DATA EVENT (satu-satunya sumber data untuk semua halaman)
   Field:
   - id          : kode unik event
   - title       : nama event
   - status      : status event ("Akan Datang" atau "Selesai")
   - category    : Perlombaan | Komunitas | Pengembangan Diri
   - organizer   : penyelenggara (HMSI / HMIF)
   - date        : tanggal mulai (format YYYY-MM-DD, atau YYYY-MM jika belum pasti)
   - dateEnd     : tanggal selesai (opsional, untuk event beberapa hari)
   - time        : jam pelaksanaan (opsional)
   - location    : lokasi pelaksanaan
   - latitude    : koordinat lintang peta (opsional)
   - longitude   : koordinat bujur peta (opsional)
   - target      : peserta yang dituju
   - description : deskripsi singkat
   - purpose     : tujuan kegiatan (opsional)
   - agenda      : daftar susunan acara (opsional, berupa array)
   - logo        : path gambar logo
   ========================================================== */

var DATA_EVENT = [
  {
    id: "EVT-01",
    title: "SIFEST",
    status: "Akan Datang",
    badge: "badge-akan-datang",
    category: "Perlombaan",
    organizer: "HMSI",
    date: "12 November 2026",
    time: "Belum diumumkan",
    location: "Lapangan Saparua, Jl. Ambon No.11-15, Citarum, Kec. Bandung Wetan, Kota Bandung",
    latitude: -6.908390832736909, 
    longitude: 107.61667449324469,
    target: "Umum",
    description: "Program perlombaan pentas seni sebagai wadah menyalurkan minat/bakat sekaligus memperingati Dies Natalis HMSI dengan tujuan mempererat tali silaturahmi.",
    purpose: "Menyalurkan minat dan bakat peserta sekaligus mempererat tali silaturahmi dalam rangka Dies Natalis HMSI.",
    agenda: ["Informasi susunan acara belum diumumkan."],
    logo: "assets/image/SIFEST.jpg"
  },
  {
    id: "EVT-02",
    title: "INFORMAFEST",
    status: "Akan Datang",
    badge: "badge-akan-datang",
    category: "Perlombaan",
    organizer: "HMIF",
    date: "22 Juli 2027",
    time: "Belum diumumkan",
    location: "Alun-Alun Bandung, Jl. Asia Afrika, Kb. Pisang, Kec. Regol, Kota Bandung",
    latitude: -6.921635384088088, 
    longitude: 107.60717032577932,
    target: "Mahasiswa Universitas Kebangsaan Republik Indonesia (UKRI)",
    description: "Ajang perlombaan akademik (Desain Grafis & UI/UX) serta pentas seni untuk mengasah kemampuan dan menyalurkan bakat mahasiswa Teknik Informatika.",
    purpose: "Mengasah kemampuan akademik di bidang desain serta menyalurkan bakat mahasiswa Teknik Informatika.",
    agenda: ["Informasi susunan acara belum diumumkan."],
    logo: "assets/image/INFORMAFEST.jpg"
  },
  {
    id: "EVT-03",
    title: "Seminar Nasional x Workshop",
    status: "Akan Datang",
    badge: "badge-akan-datang",
    category: "Komunitas",
    organizer: "HMIF",
    date: "Mei 2027",
    time: "Belum diumumkan",
    location: "Aula Utama Kampus UKRI, Bandung",
    latitude: -6.926164186045057,
    longitude: 107.62600003083983,
    target: "Mahasiswa Universitas Kebangsaan Republik Indonesia (UKRI)",
    description: "Pertemuan interaktif bagi mahasiswa untuk saling mengenal, berbagi ide, dan mendorong pertukaran gagasan.",
    purpose: "Mendorong interaksi serta pertukaran gagasan antar mahasiswa.",
    agenda: ["Informasi susunan acara belum diumumkan."],
    logo: "assets/image/StudentCommunityMeetup.jpg"
  },
  {
    id: "EVT-04",
    title: "INOVASI NEX",
    status: "Akan Datang",
    badge: "badge-akan-datang",
    category: "Pengembangan Diri",
    organizer: "HMSI",
    date: "27 – 29 November 2026",
    time: "Belum diumumkan",
    location: "Gedung KNPI, Jl. Soekarno-Hatta No.623 Km. 8, Sukapura, Kec. Kiaracondong, Kota Bandung",
    latitude: -6.943211476527305,
    longitude: 107.64705136533506,
    target: "Mahasiswa Prodi Sistem Informasi",
    description: "Kegiatan penyambutan dan pengenalan kampus (maba) agar mahasiswa baru siap beradaptasi dengan sistem akademik, fasilitas, serta membangun kebersamaan.",
    purpose: "Membantu mahasiswa baru beradaptasi dengan sistem akademik dan fasilitas kampus sekaligus membangun kebersamaan.",
    agenda: ["Informasi susunan acara belum diumumkan."],
    logo: "assets/image/INOVASI.jpg"
  },
  {
    id: "EVT-05",
    title: "ITLEARN",
    status: "Akan Datang",
    badge: "badge-akan-datang",
    category: "Pengembangan Diri",
    organizer: "HMIF",
    date: "27 – 29 November 2026",
    time: "Belum diumumkan",
    location: "Gedung PKK, Jl. Soekarno-Hatta No.468, Batununggal, Kec. Bandung Kidul, Kota Bandung",
    latitude: -6.949786849735976,
    longitude: 107.62753343222057,
    target: "Mahasiswa Prodi Teknik Informatika",
    description: "Kegiatan penyambutan dan pengenalan lingkungan kampus khusus mahasiswa baru Teknik Informatika untuk memahami sistem perkuliahan dan budaya akademik.",
    purpose: "Mengenalkan sistem perkuliahan dan budaya akademik kepada mahasiswa baru Teknik Informatika.",
    agenda: ["Informasi susunan acara belum diumumkan."],
    logo: "assets/image/MembangunKarrierDigital.jpg"
  }
];


/* ==========================================================
   FUNGSI LOGO EVENT
   Mengembalikan tag <img> berisi logo event
   ========================================================== */

function logoEvent(event) {
  if (event.logo) {
    return '<img src="' + event.logo + '" alt="Logo ' + event.title + '">';
  }
  return "";
}