import React from 'react'

function FormularioVeiculos() {
    const [formData, setFormData] = useState(
        {
            nome: "",
            modelo: "",
            ano: "",
            marca: "",
            status_bateria: "",
            ativo: "",
            usuario: "",
            dataHora_cadastro: "",
            dataHora_atualização: "",
            dataHora_exclusao: "",
            ativo: 0,
        }
    )

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const resetForm = () => {
        setFormData({
            nome: "",
            modelo: "",
            ano: "",
            marca: "",
            status_bateria: "",
            ativo: "",
            usuario: "",
            dataHora_cadastro: "",
            dataHora_atualização: "",
            dataHora_exclusao: "",
            ativo: 0,
        })

        const handleSubmit = async (e) => {
            e.preventDefault()

            try {
                setIsSaving(true)
                const dataToSave = {
                    ...formData
                }

                await axios.post("http://localhost:3000/ colocar a rota", dataToSave)
                toast.success("Exame Cadastrada com sucesso", {
                    autoClose: 3000,
                    hideProgressBar: true
                })

                resetForm()
            } catch (e) {
                alert("Erro ao cadastrar Exame!")
            }
        }
    }
    return (
        <div>
            <div><h2>Formulario veiculo</h2></div>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" >Nome Veiculo:</label>
                    <input type="text"
                        name='name'
                        id='name'
                        value={formData.nome}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="modelo" >Modelo Veiculo:</label>
                    <input type="text"
                        name='modelo'
                        id='modelo'
                        value={formData.modelo}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="ano" >Ano Veiculo:</label>
                    <input type="text"
                        name='ano'
                        id='ano'
                        value={formData.ano}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="marca" >Marca Veiculo:</label>
                    <input type="text"
                        name='marca'
                        id='marca'
                        value={formData.marca}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="status_bateria" >Status Bateria do Veiculo:</label>
                    <input type="text"
                        name='status_bateria'
                        id='status_bateria'
                        value={formData.status_bateria}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="dataHora_cadastro" >Data Cadastrado:</label>
                    <input type="text"
                        name='dataHora_cadastro'
                        id='dataHora_cadastro'
                        value={formData.dataHora_cadastro}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="ativo" >Veiculo ativo:</label>
                    <input type="text"
                        name='ativo'
                        id='ativo'
                        value={formData.ativo}
                        onChange={handleInputChange}
                        required
                    />
                </div>

                <div>
                    <label>
                        <input
                            type="radio"
                            id='ativo'
                            name='ativo'
                            value={formData.ativo}
                            onChange={handleInputChange}
                            checked={formData.ativo === 1}
                        />
                        Veiculo Ativo
                    </label>

                    <label>
                        <input
                            type="radio"
                            id='ativo'
                            value={formData.ativo}
                            name='ativo'
                            onChange={handleInputChange}
                            checked={formData.ativo === 0}
                        />
                        Veiculo Desativado
                    </label>
                </div>

                <div>
                    <button type='submit'>
                        Cadastrar Veiculo
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FormularioVeiculos