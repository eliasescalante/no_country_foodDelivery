import express from 'express';
import RestaurantController from '../controllers/restaurant.controller.js';

const router = express.Router();

router.get('/', RestaurantController.allRestaurants);

export default router;
