# Aplikasi untuk Manajemen Buku

Aplikasi Manajemen Buku adalah sebuah aplikasi berbasis React yang memungkinkan penggunanya untuk mengelola koleksi buku-buku yang  mereka punya secara interaktif. Pengguna dapat menambahkan, mengedit, menghapus, memfilter, dan mencari buku berdasarkan status, judul, juga penulis. Aplikasi ini cocok untuk keperluan pribadi seperti mencatat buku yang dimiliki, sedang dibaca, atau buku yang ingin dibeli.

# Instruksi instalasi dan menjalankan

1. Buat dulu folder baru di terminal dengan nama yang diinginkan
npx create-react-app nayla_122140033_pertemuan3
cd nayla_122140033_pertemuan3

2. Buka folder yang dibuat tadi di VSCode
code .

3. Untuk menjalankan proyek ketik di terminal
npm start


# Fitur-Fitur React yang Digunakan

1. Hooks (useState, useContext)	- untuk mengatur state lokal dan global (melalui context BookContext)
2. Context API - untuk mengelola data buku di seluruh komponen secara efisien
3. Component Props - digunakan untuk mengirim data dan fungsi antar komponen seperti BookForm, BookList
4. Conditional Rendering - untuk menampilkan form edit atau tampilan buku biasa berdasarkan state
5. Form Handling - untuk mengelola inputan pengguna seperti menambah atau memperbarui data buku
6. LocalStorage -digunakan untuk menyimpan data buku secara lokal di browser