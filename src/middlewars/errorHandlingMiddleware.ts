import { NextFunction, Response, Request } from "express";

export default async function errorHandler(
    error, req: Request, res: Response, next: NextFunction
) {
    console.log(error)
    if (error.response) {
        return res.sendStatus(error.response.status);
    }

    return res.sendStatus(500);
}