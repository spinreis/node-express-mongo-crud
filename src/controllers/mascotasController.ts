import Controller from './controller.ts';
import type { Request, Response } from 'express';
import responseHandler from '../helpers/responseHandler.ts';
import mascotasModel from '../models/mascotasModel.ts';

class MascotasController extends Controller {
    constructor() { super(); }
    
    async create(req: Request, res: Response): Promise<void> {
        try {
            const data = await mascotasModel.create(req.body);
            responseHandler(res, 201, 'mascota creada', data);
        } catch (error) {
            console.error('Error en la creacion del recurso', error);
            responseHandler(res, 500, 'Error interno del servidor al crear la mascota');
        }
    }

    async getOne(req: Request, res: Response): Promise<void> {
        try {
            const data = await mascotasModel.getOne(req.params.id);

            if (!data) return responseHandler(res, 404, "no se encontró la mascota");

            responseHandler(res, 200, 'esta es la mascota', data);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async getAll(req: Request, res: Response): Promise<void> {
        try {
            const data = await mascotasModel.getAll();
            responseHandler(res, 200, 'estas son las mascotas', data);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async update(req: Request, res: Response): Promise<void> {
        try {
            const data = await mascotasModel.update(req.params.id, req.body);
            return responseHandler(res, 200, 'mascota actualizada', data);
        } catch (error) {
            console.log(error);
            res.status(500).send(error);
        }
    }

    async delete(req: Request, res: Response): Promise<void> {
        try {
            const data = await mascotasModel.delete(req.params.id);

            if (!data) return responseHandler(res, 404, "la mascota no existía");

            responseHandler(res, 204, 'mascota borrada');
        } catch (error) {
            res.status(500).send(error);
        }
    }
};

export default new MascotasController;