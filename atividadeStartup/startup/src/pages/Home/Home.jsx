import { useEffectEvent, useState } from "react"
import { useAuth } from "../../context/Context"
import { useNavigate } from "react-router"
import Modal from "../../components/modal/Modal";
import FormularioVeiculos from "../../components/formularioVeiculos/FormularioVeiculos";

function Home() {
  const [veiculos, setVeiculos] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();
  const [modalAberto, setModalAberto] = useState(false)

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
      <h2>Monitoramento de Veiculos</h2>

      <div>
        <div>
          <button onClick={setModalAberto(true)}>Adicionar Veiculo</button>
        </div>

        <div>
          <h2>Veiculos Cadastrados</h2>

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
              </tr>
            </thead>

            <tbody>
              <div>
                <button>Editar Veiculo</button>
                <button>Excluir Veiculo</button>
              </div>
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
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ADICIONAR COMPONENTE DE CADASTRO DE VEICULOS */}
      <Modal isOpen={modalAberto} onClose={() => setModalAberto(false)} ><FormularioVeiculos/></Modal>

    </div>
  )
}

export default Home