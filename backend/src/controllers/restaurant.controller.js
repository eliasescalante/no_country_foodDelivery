// controllers/restaurant.controller.js
import Restaurant from '../models/restaurant.model.js';
import Food from '../models/food.model.js';


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

    //metodo para obtener restaurante por id y sus foods
    async restaurantById(req, res){
        try {
            const { id } = req.params;
           // console.log("este es el id obtenido", id)
            const restaurant = await Restaurant.findById(id)
            if(!restaurant){
                return res.status(404).json({ message: 'Restaurante no encontrado' });
            }

            const foods = await Food.find({restaurant:id})
            
            res.status(200).json({restaurant,foods})

        } catch (error) {
            res.status(500).json({message: 'Error al obtener el restaurante'})
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
