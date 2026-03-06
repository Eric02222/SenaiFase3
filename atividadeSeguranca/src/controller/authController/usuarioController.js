const db = require('../../config/db.js');
const bcrypt = require('bcrypt');
const { signAccessToken, signRefreshToken, verifyRefresh, } = require('../../utils/jwt.js')

const createUser = async (req, res) => {
    try {
        const nome = req.body.nome
        const email = req.body.email
        const senha = req.body.senha
        const tipo_usuario = req.body.tipo_usuario

        if (nome === "" || email === "" || senha === "") {
            return res.status(400).json({ message: "Todos os campos devem ser preenchidos" })
        }

        const saltRound = 10;
        const hashPassword = await bcrypt.hash(senha, saltRound) //senha convertida para hash - criptografa a senha

        const [result] = await db.query("INSERT INTO usuario (nome, email, senha, tipo_usuario) VALUES (?, ?, ?, ?)", [nome, email, hashPassword, tipo_usuario])

        if (result.affectedRows === 0) {
            return res.status(400).json({ message: "Não foi possivel inserir o usuario" })
        }

        return res.status(201).json({ message: "Usuario cadastrado com sucesso" })
    } catch (error) {
        return res.status(500).json({ message: "Erro ao criar usuario", error: error.message })
    }
}


const loginUser = async (req, res) => {
    try {
        const {email, senha} = req.body

        const [rows] = await db.query("SELECT id, nome, email, senha FROM usuario WHERE email = ?", [email])

        const usuario = rows[0];

        if (!usuario || !(await bcrypt.compare(senha, usuario.senha))) {
            console.log("teste")
            return res.status(401).json({ error: "Credenciais inválidas" });
        } 

        const accessToken = signAccessToken({
            usuarioId: usuario.id,
            email: usuario.email,
            nome: usuario.nome,

        });

        const refreshToken = signRefreshToken({
            usuarioId: usuario.id,
            email: usuario.email,
            nome: usuario.nome,

        });

        const expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate() + 7);
        console.log(refreshToken)

        await db.query("INSERT INTO token (token, type, usuario, expiresAt) VALUES (?, ?, ?, ?)", [refreshToken, "refresh", usuario.id, expiresAt])

        res.status(200).json({
            accessToken,
            refreshToken,
            usuario: {
                usuarioId: usuario.id,
                email: usuario.email,
                nome: usuario.nome,

            },
        }).json({ message: "Usuario logado com sucesso" });
    } catch (error) {
        console.error("Erro no login:", error);
        return res.status(500).json({ message: "Erro ao criar usuario", error: error.message })
    }
}

module.exports = { createUser, loginUser };