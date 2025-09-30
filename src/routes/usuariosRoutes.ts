import express from 'express';
import usuarios from '../controllers/usuariosController.ts';
import { verificarToken } from '../middlewares/auth.ts';

const router = express.Router();

router.post('/register', usuarios.register);
router.post('/login', usuarios.login);
router.get('/profile', verificarToken, usuarios.profile);

export default router;