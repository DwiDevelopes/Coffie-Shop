<p align="center"><img src="https://img.freepik.com/free-vector/coffee-shop-logo-template_23-2148986843.jpg" width="300" alt="Coffie Shop Logo"></p>

<p align="center">
<a href="#"><img src="https://img.shields.io/badge/build-passing-brightgreen" alt="Build Status"></a>
<a href="#"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License"></a>
</p>

# Coffie Shop

Coffie Shop adalah aplikasi web yang dirancang untuk mengelola operasional toko kopi secara digital. Aplikasi ini memudahkan pemilik dan karyawan dalam mengelola menu, pesanan, stok bahan baku, serta laporan penjualan secara efisien dan terintegrasi.

## Fitur Utama

- **Manajemen Menu:** Tambah, edit, dan hapus menu minuman dan makanan dengan harga dan deskripsi.
- **Manajemen Pesanan:** Proses pemesanan pelanggan secara real-time, baik dine-in maupun take-away.
- **Manajemen Stok:** Pantau stok bahan baku, dapatkan notifikasi saat stok menipis.
- **Laporan Penjualan:** Lihat laporan penjualan harian, mingguan, dan bulanan dalam bentuk grafik dan tabel.
- **Manajemen Pengguna:** Kelola hak akses untuk admin, kasir, dan barista.
- **Integrasi Pembayaran:** Mendukung pembayaran tunai dan non-tunai (QRIS, e-wallet, kartu debit/kredit).
- **Dashboard Interaktif:** Tampilkan ringkasan performa toko secara visual.

## Teknologi yang Digunakan

- **Backend:** Laravel (PHP)
- **Frontend:** Blade, Bootstrap, JavaScript
- **Database:** MySQL
- **Deployment:** Docker, Nginx
- **Integrasi:** API pembayaran (opsional)

## Instalasi

1. **Clone repository:**
    ```bash
    git clone https://github.com/username/coffie-shop.git
    cd coffie-shop
    ```
2. **Install dependencies:**
    ```bash
    composer install
    npm install
    ```
3. **Copy file environment:**
    ```bash
    cp .env.example .env
    ```
4. **Konfigurasi database** di file `.env`.
5. **Generate key dan migrate database:**
    ```bash
    php artisan key:generate
    php artisan migrate --seed
    ```
6. **Jalankan aplikasi:**
    ```bash
    php artisan serve
    ```

## Cara Penggunaan

1. Login sebagai admin/kasir/barista.
2. Kelola menu dan stok bahan baku.
3. Proses pesanan pelanggan melalui dashboard.
4. Pantau laporan penjualan dan performa toko.

## Kontribusi

Kontribusi sangat terbuka! Silakan fork repository ini dan buat pull request untuk fitur atau perbaikan bug.

## Lisensi

Aplikasi Coffie Shop dirilis di bawah [MIT License](https://opensource.org/licenses/MIT).

## Kontak

Untuk pertanyaan atau saran, silakan hubungi Dwi Bakti N Dev

