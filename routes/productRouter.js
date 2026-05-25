const express = require("express");

const router = express.Router();

const {
  getProducts,
  getProductById,
  createProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/productControllers");

// GET ALL PRODUCTS
router.get("/", getProducts);

// GET SINGLE PRODUCT
router.get("/:id", getSingleProduct);

// CREATE PRODUCT
router.post("/", createProduct);

// UPDATE PRODUCT
router.put("/:id", updateProduct);

// DELETE PRODUCT
router.delete("/:id", deleteProduct);

module.exports = router;