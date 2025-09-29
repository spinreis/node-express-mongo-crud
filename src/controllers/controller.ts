import type { Request, Response, NextFunction } from "express";

abstract class Controller {
    constructor() {}

    abstract create(req: Request, res: Response): Promise<void>;
    abstract getOne(req: Request, res: Response): Promise<void>;
    abstract getAll(req: Request, res:Response, next: NextFunction): Promise<void>;
    abstract update(req: Request, res: Response): Promise<void>;
    abstract delete(req: Request, res: Response): Promise<void>;
};

export default Controller;