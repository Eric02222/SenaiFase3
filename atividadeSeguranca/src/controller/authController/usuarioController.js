const db = require('../../config/db.js');
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
    try {
        const nome = req.body.nome
        const email = req.body.email
        const senha = req.body.senha
        const tipo_usuario = req.body.tipo_usuario 

        if (nome === "") {
            return res.status(400).json({ message: "Nome não pode estar vazio" })
        }

        const saltRound = 10;
        const hashPassword = bcrypt.hash(senha, saltRound) //senha convertida para hash - criptografa a senha

        const [result] = await db.query ("INSERT INTO usuario (nome, email, senha, tipo_usuario) VALUES (?, ?, ?, ?)", [nome, email, hashPassword, tipo_usuario])

        if (result.affectedRows === 0) {
            return res.status(400).json({ message: "Não foi possivel inserir o usuario" })
        }

        return res.status(201).json({ message: "Usuario cadastrado com sucesso" })
    } catch (error) {
        return res.status(500).json({ message: "Erro ao criar usuario", error: error.message })
    }
}

module.exports = { createUser };