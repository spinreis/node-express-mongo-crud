import mongoose from "mongoose";
import type { Mascota } from "../types/Mascota.ts";

const collectionName = 'mascotas';

const mascotaSchema = new mongoose.Schema<Mascota>(
    {
        nombre: {
            type: String,
            required: true
        },
        tipo: {
            type: String,
            required: true,
            enum: [
                "perro", "gato"
            ]
        },
        raza: {
            type: String,
            required: true,
            default: "desconocida"
        },
        edad: {
            type: Number,
            min: [0, 'la edad no puede ser negativa'],
            max: [20, 'la edad no parece correcta']
        },
        isAdoptado: {
            type: Boolean,
            default: false
        }
    }, {timestamps: true}
);

export default mongoose.model(collectionName, mascotaSchema);