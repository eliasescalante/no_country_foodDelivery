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

     // Método para obtener productos de comida por categoría o nombre ---> aca no se si pasarlo a params o dejarlo por query
    async searchFood(req, res) {
        try {
            const { category, name } = req.query;
            let filter = { category: 'food' };
            if (category) {
                filter.category = category;
            }
            if (name) {
                filter.title = { $regex: name, $options: 'i' };
            }
            const products = await Food.find(filter);
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: 'Error buscando productos de comida: ' + error.message });
        }
    }

     // Método para agregar un producto de comida en la db
    async addFood(req, res) {
        try {
            const { name, price, description, category, imageUrl, restaurantId } = req.body;
            if (!name || !price || !restaurantId) {
                return res.status(400).json({ message: 'Nombre, precio y restaurantId son requeridos.' });
            }
            const newFood = new Food({
                name,
                price,
                description,
                category,
                imageUrl,
                restaurant: restaurantId  // ID del restaurante es necesario pasarlo --> pense aca pasar esto con una funcion que recupere el id del cliente vendedor logeado pero es una idea
            });
            const savedFood = await newFood.save();
            res.status(201).json(savedFood);
        } catch (error) {
            res.status(500).json({ message: 'Error al agregar el producto de comida: ' + error.message });
        }
    }


}

export default new FoodController();
