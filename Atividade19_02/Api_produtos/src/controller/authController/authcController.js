import db from "../../config/db.js";

class AuthController {
    constructor() { }

    async registro(req, res) {
        try {
            const { nome, email, senha, tipo_usuario } = req.body;

            const values = [nome, email, senha, tipo_usuario]

            const [result] = await db.query('INSERT INTO usuario (nome, email, senha, tipo_usuario) VALUES (?, ?, ?, ?)', values);

            return res.status(201).json({
                message: 'Usuario criado com sucesso',
                usario: {
                    id: result.insertId,
                    nome,
                    email
                }
            })
        } catch (error) {
            console.log("Erro ao criar usuario: ", error)
            return res.status(500).json({ error: "Erro interno do servidor" });
        }


    }

    async login(req, res) {

        try {
            const { email, senha } = req.body;

            const [user] = ("SELECT email, senha FROM usuario WHERE email = ?", [email])

            const usuario = user;

            // if (senha !== usuario.senha) {
            //     return res.status(401).json({ error: "Credenciais inválidas", usuario });
            // }

            return res.status(200).json({
                message: "Login realizado com sucesso",
                usuario: usuario
            });
        } catch (error) {
            console.log("Erro ao logar: ", error)
            return res.status(500).json({ error: "Erro interno do servidor", error });
        }


    }
}

export const authController = new AuthController();
