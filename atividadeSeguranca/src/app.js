// import express from 'express';
// import cors from 'cors';
// import authRoutes from './routes/authRoutes/authRoutes.js';
const routerUser = require('./routes/authRoutes/usuario.js');
const express = require('express');
const cors = require('cors');

const app = express();


app.use(cors());

app.use(express.json());

app.use(routerUser);

module.exports = app;