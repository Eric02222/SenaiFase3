import { Router } from "express";
import { getProdutos } from "../controller/produtoController.js"

const router = Router();

router.get('/produto', getProdutos);

export {router};