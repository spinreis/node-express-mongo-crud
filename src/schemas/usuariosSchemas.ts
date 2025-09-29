import mongoose from 'mongoose';
import type { Usuario } from '../types/Usuario.ts';

const collectionName = 'usuarios';

const usuariosSchema = new mongoose.Schema<Usuario>(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        nombre: {
            type: String,
            required: true,
            trim: true
        },
        telefono: {
            type: String,
            required: false
        },
        clave: {
            type: String,
            required: true
        }
    }
);

export default mongoose.model('usuarios', usuariosSchema);