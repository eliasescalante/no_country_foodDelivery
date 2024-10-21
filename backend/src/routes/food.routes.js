import express from 'express';
import FoodController from '../controllers/food.controller.js';

const router = express.Router();

// Ruta para obtener todos los productos de comida
router.get('/', FoodController.allFoods);

export default router;
