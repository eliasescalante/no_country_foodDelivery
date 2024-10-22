// controllers/restaurant.controller.js
import Restaurant from '../models/restaurant.model.js';
import mongoose from "mongoose";

class RestaurantController { 
    // Método para obtener todos los restaurantes
    async allRestaurants(req, res) {
        try {
            const restaurants = await Restaurant.find();
            res.status(200).json(restaurants);
        } catch (error) {
            res.status(500).json({ message: 'Error obteniendo los restaurantes: ' + error.message });
        }
    }

     // Método para obtener restaurantes por categoría o nombre usando query
    async searchRestaurants(req, res) {
        try {
            const { category, name } = req.query;
            let filter = {};
            if (category) {
                filter.category = category;
            }
            if (name) {
                filter.name = { $regex: name, $options: 'i' };
            }
            const restaurants = await Restaurant.find(filter);
            res.status(200).json(restaurants);
        } catch (error) {
            res.status(500).json({ message: 'Error buscando restaurantes: ' + error.message });
        }
    }

}

export default new RestaurantController();
