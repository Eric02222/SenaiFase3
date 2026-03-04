import { Router } from 'express';
import { pranchaController } from '../controllers/Prancha/pranchaController.js';

export const pranchaRouter = Router();

pranchaRouter.get("/prancha", pranchaController.getTodasPranchas);

pranchaRouter.get("/prancha/:id", pranchaController.getPranchaPorId);

pranchaRouter.post("/prancha", pranchaController.criarPrancha);

pranchaRouter.put("/prancha/:id", pranchaController.atualizarprancha);

pranchaRouter.delete("/prancha/:id", pranchaController.deletarPrancha);