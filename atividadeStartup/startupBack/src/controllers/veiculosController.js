import db from "../config/db.js";

class AuthController {
    constructor() { }

    async getTodosVeiculos(req, res) {
        try {
            const [rows] = await db.query('SELECT * FROM veiculo');
            return res.json(rows)
        }
        catch (e) {
            console.log(e)
            res.status(500).json({ error: 'Erro ao buscar veiculos' });
        }
    }

    async getVeiculosPorId(req, res) {
        const { id } = req.params;
        try {
            const [rows] = await db.query('SELECT * FROM veiculo WHERE id_veiculo = ?', [id]);
            if (rows.length === 0) {
                return res.status(404).json({ error: 'Veiculo não encontrado' });
            }
            res.json(rows[0]);
        }
        catch (e) {
            console.log(e)
            res.status(500).json({ error: 'Erro ao buscar veiculo' });
        }
    }

    async postVeiculos(req, res) {
        const { nome, modelo, ano, marca, status_bateria, usuario_cadastro, usuario_atualização, dataHora_cadastro, dataHora_atualização, dataHora_exclusao, ativo } = req.body;
        console.log(req.body);
        try {
            const [result] = await db.query(
                'INSERT INTO Veiculo (nome, modelo, ano, marca, status_bateria, usuario_cadastro, usuario_atualização, dataHora_cadastro, dataHora_atualização, dataHora_exclusao, ativo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                [nome, modelo, ano, marca, status_bateria, usuario_cadastro, usuario_atualização, dataHora_cadastro, dataHora_atualização, dataHora_exclusao, ativo]
            );
            const [novoVeiculo] = await db.query('SELECT * FROM veiculo WHERE id_veiculo = ?', [result.insertId]);
            res.status(201).json(novoVeiculo[0]);
        } catch (e) {
            console.error(e.message);
            res.status(500).json({ error: 'Erro ao adicionar Veiculo' });
        }
    }

    async putVeiculos(req, res) {
        const { id } = req.params;
        const { nome, modelo, ano, marca, status_bateria, usuario_cadastro, usuario_atualização, dataHora_cadastro, dataHora_atualização, dataHora_exclusao, ativo } = req.body;
        console.log(req.body);
        try {
            const [result] = await db.query(
                'UPDATE Veiculo SET nome = ?, modelo = ?, ano = ?, marca = ?, status_bateria = ?, usuario_cadastro = ?, usuario_atualização = ?, dataHora_cadastro = ?, dataHora_atualização = ?, dataHora_exclusao = ?, ativo = ?',
                [nome, modelo, ano, marca, status_bateria, usuario_cadastro, usuario_atualização, dataHora_cadastro, dataHora_atualização, dataHora_exclusao, ativo, id]
            );
            if (result.affectedRows === 0) {
                return res.status(404).json({ error: 'Veiculo não encontrado' });
            }
            const [veiculoAtualizado] = await db.query('SELECT * FROM veiculo WHERE id_veiculo = ?', [result.insertId]);
            res.status(201).json(veiculoAtualizado[0]);
        } catch (e) {
            console.error(e.message);
            res.status(500).json({ error: 'Erro ao adicionar Veiculo' });
        }
    }

    async deleteVeiculos() {
        const { id } = req.params;
        try {
            const [result] = await sb.query('DELETE FROM veiculo WHERE id_veiculo = ?', [id]);
            if (result.affectedRows === 0) {
                return res.status(404).json({ error: 'Veiculo não encontrado' });
            }
            res.json({ message: 'Veiculo deletado com sucesso' });
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ error: 'Erro ao deletar Veiculo' });
        }
    }
}