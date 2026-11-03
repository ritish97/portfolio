# Ritish Kumar Yadav — Bento Grid Portfolio

> **Apple-Style Modern Minimalist Portfolio** for **Data Analyst & Agentic AI Engineer**.  
> Features sleek modular cards, dual dark/light modes, live Streamlit demo links, interactive metrics, copy-to-clipboard email toast, and full PDF resume modal.

---

## ⚡ Instant Live Preview (No Setup Required!)
Since you are on Windows, you can open and test your portfolio **immediately**:
1. Open File Explorer to:
   `C:\Users\Ritish\.gemini\antigravity\scratch\portfolio-ritish\`
2. Double-click **`index.html`**
3. It opens directly in your browser (Chrome/Edge/Brave) with full interactive dark/light toggle, live Streamlit buttons, copy-email toast, and modals!

---

## 🚀 Next.js 14 Production Code (Vercel Ready)

This repository is already structured as a complete, modern **Next.js 14 (App Router) + Tailwind CSS + Framer Motion** application.

### Directory Structure
```
portfolio-ritish/
├── app/
│   ├── layout.tsx         # Metadata, SEO, font definitions, dark mode body
│   ├── page.tsx           # Main Bento Grid canvas & state orchestration
│   └── globals.css        # Apple-style glassmorphism & radial glow effects
├── components/
│   ├── Navbar.tsx         # Floating Apple glass pill navigation
│   ├── HeroBento.tsx      # Headshot, status badge, headline, and bio
│   ├── MetricsBento.tsx   # 4-tile quantifiable impact numbers (18%, 1470+, 14%, 8.26)
│   ├── ProjectsBento.tsx  # Flagship projects with Streamlit live apps & GitHub code
│   ├── SkillsBento.tsx    # Technical skills categorized into 4 bento panels
│   ├── CertificationsBento.tsx # Top 4 flagship credentials
│   ├── CertificationsModal.tsx # Full interactive modal for all 9 certificates
│   ├── ExperienceBento.tsx# Finlatics BA role & VIT Cyber Security degree
│   ├── ContactBento.tsx   # Direct email, phone, and social links
│   ├── ResumeModal.tsx    # In-page PDF resume quick-viewer
│   └── Toast.tsx          # 1-click email copy floating toast
├── public/
│   ├── avatar.jpg         # Your high-resolution professional headshot
│   └── resume.pdf         # Your actual resume PDF ready for download
├── index.html             # Zero-dependency browser preview
├── package.json           # Next.js, React, Tailwind, Lucide dependencies
├── tailwind.config.ts     # Obsidian/Cream dual theme & Electric Blue palette
├── tsconfig.json          # TypeScript configuration
└── next.config.mjs        # Next.js production build configuration
```

---

## 🌐 How to Deploy to Vercel (1-Click)

1. **Create a GitHub Repository**:
   - Go to [github.com/new](https://github.com/new)
   - Create a repository named `portfolio` or `ritish-portfolio`
2. **Push this folder to GitHub**:
   Open PowerShell in this directory:
   ```powershell
   git init
   git add .
   git commit -m "feat: initial Apple Bento Grid portfolio"
   git branch -M main
   git remote add origin https://github.com/ritish97/portfolio.git
   git push -u origin main
   ```
3. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click **"Add New" -> "Project"**
   - Select your `portfolio` repository
   - Click **"Deploy"** (Vercel automatically builds and provides a free custom URL like `ritish-portfolio.vercel.app`)

---

## 💻 Running Locally with Node.js
Whenever you have Node.js installed:
```bash
npm install
npm run dev
```
Visit `http://localhost:3000` to see live hot-reloading updates!
