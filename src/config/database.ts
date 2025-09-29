import 'dotenv/config';
import mongoose from 'mongoose';

class Database {
    constructor() {
        this.connect();
    }

    async connect(): Promise<void> {
        const queryString = process.env.MONGO_URI;

        try {
            if (!queryString) throw new Error("MONGO_URI no está definido en las variables de entorno.");
            await mongoose.connect(queryString);
            console.log('La conexión a la base de datos fue completada')
        } catch (error) {
            console.error('no se pudo realizar la conexión a la base de datos');
        }
    }

    async disconnect(): Promise<void> {
        try {
            await mongoose.disconnect();
            console.log('conexión a la base de datos cerrada');
        } catch (error) {
            console.error('Error al cerrar la conexión', error);
        }
    }
}

export default new Database();