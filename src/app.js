import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import gameRoutes from './routes/game.routes.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/games', gameRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log(' Conectado a MongoDB Atlas'))
.catch(err => console.error(' Error al conectar a MongoDB:', err));

export default app;
