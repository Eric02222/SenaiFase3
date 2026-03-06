const express = require('express');
const routerUser = express.Router();

const { createUser } = require('../../controller/authController/usuarioController.js')
const { loginUser } = require('../../controller/authController/usuarioController.js')


routerUser.post('/registro', createUser);
routerUser.post('/login', loginUser);


module.exports = routerUser;