import express from 'express';
import FoodController from '../controllers/food.controller.js';

const router = express.Router();

// Ruta para obtener todos los productos de comida
router.get('/', FoodController.allFoods);
// Ruta para buscar productos de comida por categoría o nombre --> usa query pero no se si cambiarlo a params
router.get('/search', FoodController.searchFoodProducts);
// Ruta para agregar comida --> falta agregar un filtro paraque solo acceda un cliente que sea vendedor, para limitar la vista
router.post('/add', FoodController.addFoodProduct);



export default router;
