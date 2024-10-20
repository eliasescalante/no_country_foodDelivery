import express from 'express';
import RestaurantController from '../controllers/restaurant.controller.js';

const router = express.Router();

router.get('/restaurant', RestaurantController.allRestaurant);

export default router;
