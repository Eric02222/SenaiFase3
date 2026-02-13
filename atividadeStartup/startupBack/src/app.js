import express from 'express';
import cors from 'cors';
import autenticacaoRoutes from './routes/RoutesAutenticacoes.js';

const app = express();
app.use(cors());

app.use(express.json());

//todas rotas
app.use("/usuarios", autenticacaoRoutes);

export default app;