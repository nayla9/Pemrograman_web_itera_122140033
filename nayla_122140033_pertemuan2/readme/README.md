# Create Your Activity - Personal Dashboard Web App

Aplikasi ini adalah Personal Dashboard Interaktif yang dikembangkan menggunakan berbagai fungsi HTML, CSS, dan JavaScript (ES6+). Bertemakan warna pastel modern aplikasi ini membantu mahasiswa untuk mengatur:

- 📅 Jadwal Kuliah  
- ✅ Daftar Tugas  
- ⏰ Deadline Kegiatan  

## Fitur Aplikasi

### Tambah Aktivitas
Pengguna dapat menambahkan entri baru berupa:
- Judul aktivitas
- Tanggal
- Waktu (khusus untuk kategori Jadwal Kuliah)
- 3 Kategori (Jadwal Kuliah, Tugas, atau Deadline)

### Edit & Hapus
- Pengguna bisa mengedit aktivitas yang sudah ditambahkan.
- Aktivitas juga dapat dihapus secara permanen.

### Penyimpanan Otomatis
- Semua data tersimpan secara lokal di browser (localStorage) sehingga tidak hilang saat halaman direfresh.

### Tampilan Dinamis
- Setiap entri ditampilkan secara dinamis sesuai kategori dan waktu yang dipilih.

## Implementasi Fitur ES6+ dalam App

let & const = Digunakan secara tepat untuk deklarasi variabel agar mencegah reassign yang tidak diinginkan
rrow Functions = Minimum 3 digunakan: addItem, handleAction, dan saveItems
Template Literals = Untuk render HTML dinamis: menampilkan teks dalam elemen .innerHTML
Class = `class Item` digunakan untuk merepresentasikan satu entri aktivitas 
