import type { Request, Response } from 'express';
import responseHandler from '../helpers/responseHandler.ts';
import usuariosModel from '../models/usuariosModel.ts';
import bcrypt from 'bcrypt';
import { generateToken } from '../middlewares/auth.ts';

class UsuariosController {
    async register(req: Request, res: Response): Promise<void> {
        try {
            const { email, nombre, telefono, clave } = req.body;

            const isUsuario = await usuariosModel.findOne({ email });
            if (isUsuario) {
                return responseHandler(res, 409, "el usuario ya existe");
            }

            const claveEncriptada = await bcrypt.hash(clave, 10);

            const data = await usuariosModel.create({
                email, nombre, telefono, clave: claveEncriptada
            });
            responseHandler(res, 201, 'usuario creado', data);
        } catch (error) {
            console.error('Error en la creacion del recurso', error);
            responseHandler(res, 500, 'Error interno del servidor al crear el usuario');
        }
    }

    async login(req: Request, res: Response): Promise<void> {
        const { email, clave } = req.body;

        const usuario = await usuariosModel.getOneByFilter({ email });
        console.log(usuario);
        
        if (!usuario)
            return responseHandler(res, 404, 'el usuario no existe');

        const isValida = await bcrypt.compare(clave, usuario.clave);

        if (!isValida)
            return responseHandler(res, 401, 'la clave es invalida');

        const token = generateToken(email);

        return responseHandler(res, 200, `se ha verificado al usuario satisfactoriamente ${token}`);
    }

    async profile(req: Request, res: Response): Promise<void> {
        try {
            const data = await usuariosModel.getOneByFilter({email: req.emailConectado});

            if (!data)
                return responseHandler(res, 404, "no se encontró el usuario");

            responseHandler(res, 200, 'este es el usuario', data);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async getAll(req: Request, res: Response): Promise<void> {
        try {
            const data = await usuariosModel.getAll();
            responseHandler(res, 200, 'estos son los usuarios', data);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async update(req: Request, res: Response): Promise<void> {
        try {
            const data = await usuariosModel.update(req.params.id, req.body);
            responseHandler(res, 200, 'usuario actualizado', data);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async delete(req: Request, res: Response): Promise<void> {
        try {
            const data = await usuariosModel.delete(req.params.id);

            if (!data) return responseHandler(res, 404, "la mascota no existía");

            responseHandler(res, 204, 'mascota borrada');
        } catch (error) {
            res.status(500).send(error);
        }
    }
};

export default new UsuariosController();