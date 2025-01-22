import path from 'node:path';
import { Router } from "express";
import multer from 'multer';

import { listCategories } from "./app/useCases/categories/listCategories";
import { createCategory } from "./app/useCases/categories/createCategory";
import { listProducts } from "./app/useCases/products/listProducts";
import { createProduct } from "./app/useCases/products/createProduct";
import { listProductsByCategory } from './app/useCases/categories/listProductsByCategory';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  })
});

// List categories
router.get('/categories', listCategories);

// Create category
router.post('/categories', createCategory);

// List products
router.get('/products', listProducts);

// Create products
router.post('/products', upload.single('image'), createProduct);

// Get products by category
router.get('/categories/:categoryId/products', listProductsByCategory);

// List orders
router.get('/orders', (req, res) => {
  res.send('Ok');
});

// Create orders
router.post('/orders', (req, res) => {
  res.send('Ok');
});

// Change order status
router.patch('/orders/:orderId', (req, res) => {
  res.send('Ok');
});

// Delete/cancel order
router.delete('/orders/:orderId', (req, res) => {
  res.send('Ok');
});
