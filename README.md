# e-plantShopping — Paradise Nursery Plant Shopping Application

A React + Vite plant-shopping application built for the final project. It includes a landing page, company information, categorized plant listings, and a Redux Toolkit shopping cart.

## Features
- Landing page with a background image and **Get Started** button.
- About Us section.
- 3 plant categories with 6 unique plants in each category.
- Plant thumbnail, name, price, and Add to Cart button.
- Add button disables once that plant has been added.
- Shared navbar with Home, Plants, and Cart links.
- Dynamic cart item count.
- Redux Toolkit cart slice with `addItem`, `removeItem`, and `updateQuantity` reducers.
- Cart page with per-item totals, quantity controls, delete, total amount, checkout message, and continue shopping.
- Responsive layout for desktop and mobile.

## Run locally
1. Install Node.js (LTS recommended).
2. Extract the project ZIP and open the folder in a terminal.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open the local URL printed by Vite, usually `http://localhost:5173`.

To verify the production build:
```bash
npm run build
```

## Main files for assessment
- `README.md`
- `src/AboutUs.jsx`
- `src/App.css`
- `src/App.jsx`
- `src/CartSlice.jsx`
- `src/ProductList.jsx`
- `src/CartItem.jsx`

## Publish on GitHub
Create a **public** repository named `e-plantShopping`, upload the project files (including the `src` folder), then open each requested file on GitHub and copy its direct URL. Do not submit the example URLs; submit URLs from your own repository.
