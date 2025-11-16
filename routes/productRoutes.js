import express from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";



const router = express.Router();

// Public: Get all products, Create new product
router.get("/", getProducts);
router.post("/", createProduct);

// Public: Get, Update, Delete single product by ID
router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
