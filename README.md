# 🚀 Falah Abdussalam — Personal Portfolio Website

An ultra-modern, high-performance personal portfolio website engineered for **Falah Abdussalam** — Software Developer, Full Stack Engineer, Graphic Designer, UI/UX Designer, and Digital Marketing Specialist.

Built with **React**, **Vite**, **Tailwind CSS v4**, **Framer Motion**, and **Lucide Icons**, featuring a futuristic glassmorphism dark-mode aesthetic with vibrant ruby-red accents (`#FF3B30`), micro-animations, interactive modals, and category-filtered showcases.

---

## 🌟 Key Features

- **Futuristic Glassmorphism Aesthetic**: Dark background (`#09090b`) paired with glowing crimson accents (`#FF3B30`), blur overlays, and sleek border highlights.
- **Dynamic Typing Text Effect**: Smooth typing effect displaying multi-disciplinary roles.
- **Interactive Skills Radar & Cards**: Category filter tabs (*Frontend*, *Backend*, *Programming*, *Design*, *Marketing*) with animated percentage proficiency meters.
- **Filterable Portfolio Showcase**: Filter projects across 8 categories (*Websites*, *Mobile UI*, *Graphic Design*, *Logos*, *Branding*, *Posters*, *Digital Marketing*) with GitHub links, live demos, and a detail modal inspector.
- **Interactive Services Grid**: Service offerings with feature checklists and instant inquiry triggers.
- **Career & Academic Timelines**: Chronological experience nodes and degree/certification badges (*Meta*, *IxDF*, *Google*).
- **Client Endorsements**: Testimonial reviews with star ratings and avatar profiles.
- **Validated Contact Form**: Real-time form validation with custom submit animation and `canvas-confetti` celebration.
- **Downloadable Resume**: Interactive CV modal that generates and downloads a clean formatted resume file.
- **UX Polish & Performance**: Custom glowing cursor follower, splash screen loader, sticky glass navigation, scroll progress bar, and back-to-top button.

---

## 🛠️ Tech Stack & Dependencies

- **Frontend Core**: React (v19) + Vite (v8)
- **Styling**: Tailwind CSS (v4) + Custom Glassmorphism Utility Classes
- **Animations**: Framer Motion (v12)
- **Icons**: Lucide Icons + Custom Brand SVG Components
- **Celebrations**: Canvas-Confetti

---

## 💻 Local Development & Installation

### Prerequisites
Make sure you have **Node.js (v18+)** and **npm** installed on your system.

### 1. Clone the Repository
```bash
git clone https://github.com/falahabdussalam/falahcrg.git
cd falahcrg
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

---

## 📦 Production Build & Local Preview

### Build for Production
To generate an optimized, minified production build inside the `dist` folder:
```bash
npm run build
```

### Preview Production Build Locally
To test the production build locally before deploying:
```bash
npm run preview
```

---

## 🚀 Deployment Instructions

### Option 1: Deploy to GitHub Pages (Recommended for Static Hosting)

#### Automatic CLI Deployment using `gh-pages`
```bash
npm run deploy
```
This command automatically builds the project (`npm run build`) and publishes the `dist` folder to the `gh-pages` branch of your GitHub repository.

#### GitHub Actions / Settings Setup
1. Go to your repository on GitHub: `https://github.com/falahabdussalam/falahcrg`
2. Click **Settings** > **Pages**.
3. Under **Source**, select **Deploy from a branch**.
4. Choose the `gh-pages` branch and `/ (root)` folder, then click **Save**.
5. Your site will be live at `https://falahabdussalam.github.io/falahcrg/`!

---

### Option 2: Deploy to Vercel or Netlify

Since this project is a pure frontend React Single Page Application (SPA), it can be deployed to Vercel or Netlify with zero configuration:

#### Vercel
1. Sign in to [Vercel](https://vercel.com).
2. Click **Add New Project** and import `falahabdussalam/falah-abdussalam-pro`.
3. Vercel automatically detects **Vite**:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**.

#### Netlify
1. Log in to [Netlify](https://netlify.com).
2. Drag & drop the `dist` folder directly onto Netlify, or connect your GitHub repository.
3. Set **Build command** to `npm run build` and **Publish directory** to `dist`.

---

## 📁 Project File Structure

```
falah-abdussalam-pro/
├── public/
│   └── images/               # Project preview images & hero assets
├── src/
│   ├── components/
│   │   ├── About.jsx         # About section & pillars
│   │   ├── BrandIcons.jsx    # SVG icons for GitHub, LinkedIn, Instagram, etc.
│   │   ├── Contact.jsx       # Form with validation & confetti
│   │   ├── CustomCursor.jsx  # Glowing red cursor follower
│   │   ├── Education.jsx     # Degree & certifications cards
│   │   ├── Experience.jsx    # Career timeline
│   │   ├── Footer.jsx        # Links, copyright & back-to-top button
│   │   ├── Hero.jsx          # Hero section with typing effect
│   │   ├── LoadingScreen.jsx # Initial splash loader
│   │   ├── Navbar.jsx        # Sticky glass header & scroll bar
│   │   ├── Portfolio.jsx     # Filterable project showcase
│   │   ├── ProjectModal.jsx  # Detailed project popup modal
│   │   ├── ResumeModal.jsx   # CV preview & text downloader
│   │   ├── Services.jsx     # Services grid & checklists
│   │   ├── Skills.jsx        # Skills tab cards & progress meters
│   │   └── Testimonials.jsx  # Client endorsement reviews
│   ├── data/
│   │   └── portfolioData.js  # Centralized portfolio dataset
│   ├── App.jsx               # Main layout container
│   ├── index.css             # Tailwind v4 import & custom glass styles
│   └── main.jsx              # React DOM entry point
├── index.html                # SEO metadata & Google Fonts
├── vite.config.js            # Vite configuration with base: './'
├── package.json
└── README.md
```

---

## 👤 Author & Social Links

**Falah Abdussalam**
- **GitHub**: [falahabdussalam](https://github.com/falahabdussalam)
- **LinkedIn**: [Falah Abdussalam](https://www.linkedin.com/in/falah-abdussalam-0515712a3?utm_source=share_via&utm_content=profile&utm_medium=member_android)
- **Instagram**: [@_falah_crg_](https://www.instagram.com/_falah_crg_?igsh=M2MwajdmbHF4YXVt)
- **Behance**: [mfkmedia1](https://www.behance.net/mfkmedia1)
- **Dribbble**: [falah-abdussalam](https://dribbble.com/falah-abdussalam)

---
*Created with ❤️ for Falah Abdussalam.*
