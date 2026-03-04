// import express from 'express';
// import { authController } from '../../controller/authController/authcController.js';
const express = require('express')
const authController = require('../../controller/authController/authcController.js')

const authRoutes = express.Router();

authRoutes.post('/login', authController.login);
authRoutes.post('/registro', authController.registro);

// export default authRoutes;
module.export = authRoutes;