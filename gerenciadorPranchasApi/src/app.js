import express from "express";
import cors from 'cors';
import { pranchaRouter } from "./routes/pranchaRouter.js";


const app = express();

app.use(cors());
app.use(express.json());

app.use(pranchaRouter)


export default app;