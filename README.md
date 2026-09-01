# 🛍️ Luma Mercantile

A simple, full-stack **MERN e-commerce store** — a React storefront backed by an Express API with MongoDB models. Designed to run out of the box with a demo catalog, even without a database connection.

![MERN Stack](https://img.shields.io/badge/Stack-MERN-brightgreen)
![Node](https://img.shields.io/badge/Node.js-Express-blue)
![Frontend](https://img.shields.io/badge/Frontend-React-61DAFB)
![Database](https://img.shields.io/badge/Database-MongoDB-47A248)

---

## 📖 About

**Luma Mercantile** is a minimal e-commerce application built on the MERN stack. It ships with:

- A **React** storefront (client)
- An **Express** REST API (server)
- **MongoDB** models for products and orders
- A built-in **fallback catalog** so the app runs smoothly for demos even without MongoDB configured

---

## 🧱 Project Structure

```
code-Alpha/
├── client/          # React storefront
├── server/          # Express API + MongoDB models
├── package.json     # Root scripts (install:all, dev)
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm
- [MongoDB](https://www.mongodb.com/) *(optional — see below)*

### 1. Clone the repository

```bash
git clone https://github.com/RajputSivam/code-Alpha.git
cd code-Alpha
```

### 2. Install dependencies

```bash
npm install
npm run install:all
```

This installs dependencies for the root project, the `server`, and the `client`.

### 3. Run the app

```bash
npm run dev
```

This starts the **Express API** and the **React app** together (via `concurrently`).

### 4. Open the app

Visit **[http://localhost:5173](http://localhost:5173)** in your browser.

---

## 🗄️ Database (Optional)

MongoDB is **not required** to try the demo — the API automatically serves a fallback product catalog and accepts demo orders when MongoDB is unavailable.

To enable full persistence:

1. Copy the example environment file:
   ```bash
   cp server/.env.example server/.env
   ```
2. Start your local MongoDB instance.
3. Seed the database:
   ```bash
   npm run seed --prefix server
   ```

---

## 📜 Available Scripts (root)

| Script | Description |
|---|---|
| `npm run install:all` | Installs dependencies in both `server` and `client` |
| `npm run dev` | Runs the API and React app concurrently in dev mode |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React |
| Backend | Node.js, Express |
| Database | MongoDB |
| Tooling | Concurrently (for running client + server together) |

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📄 License

No license specified yet — consider adding one (e.g., MIT) to clarify how others can use this project.

---

## 👤 Author

**RajputSivam**
[GitHub Profile](https://github.com/RajputSivam)
