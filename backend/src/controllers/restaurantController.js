// controllers/restaurant.controller.js
import Restaurant from '../models/restaurant.model.js';

class RestaurantController { //agregue el metodo pero no lo probe
    // Método para obtener todos los restaurantes
    async allRestaurant(req, res) {
        try {
            const restaurants = await Restaurant.find();
            res.status(200).json(restaurants);
        } catch (error) {
            res.status(500).json({ message: 'Error obteniendo los restaurantes: ' + error.message });
        }
    }
}

export default new RestaurantController();
