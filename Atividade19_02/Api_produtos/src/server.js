import {app} from './app.js'
import dotenv from 'dotenv'

//Intallar dotenv: npm i dotenv
dotenv.config();

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`O servidor esta rodando na porta ${PORT}`)
});