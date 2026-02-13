import { useState } from 'react'
import { useNavigate } from "react-router"

function HistoricoAlteracoesVeculos() {
    const [veiculos, setVeiculos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/DashBoard')
        }
    }, [user, navigate])

    const getVeiculos = async () => {
        try {
            const res = await axios.get("http://localhost:3000/adicionar rota veiculos");
            setVeiculos(res.data)
        } catch {
            console.log(e)
        }
    }

    useEffectEvent(() => {
        getVeiculos()
    }, [])


    return (
        <div>

            <div>
                <div>
                    <h2>Historico De Alterações de Veiculos</h2>

                    <table>
                        <thead>
                            <tr>
                                <td>Id</td>
                                <td>Nome</td>
                                <td>Modelo</td>
                                <td>Ano</td>
                                <td>Marca</td>
                                <td>Status Bateria</td>
                                <td>Ativo</td>
                                <td>Usuario </td>
                                <td>DataHora Cadastro</td>
                                <td>DataHora Atualização</td>
                                <td>DataHora Exclusao</td>
                            </tr>
                        </thead>

                        <tbody>

                            <tr key={veiculos.id}>
                                <td>{veiculos.id}</td>
                                <td>{veiculos.nome}</td>
                                <td>{veiculos.modelo}</td>
                                <td>{veiculos.ano}</td>
                                <td>{veiculos.marca}</td>
                                <td>{veiculos.status_bateria}</td>
                                <td>{veiculos.ativo}</td>
                                <td>{veiculos.dataHora_cadastro} </td>
                                <td>{veiculos.dataHora_atualização}</td>
                                <td>{veiculos.dataHora_exclusao}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default HistoricoAlteracoesVeculos