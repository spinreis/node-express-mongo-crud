import type { ObjectId } from "mongodb";

export type Mascota = {
    nombre?: string;
    edad?: number;
    tipo?: string;
    raza?: string;
    isAdoptado?: boolean;
    _id?: ObjectId;
}