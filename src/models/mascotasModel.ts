import type Model from './model.ts';
import type { Mascota } from '../types/Mascota.ts';
import mascotaSchema from '../schemas/mascotasSchemas.ts';
import mongoose from 'mongoose';

class MascotasModel implements Model<Mascota> {
    async create(mascota: Mascota): Promise<Mascota> {
        return await mascotaSchema.create(mascota);
    }

    async getOne(id: string | undefined): Promise<Mascota> {
        const mascota = await mascotaSchema.findById({_id: new mongoose.Types.ObjectId(id)});
        return mascota as Mascota;
    }

    async getAll(): Promise<Array<Mascota>> {
        return await mascotaSchema.find();
    }

    async update(id: string | undefined, mascota: Mascota): Promise<Mascota | null> {
        if (!id)
            return null;

        const mascotaActualizada = await mascotaSchema.findOneAndUpdate({_id: new mongoose.Types.ObjectId(id), mascota, new: true});
        return mascotaActualizada as Mascota;
    }
    
    async delete(id: string | undefined): Promise<Mascota | void> {
        const mascotaBorrada = await mascotaSchema.findOneAndDelete({_id: new mongoose.Types.ObjectId(id)});
        return mascotaBorrada as Mascota;
    }
}

export default new MascotasModel;