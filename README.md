# Paradise Nursery Shopping Application

Paradise Nursery is a React single-page shopping application for a fictional
plant shop. Customers can browse houseplants grouped by category, add them to a
Redux-managed shopping cart, and review quantities and totals on a dedicated
cart page.

This project was built as the graded final project for the IBM "Developing
Front-End Apps with React" course.

## Features

- **Landing page** (`/`) with the company name, a description, a plant
  background image, and a **Get Started** button that opens the shop.
- **Product listing** (`/plants`) with **3 categories** and **6 unique plants
  per category** (18 plants total). Every card shows a thumbnail, the plant
  name, the price, and an **Add to Cart** button.
- **Shopping cart** (`/cart`) showing the total number of plants, the total
  cost, and per-item quantity controls (increase/decrease), per-item totals, and
  delete buttons.
- **Navbar** on the Plants and Cart pages with links to Home, Plants, and Cart
  and a cart icon that shows the total quantity of items.
- **Redux Toolkit** cart state that persists while navigating between pages, so
  "Add to Cart" buttons stay disabled for products already in the cart.

## Tech stack

- React 19
- Vite
- Redux Toolkit + React Redux
- React Router (HashRouter, for reliable GitHub Pages hosting)
- Plain CSS

## Project structure

```text
src/
├── App.jsx          # routes + landing page (Get Started)
├── App.css          # global styles + landing page background image
├── AboutUs.jsx      # company description used on the landing page
├── Header.jsx       # navbar with dynamic cart badge
├── ProductList.jsx  # 18 plants across 3 categories
├── CartItem.jsx     # shopping cart page
├── CartSlice.jsx    # Redux Toolkit cart slice
├── store.js         # Redux store configuration
├── main.jsx         # app entry (Provider + HashRouter)
└── data/plants.js   # plant catalogue and image URL helper
```

## Deployment (GitHub Pages)

The app uses `HashRouter` and a relative Vite `base`, so the built `dist/`
folder can be published to any GitHub Pages project path without extra
rewriting. Run `npm run build` and publish the `dist/` directory.
