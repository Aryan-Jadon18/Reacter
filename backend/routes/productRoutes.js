import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import {
  getAllProducts,
  getMyProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductById
} from '../controllers/productController.js';

const router = express.Router();

router.get('/', getAllProducts); // ✅ THIS ONE
router.get('/my-products', protect, getMyProducts);
router.get('/:id', getProductById);
router.post('/', protect, createProduct);
router.put('/:id', protect, updateProduct);
router.delete('/:id', protect, deleteProduct);

export default router;
