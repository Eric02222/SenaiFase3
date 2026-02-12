import { useState } from "react"

function Home() {
  const [veiculos, setVeiculos] = useState([]);

  const getVeiculos = async () => {
    
  }


  return (
    <div>
      <h2>Monitoramento de Veiculos</h2>

      <div>
        <div>
          <button>Adicionar Veiculo</button>
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
              {/* utilizar {veiculos.map(() => {  aplicar lista  })} */}
              <tr key={'id veiculo'}>
                <td>{veiculos.id}</td>
                <td>{veiculos.nome}</td>
                <td>{veiculos.modelo}</td>
                <td>{veiculos.ano}</td>
                <td>{veiculos.marca}</td>
                <td>{veiculos.status_bateria}</td>
                <td>{veiculos.ativo}</td>
                <td>{veiculos.usuario} </td>
                <td>{veiculos.dataHora_cadastro}</td>
                <td>{veiculos.dataHora_atualização}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


    </div>
  )
}

export default Home