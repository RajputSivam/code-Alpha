# Luma Mercantile

A simple MERN e-commerce store with a React storefront, Express API, and MongoDB models.

## Run locally

1. Install dependencies:
   `npm install`
   `npm run install:all`
2. Start the API and React app together:
   `npm run dev`
3. Open `http://localhost:5173`.

MongoDB is optional for the demo: the API serves a fallback catalog and accepts demo orders when MongoDB is unavailable. To use persistence, copy `server/.env.example` to `server/.env`, start MongoDB, then run `npm run seed --prefix server`.
