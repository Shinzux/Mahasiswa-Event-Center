//Script template navbar footer

// <div id="navbar-placeholder"></div> dan <div id="footer-placeholder"></div>

function loadTemplate(id, file) {
  fetch(file)
    .then(function (response) {
      if (!response.ok) throw new Error("Gagal memuat " + file);
      return response.text();
    })
    .then(function (html) {
      var container = document.getElementById(id);
      container.innerHTML = html;

      // Menandai menu aktif di navbar secara otomatis
      var currentFile = window.location.pathname.split("/").pop() || "index.html";
      var navLinks = container.querySelectorAll(".nav-link");
      navLinks.forEach(function (link) {
        if (link.getAttribute("href") === currentFile) {
          link.classList.add("active");
        }
      });
    })
    .catch(function (error) {
      console.error(error);
    });
}
loadTemplate("navbar-placeholder", "template/navbar.html");
loadTemplate("footer-placeholder", "template/footer.html");

/* ==========================================================
   DATA EVENT (satu-satunya sumber data untuk semua halaman)
   Field:
   - id          : kode unik event
   - title       : nama event
   - category    : Perlombaan | Komunitas | Pengembangan Diri
   - organizer   : penyelenggara (HMSI / HMIF)
   - date        : tanggal mulai (format YYYY-MM-DD, atau YYYY-MM jika belum pasti)
   - dateEnd     : tanggal selesai (opsional, untuk event beberapa hari)
   - time        : jam pelaksanaan (opsional)
   - location    : lokasi pelaksanaan
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
    category: "Perlombaan",
    organizer: "HMSI",
    date: "2026-11-12",
    time: "Belum diumumkan",
    location: "Belum diumumkan",
    target: "Umum",
    description: "Program perlombaan pentas seni sebagai wadah menyalurkan minat/bakat sekaligus memperingati Dies Natalis HMSI dengan tujuan mempererat tali silaturahmi.",
    purpose: "Menyalurkan minat dan bakat peserta sekaligus mempererat tali silaturahmi dalam rangka Dies Natalis HMSI.",
    agenda: ["Informasi susunan acara belum diumumkan."],
    logo: "assets/image/SIFEST.jpg"
  },
  {
    id: "EVT-02",
    title: "INFORMAFEST",
    category: "Perlombaan",
    organizer: "HMIF",
    date: "2027-07-22",
    time: "Belum diumumkan",
    location: "Jl. Pelajar Pejuang 45 No.8, Lkr. Sel., Kec. Lengkong, Kota Bandung, Jawa Barat",
    target: "Mahasiswa Universitas Kebangsaan Republik Indonesia (UKRI)",
    description: "Ajang perlombaan akademik (Desain Grafis & UI/UX) serta pentas seni untuk mengasah kemampuan dan menyalurkan bakat mahasiswa Teknik Informatika.",
    purpose: "Mengasah kemampuan akademik di bidang desain serta menyalurkan bakat mahasiswa Teknik Informatika.",
    agenda: ["Informasi susunan acara belum diumumkan."],
    logo: "assets/image/INFORMAFEST.jpg"
  },
  {
    id: "EVT-03",
    title: "Seminar Nasional x Workshop",
    category: "Komunitas",
    organizer: "HMIF",
    date: "2027-05",
    time: "Belum diumumkan",
    location: "Belum diumumkan",
    target: "Mahasiswa Universitas Kebangsaan Republik Indonesia (UKRI)",
    description: "Pertemuan interaktif bagi mahasiswa untuk saling mengenal, berbagi ide, dan mendorong pertukaran gagasan.",
    purpose: "Mendorong interaksi serta pertukaran gagasan antar mahasiswa.",
    agenda: ["Informasi susunan acara belum diumumkan."],
    logo: "assets/image/StudentCommunityMeetup.jpg"
  },
  {
    id: "EVT-04",
    title: "INOVASI NEX",
    category: "Pengembangan Diri",
    organizer: "HMSI",
    date: "2026-11-27",
    dateEnd: "2026-11-29",
    time: "Belum diumumkan",
    location: "Belum diumumkan",
    target: "Mahasiswa Prodi Sistem Informasi",
    description: "Kegiatan penyambutan dan pengenalan kampus (maba) agar mahasiswa baru siap beradaptasi dengan sistem akademik, fasilitas, serta membangun kebersamaan.",
    purpose: "Membantu mahasiswa baru beradaptasi dengan sistem akademik dan fasilitas kampus sekaligus membangun kebersamaan.",
    agenda: ["Informasi susunan acara belum diumumkan."],
    logo: "assets/image/INOVASI.jpg"
  },
  {
    id: "EVT-05",
    title: "ITLEARN",
    category: "Pengembangan Diri",
    organizer: "HMIF",
    date: "2026-11-27",
    dateEnd: "2026-11-29",
    time: "Belum diumumkan",
    location: "Belum diumumkan",
    target: "Mahasiswa Prodi Teknik Informatika",
    description: "Kegiatan penyambutan dan pengenalan lingkungan kampus khusus mahasiswa baru Teknik Informatika untuk memahami sistem perkuliahan dan budaya akademik.",
    purpose: "Mengenalkan sistem perkuliahan dan budaya akademik kepada mahasiswa baru Teknik Informatika.",
    agenda: ["Informasi susunan acara belum diumumkan."],
    logo: "assets/image/MembangunKarrierDigital.jpg"
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


/* ==========================================================
   JAVASCRIPT PETA
   Hanya jalan di halaman yang punya elemen #map DAN library
   Leaflet sudah dimuat (gis.html). Halaman lain melewatinya.
   Catatan: array marker bernama eventPeta, bukan events,
   supaya tidak bentrok dengan variabel di detail-event.html.
   ========================================================== */

if (document.getElementById("map") && typeof L !== "undefined") {
  // 1. Membuat peta dan menentukan titik tengah
  var map = L.map("map").setView([-6.9147, 107.6098], 13);

  // 2. Menampilkan tampilan peta dari OpenStreetMap
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  // 3. Menyiapkan data event
  // Koordinat berikut hanya contoh, bukan lokasi event sebenarnya.
  var eventPeta = [
    {
      nama: "Seminar Teknologi",
      tanggal: "15 November 2026",
      lokasi: "Lokasi Contoh A",
      latitude: -6.9175,
      longitude: 107.6191,
    },
    {
      nama: "Workshop UI/UX",
      tanggal: "20 November 2026",
      lokasi: "Lokasi Contoh B",
      latitude: -6.9025,
      longitude: 107.6188,
    },
    {
      nama: "Festival Mahasiswa",
      tanggal: "25 November 2026",
      lokasi: "Lokasi Contoh C",
      latitude: -6.927,
      longitude: 107.603,
    },
  ];

  // 4. Icon marker
  var defaultIcon = L.icon({
    iconUrl: "assets/leaflet/images/marker-icon.png",
    iconRetinaUrl: "assets/leaflet/images/marker-icon-2x.png",
    shadowUrl: "assets/leaflet/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  // 5. Membuat marker untuk setiap event + popup saat diklik
  eventPeta.forEach(function (ev) {
    var marker = L.marker([ev.latitude, ev.longitude], {
      icon: defaultIcon,
    }).addTo(map);

    marker.bindPopup(
      "<b>" + ev.nama + "</b><br>" + "Tanggal: " + ev.tanggal + "<br>" + "Lokasi: " + ev.lokasi,
    );
  });
}