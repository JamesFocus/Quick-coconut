# Daily Café — Prepared Products Showcase

A clean, responsive showcase website for prepared drinks, food and café products.

## Files

- `index.html` — page structure
- `style.css` — responsive design
- `script.js` — product data and category filtering

## Run

No Node.js is required.

Open `index.html` directly in a browser, or use VS Code Live Server.

## Customize products

Open `script.js` and edit the `products` array:

{
  name: "Your Product",
  category: "drink",
  icon: "🥤",
  description: "Short description.",
  price: "฿65"
}

Categories:
- drink
- food
- cafe

## Customize Google Maps

In `index.html`, replace the iframe `src` with your Google Maps Embed URL.

Also update the "Open in Google Maps" link and the address/contact information.

## Add real product photos

The demo uses emoji as placeholders so it works immediately without image files.

For a real shop, replace:

<div class="product-visual">🥤</div>

with:

<div class="product-visual">
  <img src="images/iced-latte.jpg" alt="Iced Latte">
</div>

Then add CSS for `.product-visual img`.
