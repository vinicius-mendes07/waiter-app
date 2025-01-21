import { Router } from "express";
import { listCategories } from "./app/useCases/categories/listCategories";
import { createCategory } from "./app/useCases/categories/createCategory";

export const router = Router();

// List categories
router.get('/categories', listCategories);

// Create category
router.post('/categories', createCategory);

// List products
router.get('/products', (req, res) => {
  res.send('Ok');
});

// Create products
router.post('/products', (req, res) => {
  res.send('Ok');
});

// Get products by category
router.get('/categories/:categoryId/products', (req, res) => {
  res.send('Ok');
});

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
