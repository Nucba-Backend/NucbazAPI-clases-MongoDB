import { NextFunction, Request, Response } from "express";

export const isVerified = (req: Request, res: Response, next: NextFunction) => {

    const {verify} = req.body.usuarioConfirmado;

    if (!verify) {
        res.status(401).json({
            msg: "El usuario no está correctamente verificado"
        })
        return
    }

    next();
}