import express from 'express';
import cors from 'cors';
import {router} from './routes/produto.js'
import routerUser from './routes/authRoutes/usuario.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use(router)

app.use(routerUser)


export {app};