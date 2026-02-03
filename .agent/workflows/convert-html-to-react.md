---
description: How to convert HTML/Tailwind designs to pixel-perfect React components
---

This workflow defines the "Exact Design Method" for converting provided HTML/Tailwind templates into React components with CSS Modules, ensuring 1:1 visual fidelity.

### 1. Structure Conversion
- Create a new `{ComponentName}.jsx` and `{ComponentName}.module.css`.
- Convert HTML classes to `styles.{className}` in JSX.
- Use semantic HTML tags where possible.
- Use `lucide-react` for icons if original uses Lucide/FontAwesome.

### 2. Styling (The "Exact Design" Rule)
- **Use Pixel (px) Units**: Always use `px` for `font-size`, `padding`, `margin`, `width`, `height`, and `gap`. 
- **Ignore Global Rem Scaling**: Do not use `rem` units to avoid being affected by global root font-size overrides (e.g., `66.5%`).
- **1:1 Alignment**: Match every CSS property (colors, gradients, shadows, transitions) exactly as defined in the source HTML's `<style>` or Tailwind classes.
- **Glassmorphism**: Implement `backdrop-filter`, `background: rgba(...)`, and borders for glass effects as seen in the design.

### 3. Layout Integration
- If the page requires a unique navbar or layout, detach it from the common site layout (e.g., move the route outside of `UserLayout`).
- Ensure the component is fully responsive using MEDIA QUERIES in the module CSS.

### 4. Logic & State
- Convert static elements (FAQs, Carousels, Forms) to interactive React states using `useState`.
- Implement infinite scrolling animations using CSS `@keyframes` and `animation`.

### 5. Verification
- Compare the implemented React page with the original HTML design.
- Verify that typography is identical in size and weight.
- Ensure all hover effects and animations match the source.
