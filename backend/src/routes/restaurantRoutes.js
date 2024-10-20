import express from 'express';
import { registerUser, authUser } from '../controllers/restaurantController.js';

const router = express.Router();

router.get('/restaurant', allRestaurant);

export default router;
