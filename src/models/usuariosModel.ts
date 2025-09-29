import mongoose, { type RootFilterQuery } from 'mongoose';
import type Model from './model.ts';
import type { Usuario } from '../types/Usuario.ts';
import usuarioSchema from '../schemas/usuariosSchemas.ts';

class UsuariosModel implements Model<Usuario> {
    [x: string]: any;
    async create(usuario: Usuario): Promise<Usuario> {
        return await usuarioSchema.create(usuario);
    }

    async getOne(id: string | undefined): Promise<Usuario> {
        const usuario = await usuarioSchema.findById({_id: new mongoose.Types.ObjectId(id)});
        return usuario as Usuario;
    }

    async getOneByFilter(filter: RootFilterQuery<Usuario>): Promise<Usuario | null> {
        return await usuarioSchema.findOne(filter);
    }

    async getAll(): Promise<Array<Usuario>> {
        return await usuarioSchema.find();
    }

    async update(id: string | undefined, usuario: Usuario): Promise<Usuario | null> {
        if (!id) return null;

        const usuarioActualizado = await usuarioSchema.findOneAndUpdate({_id: new mongoose.Types.ObjectId(id), $set: usuario, new: true});
        return usuarioActualizado as Usuario;
    }
    
    async delete(id: string | undefined): Promise<Usuario | void> {
        const usuarioBorrado = await usuarioSchema.findOneAndDelete({_id: new mongoose.Types.ObjectId(id)});
        return usuarioBorrado as Usuario;
    }
}

export default new UsuariosModel;