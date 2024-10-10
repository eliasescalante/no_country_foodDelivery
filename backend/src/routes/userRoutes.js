import { Router } from 'express';
import { registerUser, authUser } from '../controllers/userController.js';

const userRoutes = Router();

userRoutes.post('/register', registerUser);
userRoutes.get('/login', authUser);

export default userRoutes;
