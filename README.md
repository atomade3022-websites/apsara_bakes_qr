# Apsara Bakes - Digital Menu Web App

Official digital menu web application for **Apsara Bakes** (https://qr.apsarabakes.in/).

## Features
- **3 Categories**:
  1. Fresh Cream Cakes (47 items with updated prices & ingredient details)
  2. Authentic Bakery Items (47 traditional Kerala bakery specialties)
  3. Customized Cakes (50 celebration cakes)
- **Interactive UI**:
  - Touch-swipe category navigation with animated slide hints
  - Fullscreen viewer modal with crisp white background
  - Instant WhatsApp & Instagram sharing with custom deep links (`?item=...`)
  - Auto-closing 2-second welcome message
- **QR Code Standee**:
  - Printable counter standee page (`qr.html`) linked to `https://qr.apsarabakes.in/`
  - High-res QR code PNG (`qr-code.png`) and vector SVG (`qr-code.svg`)

## How to Publish / Deploy

### Option 1: Static Web Hosting (Recommended - Netlify, Vercel, Cloudflare Pages, GitHub Pages, cPanel)
Upload all files in this folder directly to your web server root or publish directory.
- `index.html` is the entry point.
- Zero server build steps required.

### Option 2: Node.js Hosting (Render, Railway, Heroku, VPS)
```bash
npm start
# Server starts on port 8080 (or process.env.PORT)
```
