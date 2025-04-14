import express from 'express';
import { crearJuego, obtenerJuegos, obtenerJuegoConcreto } from '../controllers/game.controller.js';
import { verificarToken } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/', verificarToken, crearJuego);
router.get('/', verificarToken, obtenerJuegos);
router.get('/:id', verificarToken, obtenerJuegoConcreto);

export default router;
