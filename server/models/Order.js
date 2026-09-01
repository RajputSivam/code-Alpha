import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    customer: { name: String, email: String, address: String },
    items: [{ product: String, name: String, price: Number, quantity: Number }],
    total: Number,
    status: { type: String, default: "received" }
}, { timestamps: true });

export default mongoose.model("Order", orderSchema);
