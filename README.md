# Urban Garden Bistro – Business Website

## About This Project

This is a multi-page business website for **Urban Garden Bistro**, a modern restaurant focused on fresh, seasonal dining.  
The project includes **4 pages**:

- `index.html` – Home / hero, highlights, testimonial
- `about.html` – Story, team, and values
- `services.html` – Menu highlights and private events
- `contact.html` – Contact details, map placeholder, and reservation form

### Main Features

- Semantic HTML5 structure (`header`, `nav`, `main`, `section`, `footer`)
- CSS Grid for main layout sections (cards, menus, content splits)
- Flexbox for navigation and smaller content blocks
- SASS/SCSS with variables and mixins for reusable styles
- JavaScript for:
  - Mobile navigation toggle
  - Smooth scrolling to sections
  - Contact form validation with inline error messages
- Responsive design for mobile, tablet, and desktop
- Basic accessibility: alt text, proper heading order, focus styles, reduced-motion support

## What I Learned

- **HTML5 Structure**: How to build pages with semantic tags and shared navigation across multiple files.
- **CSS Layouts**: Using **CSS Grid** for multi-column layouts and **Flexbox** for navigation and small UI components.
- **SASS Organization**: Creating variables and mixins and compiling SCSS into reusable, maintainable CSS.
- **JavaScript Interactions**: Toggling a mobile menu, updating the footer year, smooth scrolling, and validating form fields.
- **Accessibility**: Adding alt text, using `aria-` attributes for navigation and error messaging, and respecting `prefers-reduced-motion`.

## Challenges & Solutions

- **Challenge 1: Making the layout responsive**  
  **Solution**: Used CSS Grid with media queries (breakpoints at `1024px` and `768px`) to reduce columns for cards, menu items, and footer sections. The navigation switches to a mobile menu controlled by JavaScript.

- **Challenge 2: Organizing styles for reuse**  
  **Solution**: Created `scss/_variables.scss` for colors, spacing, and radii, and `scss/_mixins.scss` for common patterns like buttons and focus rings, then imported them into `scss/main.scss` for compilation.

- **Challenge 3: Validating the contact form accessibly**  
  **Solution**: Used JavaScript to validate fields on submit, added `aria-invalid` to invalid fields, and used dedicated error `<p>` elements with `aria-live="polite"` for screen-reader friendly feedback.

## Project Structure

```text
business-website/
├── index.html
├── about.html
├── services.html
├── contact.html
├── css/
│   ├── main.css
│   ├── layout.css
│   └── responsive.css
├── scss/
│   ├── _mixins.scss
│   ├── _variables.scss
│   └── main.scss
├── js/
│   ├── main.js
│   └── form-validation.js
├── images/
│   ├── optimized/      (place optimized images here)
│   └── original/       (store full-size originals here)
├── .gitignore
└── README.md
```

## Setup & Viewing the Website

1. **Download or clone** the project folder.
2. Open `index.html` in your browser (double-click or use a simple static server).
3. Navigate to the other pages via the top navigation.

### Optional: Compile SASS

If you have `sass` installed globally (via `npm install -g sass`), you can compile the SCSS to CSS:

```bash
sass scss/main.scss css/main.css --watch
```

This lets you edit the SCSS files and see changes reflected in `main.css` automatically.

## Technical Details

- **Layouts**:
  - `css/layout.css` defines CSS Grid layouts (`.hero-grid`, `.highlights-grid`, `.menu-grid`, `.team-grid`, `.contact-grid`, `.footer-grid`).
  - `css/responsive.css` contains media queries that adjust grid columns and convert layouts to single-column for smaller screens.
- **SASS**:
  - `scss/_variables.scss` centralizes colors, radii, shadows, and container width.
  - `scss/_mixins.scss` defines reusable mixins for buttons, cards, and focus rings.
  - `scss/main.scss` wires everything together and shows how to map SCSS variables into CSS custom properties.
- **JavaScript**:
  - `js/main.js` handles:
    - Mobile menu open/close with `aria-expanded`
    - Auto-updating the footer year
    - Smooth scrolling for in-page anchor links
  - `js/form-validation.js`:
    - Validates required fields (`name`, `email`, `reason`, `message`)
    - Shows inline error messages and sets `aria-invalid`
    - Displays a simple success message (no real backend submission)

## Testing & Optimization Notes

- **Accessibility**:
  - Use your browser’s built-in accessibility tools (e.g., Lighthouse in Chrome DevTools) to check color contrast, headings, and ARIA usage.
- **Responsive Testing**:
  - Resize the browser or use device emulation in DevTools to test mobile, tablet, and desktop.
  - Test directly on a phone if possible.
- **Performance**:
  - Place compressed images in `images/optimized/` and point `<img>` tags there.
  - All content is static HTML/CSS/JS, so it can be served from any static host (GitHub Pages, Netlify, etc.).

## Screenshots (to add)

- Desktop screenshot of the homepage
- Mobile screenshot showing the open mobile navigation
- Contact page screenshot showing the form

Add these images to the `images/` folder and reference them here or in your documentation if needed.
