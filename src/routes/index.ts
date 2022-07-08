import {Router} from "express";

import battleRouter from "./battleRouter.js";

const routes = Router();
routes.use(battleRouter);

export default routes;



