# frenly-website 🌸

A modern, animated landing page for **Frenly**, built using **React**, **Vite**, **GSAP**, and **Tailwind CSS**.  
This project focuses on smooth scrolling animations, visual storytelling, and a polished frontend experience.

---

## 🚀 Features

- Built with **React + Vite** for fast performance  
- Smooth scroll animations powered by **GSAP + ScrollTrigger**  
- Styled using **Tailwind CSS**  
- Modular structure for easy maintenance  
- Navbar with section-based active highlighting  
- Non-responsive version (desktop layout only)

---

## 🛠️ Tech Stack

- **Frontend:** React.js  
- **Build Tool:** Vite  
- **Styling:** Tailwind CSS  
- **Animation:** GSAP (GreenSock Animation Platform)

---

## 📂 Folder Structure

```
frenly-website/
│
├── src/
│   ├── components/
│   │   └── Navbar/
│   │       ├── Navbar.jsx
│   │       └── NavbarSlider.jsx
│   │
│   ├── pages/
│   │   ├── Home/
│   │   ├── Problem/
│   │   ├── Why/
│   │   ├── C1/
│   │   ├── Different/
│   │   └── Bottom/
│   │
│   ├── assets/ (your images go here)
│   └── App.jsx
│
├── index.html
├── package.json
└── vite.config.js
```

---

## 🧑‍💻 Local Development

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/SAHILRATHORE/frenly-website.git
```

### 2️⃣ Navigate to the Project Folder
```bash
cd frenly-website
```

### 3️⃣ Install Dependencies
```bash
npm install
```

### 4️⃣ Run the Development Server
```bash
npm run dev
```

Your project will be live at:
```
http://localhost:5173/
```

To preview on your phone (same Wi-Fi network):
```bash
npm run dev -- --host
```

Then open the shown “Network” URL on your phone browser.

---

## 🌍 Deployment on GitHub Pages

### 1️⃣ Install gh-pages
```bash
npm install gh-pages --save-dev
```

### 2️⃣ Add Deployment Scripts in `package.json`

```json
"homepage": "https://SAHILRATHORE.github.io/frenly-website",
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "gh-pages -d dist"
}
```

### 3️⃣ Build and Deploy
```bash
npm run build
npm run deploy
```

Your site will be live at:
👉 **https://SAHILRATHORE.github.io/frenly-website**

---

## 🧾 Notes

- The project is designed primarily for **desktop view**.
- Make sure all image paths in `/public/Images/` are correct before deployment.
- If GSAP animations look off after build, try using absolute paths for images or move assets to `/public`.

---

## 👤 Author

**Sahil Rathore**  
🔗 [GitHub Profile](https://github.com/SAHILRATHORE)
🔗 [Linkedin Profile](https://www.linkedin.com/in/sahil-rathore-641119245/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
