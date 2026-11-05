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
    category: "Perlombaan",
    organizer: "HMSI",
    date: "2026-11-12",
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
    category: "Perlombaan",
    organizer: "HMIF",
    date: "2027-07-22",
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
    category: "Komunitas",
    organizer: "HMIF",
    date: "2027-05",
    time: "Belum diumumkan",
    location: "Aula Utama Kampus UKRI, Bandung",
    latitude: -6.9270,
    longitude: 107.6030,
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
   Menggunakan data tunggal langsung dari DATA_EVENT.
   ========================================================== */

var mapContainer = document.getElementById("map");
if (mapContainer && typeof L !== "undefined") {
  // Koordinat & zoom awal (default seluruh kota Bandung)
  var defaultLat = -6.9147;
  var defaultLng = 107.6098;
  var defaultZoom = 13;

  // Baca atribut data-lat, data-lng, data-zoom dari elemen #map jika ada
  var initialLat = parseFloat(mapContainer.getAttribute("data-lat")) || defaultLat;
  var initialLng = parseFloat(mapContainer.getAttribute("data-lng")) || defaultLng;
  var initialZoom = parseInt(mapContainer.getAttribute("data-zoom"), 10) || defaultZoom;
  var focusId = mapContainer.getAttribute("data-focus-id"); // id event yang ingin langsung dibuka popup-nya

  // 1. Membuat peta dan menentukan titik tengah & zoom
  var map = L.map("map").setView([initialLat, initialLng], initialZoom);

  // 2. Menampilkan tampilan peta dari OpenStreetMap
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  // 3. Icon marker
  var defaultIcon = L.icon({
    iconUrl: "assets/leaflet/images/marker-icon.png",
    iconRetinaUrl: "assets/leaflet/images/marker-icon-2x.png",
    shadowUrl: "assets/leaflet/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  // 4. Membuat marker langsung dari DATA_EVENT yang memiliki koordinat
  DATA_EVENT.forEach(function (ev) {
    if (ev.latitude && ev.longitude) {
      var marker = L.marker([ev.latitude, ev.longitude], {
        icon: defaultIcon,
      }).addTo(map);

      var popup = marker.bindPopup(
        "<b>" + ev.title + "</b><br>" +
        "Penyelenggara: " + ev.organizer + "<br>" +
        "Tanggal: " + (ev.date || "-") + "<br>" +
        "Lokasi: " + (ev.location || "-")
      );

      // Jika halaman menentukan event tertentu untuk difokuskan, langsung buka popup-nya
      if (focusId && ev.id === focusId) {
        popup.openPopup();
      }
    }
  });
}
