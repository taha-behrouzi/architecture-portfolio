# Architect Portfolio — Premium Minimalist Website

A premium, minimalist portfolio website for an Iranian architect and licensed civil/engineering professional. Designed with strong Persian-inspired aesthetics, smooth animations, fluid responsive layouts, and modern front-end practices.

---

## Description

This is the official online portfolio for **Nemat Behrouzifard — Senior Architect & Licensed Engineer (Grade 1)**. The website presents architectural projects and professional credentials in a calm, luxurious, and editorial layout inspired by world-class architecture studios.

Every design decision prioritizes elegance, precision, and trust — from the warm ivory color palette to the GPU-accelerated scroll animations. The goal is to create a first impression that communicates: *"This architect pays attention to every detail."*

---

## Features

- Fluid responsive layouts using `clamp()`, CSS Grid, and Flexbox
- Smooth GPU-accelerated scroll reveal animations
- Elegant preloader with animated logo
- Hide/show header on scroll direction
- Active section tracking in navigation
- Magnetic button effect on CTA
- Subtle card tilt on hover (desktop)
- Animated counter for stat numbers (Persian numerals)
- Lazy image loading with fade-in
- Ambient light orbs with parallax movement
- Decorative architectural grid background
- Keyboard navigation support with visible focus states
- Skip-to-content link for accessibility
- Content Security Policy and Referrer-Policy headers

---

## Design Philosophy

The design follows a **"Quiet Luxury"** approach — no flashy gradients, no unnecessary decoration, no template feel. Every element is intentional:

- **Whitespace** is used as a design element, not empty space
- **Typography** follows a strict modular scale with clear hierarchy
- **Color** is warm, layered, and architectural — never harsh
- **Motion** is calm and premium — images glide, cards lift gently, sections reveal smoothly
- **Layout** is mathematical and balanced, using fluid units for seamless scaling

---

## Technologies

| Category | Technology |
|----------|-----------|
| Markup | Semantic HTML5 |
| Styling | CSS3 (Custom Properties, Grid, Flexbox, `clamp()`, `aspect-ratio`) |
| Animation | CSS Transitions + `requestAnimationFrame` |
| Scroll Detection | `IntersectionObserver` |
| JavaScript | Vanilla ES6+ (no frameworks, no libraries) |
| Fonts | Local TTF (BYekan, BNazanin) |
| Security | CSP meta tag, Referrer-Policy |

---

## Project Structure

```text
├── fonts/
│   ├── BYekan.ttf          # Display font for headings, buttons, navigation
│   └── BNazanin.ttf        # Body font for paragraphs and descriptions
├── images/
│   ├── favicon.ico         # Browser tab icon
│   ├── project1.png        # Hero showcase image
│   ├── project2.png        # Portfolio project — Mehrghan Residential Complex
│   ├── project3.png        # Portfolio project — Mostofi Modern Villa
│   └── project4.png        # Portfolio project — Sina Office Building
├── index.html              # Main HTML document
├── style.css               # All styling and design tokens
├── main.js                 # Interaction and animation engine
└── README.md               # Project documentation
```

---

## Responsive Design

The website uses fluid CSS throughout — no hard breakpoints for typography or spacing. Media queries are used only for layout shifts:

| Breakpoint | Behavior |
|-----------|----------|
| `> 1024px` | Full two-column hero, 3-column project grid |
| `768px – 1024px` | Single-column hero, 2-column project grid |
| `< 768px` | Mobile layout, single-column grid, hamburger menu |
| `< 420px` | Further typography scaling for small phones |

---

## Performance

- **Zero dependencies** — no jQuery, no React, no build tools
- **CSS-only animations** where possible — GPU-accelerated `transform` and `opacity`
- **Lazy loading** on below-the-fold images
- **Passive scroll listeners** for better scrolling performance
- **`requestAnimationFrame`** for all scroll-driven updates
- **Reduced motion support** — respects `prefers-reduced-motion`
- **Lightweight footprint** — total project under 50KB (excluding images and fonts)

---

## Accessibility

- Semantic HTML5 landmarks (`<header>`, `<main>`, `<footer>`, `<nav>`)
- `aria-label` on interactive elements
- `aria-hidden="true"` on decorative elements
- Skip-to-content link for keyboard users
- Visible focus states with `:focus-visible`
- Keyboard navigation detection with enhanced focus ring
- Escape key closes mobile navigation
- Color contrast compliant with WCAG guidelines

---

## Security

- **Content Security Policy (CSP)** — restricts script, style, image, and font sources
- **Referrer Policy** — `strict-origin-when-cross-origin`
- **No external requests** — all assets are self-hosted
- **No `eval()` or innerHTML usage** — safe DOM manipulation only

---

## Fonts

| Font | Usage | Source |
|------|-------|--------|
| **BYekan** | Headings, buttons, navigation, labels | Local `fonts/BYekan.ttf` |
| **BNazanin** | Body text, paragraphs, descriptions | Local `fonts/BNazanin.ttf` |

Both fonts are self-hosted — no external font requests.

---

## Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Ivory | `#F5F1EB` | Primary background |
| Cream | `#FAF8F4` | Section backgrounds |
| Forest | `#2B4436` | Accent color, CTAs, highlights |
| Bronze | `#B8956A` | Warm accent, ambient lighting |
| Ink | `#1A1A1A` | Primary text |
| Stone 300 | `#D4CCC0` | Borders, dividers |
| Stone 400 | `#B8AE9E` | Muted labels |

---

## Browser Compatibility

| Browser | Support |
|---------|---------|
| Chrome | Full |
| Edge | Full |
| Firefox | Full |
| Safari | Full |
| Samsung Internet | Full |
| Safari iOS | Full |

---

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Open `index.html` in any modern browser.

No build step, no server required. The website works as a static file.

---

## Usage

Replace the project images in the `images/` folder with your own architectural photographs. Update the text content in `index.html` to reflect your own professional details, project descriptions, and contact information.

---

## Customization

### Colors
Edit the CSS custom properties in `:root` within `style.css`:

```css
:root {
    --ivory: #F5F1EB;
    --forest: #2B4436;
    --ink: #1A1A1A;
    /* ... */
}
```

### Typography
Replace the TTF files in `fonts/` and update the `--font-display` and `--font-body` variables.

### Animations
Adjust timing values in `:root`:

```css
--duration-fast: 0.3s;
--duration-normal: 0.6s;
--duration-slow: 0.9s;
```

---

## Future Improvements

- [ ] Add a project detail page/lightbox
- [ ] Implement a contact form with server-side validation
- [ ] Add Arabic language toggle
- [ ] Implement dark mode
- [ ] Add before/after slider for renovation projects
- [ ] Add Google Analytics or Plausible for privacy-friendly analytics

---

## License

All rights reserved. This project and its design are proprietary.

---

## Author

**Taha Behrouzi** — Built with care for Nemat Behrouzifard's architectural practice.
