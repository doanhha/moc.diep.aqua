require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());  

// Connect MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connect error:", err));

// Product schema khớp dữ liệu anh đang có trong Atlas
const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    categorySlug: { type: String, required: true },
    price: { type: Number, required: true },
    images: [String],
    origin: String,
    stock: Number,
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

// Chỉ định đúng collection "products"
const Product = mongoose.model("Product", ProductSchema, "products");

// API: lấy list sản phẩm
app.get("/api/products", async (req, res) => {
  try {
    const { categorySlug, q } = req.query;

    const filter = { isActive: true };
    if (categorySlug) filter.categorySlug = categorySlug;
    if (q) filter.name = { $regex: q, $options: "i" };

    const items = await Product.find(filter).sort({ createdAt: -1 });
    res.json(items);
  } catch (e) {
    res.status(500).json({ message: "Server error", error: String(e) });
  }
});

// API: chi tiết theo slug
app.get("/api/products/:slug", async (req, res) => {
  const item = await Product.findOne({ slug: req.params.slug, isActive: true });
  if (!item) return res.status(404).json({ message: "Not found" });
  res.json(item);
});

app.listen(process.env.PORT || 5000, () => {
  console.log("API running on port", process.env.PORT || 5000);
});
