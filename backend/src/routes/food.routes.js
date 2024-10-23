import express from "express";
import FoodController from "../controllers/food.controller.js";
import { protect } from "../middlewares/auth.middleware.js";
import { authorizeRoles } from "../middlewares/role.middleware.js";

const router = express.Router();

// Ruta para obtener todos los productos de comida
router.get("/", FoodController.allFoods);
// Ruta para buscar productos de comida por categoría o nombre --> usa query pero no se si cambiarlo a params...AGREGO PROTECT Y authorizeRoles
router.get(
  "/search",
  protect,
  authorizeRoles("cliente"),
  FoodController.searchFood
);
// Ruta para agregar comida --> falta agregar un filtro paraque solo acceda un cliente que sea vendedor, para limitar la vista
router.post(
  "/add",
  //protect,
  //authorizeRoles("restaurant"),
  FoodController.addFood
);

export default router;
