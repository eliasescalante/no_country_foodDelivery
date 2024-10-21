// controllers/food.controller.js
import Food from '../models/food.model.js';
import mongoose from "mongoose";

class FoodController {
    // Método para obtener todos los productos de comida
    async allFoods(req, res) {
        try {
            const products = await Food.find();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: 'Error obteniendo productos de comida: ' + error.message });
        }
    }
}

export default new FoodController();
