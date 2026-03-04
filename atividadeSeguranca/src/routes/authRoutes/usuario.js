const express = require('express');
const routerUser = express.Router();

const { createUser } = require('../../controller/authController/usuarioController.js')

routerUser.post('/usuario', createUser);

module.exports = routerUser ;