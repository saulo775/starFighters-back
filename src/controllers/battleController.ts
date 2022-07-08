import { Request, Response } from "express";
import { battleService } from "../services/battleService.js";

export async function createBattle(req: Request, res: Response) {
    const {firstUser, secondUser} = res.locals.users;

    const battleResult = await battleService.battle(firstUser, secondUser);
    
    res.send(battleResult);
}