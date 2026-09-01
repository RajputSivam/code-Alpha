import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Product from "./models/Product.js";
import Order from "./models/Order.js";

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const fallbackProducts = [
  { _id: "1", name: "Aster Desk Lamp", category: "Lighting", description: "A warm, sculptural glow for late-night ideas and slow mornings.", price: 84, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85", badge: "Bestseller", featured: true },
  { _id: "2", name: "Mori Lounge Chair", category: "Furniture", description: "Low-slung comfort with a generous seat and natural oak frame.", price: 420, image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=900&q=85", badge: "New", featured: true },
  { _id: "3", name: "Forma Ceramic Set", category: "Objects", description: "Three hand-finished forms that bring quiet character to a shelf.", price: 68, image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=900&q=85", featured: true },
  { _id: "4", name: "Linea Carryall", category: "Travel", description: "An everyday canvas bag with room for the essentials and then some.", price: 112, image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=85", badge: "Limited" },
  { _id: "5", name: "No. 04 Candle", category: "Objects", description: "Cedar, fig leaf, and a hint of smoke in a matte glass vessel.", price: 34, image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=900&q=85" },
  { _id: "6", name: "Kanso Throw", category: "Textiles", description: "Soft woven cotton with a subtle check that layers anywhere.", price: 96, image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=900&q=85" }
];

app.get("/api/products", async (_req, res) => {
  try { const products = await Product.find().lean(); res.json(products.length ? products : fallbackProducts); }
  catch { res.json(fallbackProducts); }
});
app.get("/api/products/:id", async (req, res) => {
  try { const product = await Product.findById(req.params.id).lean(); if (product) return res.json(product); }
  catch { }
  const product = fallbackProducts.find((item) => item._id === req.params.id);
  product ? res.json(product) : res.status(404).json({ message: "Product not found" });
});
app.post("/api/orders", async (req, res) => {
  const { customer, items, total } = req.body;
  if (!customer?.name || !customer?.email || !customer?.address || !items?.length) return res.status(400).json({ message: "Complete customer details and cart items are required." });
  try { const order = await Order.create({ customer, items, total }); res.status(201).json({ orderId: order._id }); }
  catch { res.status(201).json({ orderId: `LM-${Date.now().toString().slice(-6)}` }); }
});

const server = app.listen(port, () => console.log(`API running at http://localhost:${port}`));
server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    console.error(`Port ${port} is already in use. Stop the other backend process or set a different PORT.`);
    process.exit(1);
  }
  throw error;
});
mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/luma_mercantile", { serverSelectionTimeoutMS: 1500 })
  .then(() => console.log("MongoDB connected"))
  .catch(() => console.log("MongoDB unavailable: using demo catalog mode"));
