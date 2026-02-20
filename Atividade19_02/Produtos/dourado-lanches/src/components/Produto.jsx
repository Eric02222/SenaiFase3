import { useEffect, useState } from "react";
import { getProdutos } from "../services/produto";

function Produto() {
    const [produtos, setProdutos] = useState([]);

    const carregaProduto = async () => {
        try {
            const lista = await getProdutos();
            setProdutos(lista.data)

        } catch (error) {
            console.log("Deu erra no bagulho: ", error)
        }
    }

    useEffect(() => {
        carregaProduto();
    }, []);

    return (
        <>
            <h1>Dourado Lanches</h1>
            <button className="bnt bnt-danger">Adicionar</button>
            <table>
                <thead>
                    <tr>
                        <th>Nome:</th>
                        <th>Descrição:</th>
                        <th>Valor:</th>
                        <th>Ações:</th>
                    </tr>

                </thead>
                <tbody>
                    {produtos.map((p) => (
                        <tr key={p.id}>
                            <td>{p.nome}</td>
                            <td>{p.descricao}</td>
                            <td>{p.valor}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Produto