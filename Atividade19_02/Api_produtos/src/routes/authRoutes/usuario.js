import  { createUser, loginUser}  from '../../controller/authController/usuarioController.js'
import { Router } from "express";

const routerUser = Router();

routerUser.post('/registro', createUser);
routerUser.post('/login', loginUser);


export default routerUser;