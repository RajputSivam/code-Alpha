import "dotenv/config";
import mongoose from "mongoose";
import Product from "./models/Product.js";

const products = [
  { name: "Aster Desk Lamp", category: "Lighting", description: "A warm, sculptural glow for late-night ideas and slow mornings.", price: 84, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85", badge: "Bestseller", featured: true },
  { name: "Mori Lounge Chair", category: "Furniture", description: "Low-slung comfort with a generous seat and natural oak frame.", price: 420, image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=900&q=85", badge: "New", featured: true },
  { name: "Forma Ceramic Set", category: "Objects", description: "Three hand-finished forms that bring quiet character to a shelf.", price: 68, image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=900&q=85", featured: true },
  { name: "Linea Carryall", category: "Travel", description: "An everyday canvas bag with room for the essentials and then some.", price: 112, image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=900&q=85", badge: "Limited" },
  { name: "No. 04 Candle", category: "Objects", description: "Cedar, fig leaf, and a hint of smoke in a matte glass vessel.", price: 34, image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=900&q=85" },
  { name: "Kanso Throw", category: "Textiles", description: "Soft woven cotton with a subtle check that layers anywhere.", price: 96, image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=900&q=85" }
];

await mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/luma_mercantile");
await Product.deleteMany({});
await Product.insertMany(products);
console.log(`Seeded ${products.length} products`);
await mongoose.disconnect();
