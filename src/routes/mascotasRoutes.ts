import { Router } from 'express';
import mascotas from '../controllers/mascotasController.ts';
import { verificarToken } from '../middlewares/auth.ts';
const router = Router();

router.get('/', mascotas.getAll);
router.get('/:id', mascotas.getOne);
router.post('/', mascotas.create);
router.put('/:id', verificarToken, mascotas.update);
router.delete('/:id', verificarToken, mascotas.delete);

export default router;