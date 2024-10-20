import User from "../models/user.model.js";
import Cart from "../models/cart.model.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

// Registro de usuarios
export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ message: "El usuario ya existe" });

    //Si no existe, creo un usuario nuevo, al cual se asociará un carrito
    let cart = new Cart({ order: [] });
    
    
    await cart.save();
    console.log('Carrito:', cart);

    // Determino el rol del usuario según el email
    let role;
    if (email === "restaurante@gmail.com") {
      role = "restaurante";
    } else if (email === "repartidor@gmail.com") {
      role = "repartidor";
    } else {
      role = "cliente";
    }

    const user = new User({ name, email, password, role, cart: cart._id  });
    
    
    await user.save();
    console.log('Usuario:', user);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      cart: user.cart,
      token: generateToken(user._id),
    });
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    res.status(500).json({ message: "Error al registrar usuario" });
  }
};

// Autenticación (Login)
export const authUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: "Credenciales inválidas" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al autenticar usuario" });
  }
};

// Generar JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};
