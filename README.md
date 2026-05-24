# Dhanu Profile — Portfolio Website

Website portfolio modern dan responsive dengan **React + Vite + Tailwind CSS**.

## Fitur

- Navbar sticky dengan blur saat scroll
- Hero dengan animasi fade-in
- About (deskripsi, pengalaman, skill badges)
- Projects dari `src/data/projects.json` (6 contoh)
- Contact (Email, WhatsApp, LinkedIn, GitHub)
- Dark mode toggle
- Smooth scrolling & scroll reveal
- Back to top button
- Lazy loading image + skeleton loading pada project cards
- SEO meta tags dasar
- Responsive (mobile, tablet, desktop)

## Menjalankan Project

```bash
npm install
npm run dev
```

Build production:

```bash
npm run build
npm run preview
```

## Kustomisasi

1. **Nama & profil** — edit `src/components/Hero.jsx` dan `About.jsx`
2. **Kontak** — edit `src/components/Contact.jsx`
3. **Project** — edit `src/data/projects.json` dan tambahkan gambar di `public/projects/`
4. **Pengalaman kerja** — edit `src/data/experience.json`
4. **Foto profil** — ganti `public/profile.svg` dengan `profile.jpg` Anda

## Deploy

- **Vercel**: import repo, framework preset Vite
- **Netlify**: build command `npm run build`, publish directory `dist`

## Struktur

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── ProjectCard.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── BackToTop.jsx
├── data/
│   ├── projects.json
│   └── experience.json
├── hooks/
│   ├── useDarkMode.js
│   └── useScrollReveal.js
├── App.jsx
└── main.jsx
```
