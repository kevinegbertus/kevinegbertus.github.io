# KE_ Portfolio
React + Vite, CSS, Lucide. Clean Professional × Pixel Minimalist.

## Lokal
Instal Node.js 22, buka folder di VS Code, jalankan `npm install` lalu `npm run dev`. Buka alamat yang tampil di terminal. `npm run build` menghasilkan folder dist.

## GitHub Pages
1. Buat repository publik, misalnya USERNAME.github.io.
2. Ekstrak ZIP, unggah isi folder portfolio (termasuk .github) ke root repository, branch main. Jangan unggah node_modules.
3. Settings > Pages > Build and deployment > Source > GitHub Actions.
4. Jalankan workflow Deploy portfolio di tab Actions jika belum otomatis berjalan. Setelah berhasil, buka URL di Settings > Pages.

## Konten
Edit src/data.js untuk proyek, foto, CV, kontak, sertifikat. Letakkan foto di public/images, CV di public/documents, sertifikat di public/certificates. Contoh photo: 'images/profile.jpg', cv: 'documents/cv.pdf', certificates: [{title:'Nama sertifikat',file:'certificates/example.pdf'}]. Isi email dan URL sosial yang benar. Edit src/main.jsx untuk profil, pengalaman dan pendidikan. Verifikasi seluruh konten sebelum publikasi; jangan unggah dokumen internal atau data pribadi sensitif. Font Google dimuat dari internet dengan fallback lokal.

## V1.2
Pixel cursor with trailing square and click pulse, animated navigation, project zoom and pixel shadows. Custom cursor is disabled for touch and reduced-motion preferences.

## V1.3 public release
SEO, favicon, social preview, sitemap, robots.txt, custom 404, keyboard focus and image decoding improvements. Canonical and social URLs assume https://kevinegbertus.github.io/. Create a public repository named kevinegbertus.github.io, upload the contents of this folder (including .github), then Settings > Pages > GitHub Actions. Run npm install and npm run build locally before publishing.
