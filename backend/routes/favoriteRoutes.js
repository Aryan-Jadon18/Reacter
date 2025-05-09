import express from 'express';
import { getFavorites, addFavorite, removeFavorite } from '../controllers/favoritesController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(protect); // all routes below are protected

router.get('/', getFavorites);
router.post('/', addFavorite);
router.delete('/:id', removeFavorite);

export default router;
