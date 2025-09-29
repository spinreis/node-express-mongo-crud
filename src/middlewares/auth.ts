import jsonwebtoken from 'jsonwebtoken';
import 'dotenv/config';
import type { Request, Response, NextFunction } from 'express';
import responseHandler from '../helpers/responseHandler.ts';
const jwt = jsonwebtoken;

declare global {
    namespace Express {
        interface Request {
            emailConectado?: string;
        }
    }
};

export function generateToken(email: string): string {
    if (!process.env.JWT_SECRET_TOKEN)
        throw new Error("JWT_SECRET_TOKEN no está definido en las variables de entorno.");

    return jwt.sign({email}, process.env.JWT_SECRET_TOKEN, {expiresIn: '1h'});
}

export function verificarToken(req: Request, res: Response, next: NextFunction): void {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token || !process.env.JWT_SECRET_TOKEN)
        return responseHandler(res, 401, "Token requerido");

    try {
        const dataToken = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
        if (typeof dataToken === 'object' && dataToken !== null) {
            req.emailConectado = dataToken.email;
            next();
        } else {
            return responseHandler(res, 401, "Formato de token inválido");
        }
    } catch (error) {
        return responseHandler(res, 401, "error: token no valido");
    }
}