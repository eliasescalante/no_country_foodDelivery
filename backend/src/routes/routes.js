import { Router } from 'express';
import userRoutes from './userRoutes.js';

const routes = Router();

// Modularización de rutas

routes.use('/users', userRoutes);

export default routes
