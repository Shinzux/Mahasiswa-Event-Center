/* ==========================================================================
   CATATAN:
   Navbar dan Footer sekarang dipasang langsung di setiap file HTML agar dapat
   berjalan langsung di browser / Notepad++ tanpa terkendala CORS (file://).
   ========================================================================== */

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
   FUNGSI TAMPILKAN DAFTAR EVENT (Khusus Halaman event.html)
   ----------------------------------------------------------
   Fungsinya: Membaca array DATA_EVENT di atas, lalu membuatkan
   kartu HTML untuk setiap event dan menampilkannya di layar.

   Langkah-langkah yang dilakukan:
   1. Cari wadah HTML ber-ID "daftarEvent".
   2. Siapkan penampung teks kosong (hasilHTML = "").
   3. Ulangi data dari event pertama sampai terakhir (looping).
   4. Susun kartu HTML dengan data: foto, status, judul, tanggal, dll.
   5. Masukkan seluruh kartu ke dalam wadah HTML lewat innerHTML.
   ========================================================== */

function tampilkanEvent() {
  var wadah = document.getElementById("daftarEvent");
  if (!wadah) return; // Jika elemen tidak ada (bukan halaman event.html), hentikan fungsi

  var hasilHTML = "";

  for (var i = 0; i < DATA_EVENT.length; i++) {
    var event = DATA_EVENT[i];

    // Susun template HTML kartu event
    hasilHTML += `
      <article class="kartu-event">
        <div class="thumb-event"><img src="${event.logo}"></div>
        <div class="isi-event">
          <span class="badge ${event.badge}">${event.status}</span>
          <h3 class="judul-event">${event.title}</h3>
          <div class="meta-event">
            <span><i class="bi bi-tag"></i>${event.category}</span>
            <span><i class="bi bi-geo-alt"></i>${event.location}</span>
            <span><i class="bi bi-calendar-event"></i><strong>${event.date}</strong></span>
          </div>
        </div>
        <div class="aksi-event">
          <a class="btn btn-maroon rounded-pill px-4" href="detail-event.html?event=${event.id}">Lihat Detail</a>
        </div>
      </article>`;
  }

  // Tampilkan seluruh kartu ke halaman
  wadah.innerHTML = hasilHTML;
}