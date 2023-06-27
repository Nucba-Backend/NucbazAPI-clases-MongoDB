import { NextFunction, Request, Response } from "express";

export const isVerified = (req: Request, res: Response, next: NextFunction) => {

    const {code} = req.body.usuarioConfirmado;

    if (!code) {
        res.status(401).json({
            msg: "El usuario no está correctamente verificado"
        })
        return
    }

    next();
}