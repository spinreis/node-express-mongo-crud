import type { ObjectId } from 'mongodb';

export type Usuario = {
    _id?: ObjectId;
    email: string;
    nombre: String;
    telefono: String;
    clave: string
}