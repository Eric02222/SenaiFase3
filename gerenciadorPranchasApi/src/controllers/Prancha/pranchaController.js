import { prismaClient } from "../../../prisma/prisma.js";

class PranchaController {
    constructor() { }

    async getTodasPranchas(req, res) {
        try {
            const pranchas = await prismaClient.prancha.findMany();
            console.log('foi')
            return res.json(pranchas)
        }
        catch (e) {
            console.log(e)
        }
    }

    async getPranchaPorId(req, res) {
        try {
            const { params } = req
            const prancha = await prismaClient.prancha.findUnique({
                where: {
                    id: Number(params.id)
                }
            })
            if (!prancha) return res.status(404).send("Usuário não existe!")
            return res.json(prancha)
        }
        catch (e) {
            console.log(e)
        }
    }

    async criarPrancha(req, res) {
        try {
            const { body } = req
            const prancha = await prismaClient.prancha.create({
                data: {
                    modelo: body.modelo,
                    tamanho: body.tamanho,
                    largura: body.largura,
                    espessura: body.espessura,
                    volume: body.volume || "",
                    material: body.material || "",
                    condicao: body.condicao || "",
                    preco: body.preco || "",
                },
            })
            return res.status(201).json(prancha)
        } catch (error) {
            console.error(error)
        }
    }

    async atualizarprancha(req, res) {
        try {
            const { body, params } = req;
            const { ...dadosParaSalvar } = body;

            if (Object.keys(dadosParaSalvar).length === 0) {
                return res.status(400).send("Nenhum dado válido para atualizar.");
            }
            const pranchaAtualizado = await prismaClient.prancha.update({
                where: { id: Number(params.id) },
                data: dadosParaSalvar
            });

            return res.status(200).json({
                message: "Usuário atualizado!",
                data: pranchaAtualizado
            });

        } catch (error) {
            console.error("Erro no Update:", error);

        }
    }


    async deletarPrancha(req, res) {
        const { params } = req;
        try {
            const pranchaDeletado = await prismaClient.prancha.delete({
                where: {
                    id: Number(params.id),
                },
            });

            return res.status(200).json({
                message: "Prancha deletado com sucesso!",
                data: pranchaDeletado
            });

        } catch (error) {
            console.error("Erro ao deletar prancha:", error);
        }
    }

}



export const pranchaController = new PranchaController();