// ya configure la variable de entorno
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import configObject from './config/config.js';
import open from 'open';  // Importa el paquete open para abrir de una la pagina al iniciar
import userRoutes from './routes/user.routes.js';
import foodRoutes from './routes/food.routes.js';
import restaurantRoutes from './routes/restaurant.routes.js';

const app = express();
const { mongo_url, puerto } = configObject;
// conexion a la base de datos [done mi cluster]
mongoose.connect(mongo_url)
    .then(() => console.log("Conexión exitosa!"))
    .catch((error) => console.log("Error en la conexión", error));

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/foods', foodRoutes);
app.use('/api/restaurants', restaurantRoutes);

// Inicia el servidor y abre la página en el navegador
app.listen(puerto, async () => {
    console.log(`Servidor en funcionamiento en http://localhost:${puerto}`);
    await open(`http://localhost:${puerto}`);  // Abre la URL en el navegador
});
