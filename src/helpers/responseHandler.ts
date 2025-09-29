import type { Response } from 'express';

const responseHandler = <Data>(res: Response, status: number,
    message: string, data: Data | null = null): void => {
    res.status(status).json({
        status,
        message,
        data
    });
}

export default responseHandler;