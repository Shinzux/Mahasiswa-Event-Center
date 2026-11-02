<?php
// Deteksi halaman saat ini untuk menandai link aktif (active) di navbar
$currentPage = isset($currentPage) ? $currentPage : basename($_SERVER['PHP_SELF']);
?>
<!-- NAVBAR -->
<nav class="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm">
  <div class="container">
    <a class="navbar-brand" href="beranda.php">
      <span class="brand-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4 8.5C4 7.12 5.12 6 6.5 6H17.5C18.88 6 20 7.12 20 8.5V17C20 18.66 18.66 20 17 20H7C5.34 20 4 18.66 4 17V8.5Z"
            fill="white"
          />
          <rect x="7" y="3.5" width="2" height="3.5" rx="1" fill="white" />
          <rect x="15" y="3.5" width="2" height="3.5" rx="1" fill="white" />
          <path d="M4 10H20" stroke="#720927" stroke-width="1.8" />
          <rect x="14" y="13.5" width="2.5" height="2.5" rx="0.5" fill="#720927" />
        </svg>
      </span>
      <span>Event<span class="brand-highlight">Mahasiswa</span></span>
    </a>

    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#menuNavbar"
      aria-controls="menuNavbar"
      aria-expanded="false"
      aria-label="Buka menu navigasi"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="menuNavbar">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link <?= in_array($currentPage, ['beranda.php', 'beranda.html', 'index.php']) ? 'active' : '' ?>" href="beranda.php">Beranda</a>
        </li>
        <li class="nav-item">
          <a class="nav-link <?= in_array($currentPage, ['profil.php', 'profil.html']) ? 'active' : '' ?>" href="profil.php">Profil</a>
        </li>
        <li class="nav-item">
          <a class="nav-link <?= in_array($currentPage, ['detail-event.php', 'detail-event.html', 'event-2.html']) ? 'active' : '' ?>" href="detail-event.php">Event</a>
        </li>
        <li class="nav-item">
          <a class="nav-link <?= in_array($currentPage, ['gis.php', 'gis.html']) ? 'active' : '' ?>" href="gis.php">Lokasi Event</a>
        </li>
        <li class="nav-item">
          <a class="nav-link <?= in_array($currentPage, ['jelajahi-event.php', 'jelajahi-event.html']) ? 'active' : '' ?>" href="jelajahi-event.php">Jelajahi Event</a>
        </li>
      </ul>
      <a href="kontak.php" class="btn btn-maroon rounded-pill ms-lg-3">Kontak</a>
    </div>
  </div>
</nav>

