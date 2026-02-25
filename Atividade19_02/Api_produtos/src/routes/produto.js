import { Router } from "express";
import { getProdutos, editarProduto, deletaProduto, adicionarProduto } from "../controller/produtoController.js"

const router = Router();

router.get('/produto', getProdutos);
router.post('/produto', adicionarProduto);
router.patch('/produto/:id', editarProduto);
router.delete('/produto/:id', deletaProduto);

export { router };