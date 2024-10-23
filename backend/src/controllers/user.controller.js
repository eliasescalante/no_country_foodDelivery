import User from "../models/user.model.js";
import Cart from "../models/cart.model.js";
import Restaurant from "../models/restaurant.model.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

// Registro de usuarios
export const registerUser = async (req, res) => {
  const {
    name,
    email,
    password,
    description,
    menu,
    address,
    neighborhood,
    city,
  } = req.body;
  try {
    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ message: "El usuario ya existe" });

    let role;
    let user;

    // Determino el rol del usuario según el email
    if (email.endsWith("@cliente.com")) {
      role = "cliente";

      // Creo el usuario con un carrito
      user = new User({ name, email, password, role });
      await user.save();

      const cart = new Cart({ order: [] });
      await cart.save();
      user.cart = cart._id;
      await user.save();
    } else if (email.endsWith("@restaurant.com")) {
      role = "restaurant";

      user = new User({ name, email, password, role });
      await user.save();

      // Creo el restaurante con los campos específicos y asocio al usuario
      const restaurant = new Restaurant({
        name: name,
        description: description,
        menu: menu || [],
        address: address,
        neighborhood: neighborhood,
        city: city,
        owner: user._id, // Asocio el restaurant con el usuario
      });

      await restaurant.save();
    } else {
      role = "repartidor";

      // Creo el usuario con rol 'repartidor'
      user = new User({ name, email, password, role });
      await user.save();
    }

    // Genero token
    const token = generateToken(user._id);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: token,
    });

    //Establezco el token como cookie
    res.cookie("cookieToken", token, {
      maxAge: 3600000,
      httpOnly: true,
      sameSite: "strict",
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
      const token = generateToken(user._id);

      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: token,
      });

      res.cookie("cookieToken", token, {
        maxAge: 3600000, // 1 hora
        httpOnly: true,
        sameSite: "strict",
      });
    } else {
      res.status(401).json({ message: "Credenciales inválidas" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al autenticar usuario" });
  }
};

// Genero JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};
