import { NextFunction, Request, Response } from "express";
import usersSchema from "../schemas/usersSchema.js";

export function checkIfUserExists(req: Request, res: Response, next: NextFunction) {
    const { 
        firstUser, 
        secondUser 
    }: {firstUser: string, secondUser: string} = req.body;
    const usersValidate = usersSchema.validate({firstUser, secondUser});

    if (usersValidate.error) {
        return res.status(422).json({error: "Invalid User"})
    }

    res.locals.users = {firstUser, secondUser};
    next();
}