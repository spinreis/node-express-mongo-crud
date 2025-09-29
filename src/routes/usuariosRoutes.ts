import express from 'express';
import usuariosController from '../controllers/usuariosController.ts';
import { verificarToken } from '../middlewares/auth.ts';

const router = express.Router();

router.post('/register', usuariosController.register);
router.post('/login', usuariosController.login);
router.get('/profile', verificarToken, usuariosController.profile);

export default router;