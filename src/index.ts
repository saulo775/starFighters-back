
import express, { json } from "express";
import cors from "cors";
import "./setup.js";

import routes from "./routes/index.js";
import errorHandler from "./middlewars/errorHandlingMiddleware.js";

const app = express();
app.use(json());
app.use(cors());
app.use(routes);
app.use(errorHandler)


const PORT = process.env.PORT || 5500;

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}...`);
});