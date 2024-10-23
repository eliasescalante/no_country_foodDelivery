import express from 'express';
import RestaurantController from '../controllers/restaurant.controller.js';

const router = express.Router();

// ruta para obtener todos los restaurant de la db
router.get('/', RestaurantController.allRestaurants);
// ruta para filtrar los restaurant por nombre o categoria
router.get('/search', RestaurantController.searchRestaurants);

//ruta para obtener un restaurante por solo el id
router.get('/:id',  RestaurantController.restaurantById)

export default router;
