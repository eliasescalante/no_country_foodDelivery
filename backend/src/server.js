// ya configure la variable de entorno
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import configObject from './config/config.js';
import userRoutes from './routes/userRoutes.js';
import open from 'open';  // Importa el paquete open para abrir de una la pagina al iniciar
import foodRoutes from './routes/foodRoutes.js';
import restaurantRoutes from './routes/restaurantRoutes.js';

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
app.use('api/food', foodRoutes);
app.use('api/restaurant', restaurantRoutes);

// Inicia el servidor y abre la página en el navegador
app.listen(puerto, async () => {
    console.log(`Servidor en funcionamiento en http://localhost:${puerto}`);
    await open(`http://localhost:${puerto}`);  // Abre la URL en el navegador
});
