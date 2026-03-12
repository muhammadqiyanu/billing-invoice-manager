# Billing Invoice Manager

Billing Invoice Manager adalah aplikasi dashboard sederhana untuk mengelola invoice menggunakan React.

## Features

- Menampilkan daftar invoice
- Menambahkan invoice baru
- Menghapus invoice
- Filter status invoice (Paid, Pending, Unpaid)

## Tech Stack

- React
  Dipilih karena React merupakan library JavaScript yang populer untuk membangun user interface berbasis komponen. Dengan React, pengelolaan state dan pembagian komponen seperti InvoiceForm dan InvoiceList menjadi lebih terstruktur dan mudah dikembangkan.
- Vite
  Vite dipilih sebagai build tool karena proses development server yang sangat cepat dan konfigurasi yang sederhana dibandingkan bundler tradisional. Hal ini membantu mempercepat proses development.
- JavaScript
  Digunakan sebagai bahasa utama untuk mengelola logika aplikasi seperti menambah dan menghapus invoice.
- CSS
  Digunakan untuk styling sederhana agar tampilan dashboard tetap rapi dan mudah digunakan.

## Cara Menjalankan Project

1. Clone repository

git clone https://github.com/username/billing-invoice-manager.git

2. Install dependencies

npm install

3. Jalankan project

npm run dev

4. Buka di browser

http://localhost:5173

## Struktur Project

src
- components
  - InvoiceForm.jsx
  - InvoiceList.jsx
- pages
  - Dashboard.jsx
- data
  - mockInvoices.js

## Author

Muhammad Qiyanu Fikkiya