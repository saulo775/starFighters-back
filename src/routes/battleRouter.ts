import { Router } from "express";
import { createBattle } from "../controllers/battleController.js";

import {checkIfUserExists} from  "../middlewars/checkIfUsersExists.js";

const battleRouter = Router();

battleRouter.post("/battle", checkIfUserExists, createBattle);

export default battleRouter;