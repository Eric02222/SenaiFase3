import { useEffect, useState } from "react";
import { getProdutos, postProduto, deleteProduto, patchProduto } from "../services/produto";
import ModalProduto from "./Modal";
import EditarProduto from "./EditarProduto";

function Produto() {
    const [produtos, setProdutos] = useState([]);

    const [modal, setModal] = useState(false);

    const [produtoSelecionado, setProdutoSelecionado] = useState(null);

    const [modo, setModo] = useState("edit");

    // const [salvar, setSalvar] = useState('');

    const [tituloEdit, setTituloEdit] = useState("");
    const [descricaoEdit, setDescricaoEdit] = useState("");
    const [valorEdit, setValorEdit] = useState("");

    const carregarProdutos = async () => {
        try {
            const lista = await getProdutos();
            setProdutos(lista);
        } catch (error) {
            console.log("Erro ao carregar produtos:", error);
            setProdutos([]);
        }
    };

    useEffect(() => {
        carregarProdutos();
    }, []);

    const abrirModalEditar = (produto) => {
        setModo("edit");
        setProdutoSelecionado(produto);

        setTituloEdit(produto.nome ?? "");
        setDescricaoEdit(produto.descricao ?? "");
        setValorEdit(produto.valor ?? "");

        setModal(true);
    };

    const abrirModalAdicionar = () => {
        setModo("add");
        setProdutoSelecionado(null);

        setTituloEdit("");
        setDescricaoEdit("");
        setValorEdit("");

        setModal(true);
    };

    const fecharModal = () => {
        setModal(false);
        setProdutoSelecionado(null);
    };

    async function salvar() {
        try {
            const payload = {
                nome: tituloEdit,
                valor: Number(valorEdit) > 0 ? valorEdit : 0,
                descricao: descricaoEdit
            }

            if (modo === "add") {
                const ok = await postProduto(payload);

                if (!ok) console.log("Falha ao adicionar produto.");
                return;
            } else {
                if (!produtoSelecionado.id) {
                    console.log("Nenhum produto selecionado");
                    return;
                }

                const ok = await patchProduto(produtoSelecionado.id, payload)

                if (!ok) {
                    console.log("Não foi possivel editar seu produto")
                    return;
                }

                await carregarProdutos();
                fecharModal();
            }
        } catch (error) {
            console.log("Error:", error)
        }
    }


    return (
        <div className="container">
            <h2>Dourado Lanches</h2>

            <button className="btn btn-warning" onClick={abrirModalAdicionar}>
                Adicionar
            </button>

            <br />
            <br />

            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Nome:</th>
                        <th>Descrição:</th>
                        <th>Valor:</th>
                        <th>Ações:</th>
                    </tr>

                </thead>
                <tbody>
                    {produtos && produtos.map((p) => (
                        <tr key={p.id}>
                            <td>{p.nome}</td>
                            <td>{p.descricao}</td>
                            <td>{p.valor}</td>
                            <td>
                                <button className="btn btn-primary" onClick={() => abrirModalEditar(p)}>
                                    Editar
                                </button>
                                &nbsp;
                                <button className="btn btn-danger" onClick={() => remover(p.id)}>
                                    Excluir
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <ModalProduto
                open={modal}
                onClose={fecharModal}
                onSave={salvar}
                title={modo === "add" ? "Adicionar produto" : (produtoSelecionado?.nome ?? "Editar produto")}
            >
                <EditarProduto
                    titulo={tituloEdit}
                    descricao={descricaoEdit}
                    valor={valorEdit}
                    onChangeTitulo={setTituloEdit}
                    onChangeDescricao={setDescricaoEdit}
                    onChangeValor={setValorEdit}
                />
            </ModalProduto>
        </div>
    )
}

export default Produto