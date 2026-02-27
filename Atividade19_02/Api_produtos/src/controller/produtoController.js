import { json } from 'express'
import db from '../config/db.js'

const getProdutos = async (req, res) => {
    try {
        const [results] = await db.query("SELECT id, nome, valor, descricao FROM produto WHERE ativo = 1")

        if (results.length === 0) return res.status(404).json({ message: "Produto não encontrado" })

        return res.status(200).json({ message: "Produtos encontrados com sucesso!!!!!!!!!!", data: results })
    } catch (error) {
        return console.log(error).res.status(400).json({ message: "Erro ao buscar os produtos" })
    }
}

const editarProduto = async (req, res) => {
    try {
        const nomeProduto = req.body.nome;
        const descricao = req.body.descricao;
        const valor = req.body.valor;
        const id = req.params.id;

        const [resultado] = await db.query("UPDATE produto SET nome = ?, descricao = ?, valor = ? WHERE id = ?", [nomeProduto, descricao, valor, id])

        if (resultado.affectedRows === 0) return res.status(400).json({ message: "Produto não encontrado." })

        return res.status(200).json({ message: "Produto atualizado com sucesso!" })
    } catch (error) {
        console.log('Erro: ', error).res.status(400).json({ message: 'Erro ao editar produto', error: error.message })
    }
}

const deletaProduto = async (req, res) => {
    try {
        const id = req.params.id;

        const [results] = await db.query("DELETE FROM produto WHERE id = ?", [id])

        if (results.affectedRows === 0) return res.status(400).json({ message: "Produto não encontrado." })

        return res.status(200).json({ message: "Produto deletado com sucesso!" })

    } catch (error) {
        console.log('Erro: ', error).res.status(400).json({ message: 'Erro ao deletar produto', error: error.message })
    }
}

const adicionarProduto = async (req, res) => {
    try {
        const nome = req.body.nome;
        const descricao = req.body.descricao;
        const valor = req.body.valor;

        const [results] = await db.query("INSERT INTO produto (nome, valor, descricao, ativo) VALUES (?, ?, ?, ?)", [nome, valor, descricao, 1])
        if (results.affectedRows === 0) return res.status(400).json({ message: "Produto não foi criado." })

        return res.status(201).json({ message: "Produto criado com sucesso!"})
    } catch (error) {
        res.status(400).json({ message: 'Erro ao criar produto', error: error.message })
    }


}

export { getProdutos, editarProduto, deletaProduto, adicionarProduto }
