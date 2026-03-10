import axios from 'axios'
import { useState } from "react"
import { useNavigate } from "react-router"

//FORMULARIO FEITO JUNTO DA PROFESSORA

function FormularioCadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaConfirmar, setSenhaConfirmar] = useState('');
    const [tipoUsuario, setTipoUsuario] = useState(1);

    const [form, setForm] = useState({
        nome: '',
        email: '',
        senha: '',
        tipo_usuario: ''
    })

    const [senhasConferes, setSenhasConferes] = useState(true)
    const navigate = useNavigate();

    const handleNomeChange = (e) => setNome(e.target.value)
    const handleEmailChange = (e) => setEmail(e.target.value)
    const handleSenhaChange = (e) => setSenha(e.target.value)
    const handlesenhaConfirmar = (e) => setSenhaConfirmar(e.target.value)
    const handleTipoUsuario = (e) => setTipoUsuario(e.target.value)

    const senhaValida = () => senha.length >= 8 && senha === senhaConfirmar

    const resetForm = () => {
        setNome('')
        setEmail('')
        setSenha('')
        setSenhaConfirmar('')
        setSenhasConferes(true)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!senhaValida()) {
            setSenhasConferes(false)
            return
        }

        try {
            const data = {
                nome: nome,
                email: email,
                senha: senha,
                tipo_usuario: tipoUsuario
            }
            await axios.post('http://localhost:3001/registro', data)

            resetForm()

            alert('Conta criada com sucesso!')
            navigate('/')


        }
        catch (error) {
            console.log('Erro ao de conexão:', error);
            alert('Erro ao conectar ao servidor')
        }
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit} >
                <h2 >Criar Usuários</h2>

                <div className="form-group mb-3">
                    <label htmlFor="nomeRegistro" className='form-label'>Nome</label>
                    <input type="text" id='nomeRegistro' className="form-control" value={form.nome} onChange={handleNomeChange} required />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="emailRegistro" className='form-label'>Email</label>
                    <input type="email" id='emailRegistro' className="form-control" value={form.email} onChange={handleEmailChange} required />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="senhaRegistro">Senha</label>
                    <input type="password" id='senhaRegistro' className="form-control" value={form.senha} onChange={handleSenhaChange} maxlength="8" placeholder='********' required />
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="confirmarSenhaRegistro" className='form-label'>Confirmar Senha</label>
                    <input type="password" id='confirmarSenhaRegistro' className="form-control" value={senhaConfirmar} onChange={handlesenhaConfirmar} maxLength="8" placeholder='********' required />

                    {!senhasConferes && (
                        <p>Senhas não correspodem</p>
                    )}
                </div>

                <select nome="tipoUsuario" id='tipoUsuario' className='form-select' value={form.tipo_usuario}>
                    <option value={1}>Usuario Normal</option>
                    <option value={2}>Administrador</option>

                </select>

                {/* <div>
                    <label >
                        <input
                            type="radio"
                            name="ativo"
                            value="1"
                            onChange={handleTipoUsuario}
                        />
                        Administrador
                    </label>

                    <label >
                        <input
                            type="radio"
                            name="ativo"
                            value="2"
                            onChange={handleTipoUsuario}
                        />
                        Usuario
                    </label>
                </div> */}

                <div >
                    <button type='submit' class="btn btn-primary">
                        Criar Usuário
                    </button>
                </div>
            </form>

        </div>
    )
}

export default FormularioCadastro