import axios from 'axios'
import { useState } from "react"
import { useNavigate } from "react-router"

function FormularioCadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [senhaConfirmar, setSenhaConfirmar] = useState('');
    const [tipoUsuario, setTipoUsuario] = useState(1);

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

            await axios.post('http://localhost:3000/registro', data)

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
        <div >
            <form onSubmit={handleSubmit} >
                <h2 >Criar Usuários</h2>

                <div>
                    <label htmlFor="nomeRegistro">Nome</label>
                    <input type="text" id='nomeRegistro' value={nome} onChange={handleNomeChange} required />
                </div>

                <div>
                    <label htmlFor="emailRegistro">Email</label>
                    <input type="email" id='emailRegistro' value={email} onChange={handleEmailChange} required />
                </div>

                <div>
                    <label htmlFor="senhaRegistro">Senha</label>
                    <input type="password" id='senhaRegistro' value={senha} onChange={handleSenhaChange} maxlength="8" required />
                </div>

                <div>
                    <label htmlFor="confirmarSenhaRegistro">Confirmar Senha</label>
                    <input type="password" id='confirmarSenhaRegistro' value={senhaConfirmar} onChange={handlesenhaConfirmar} maxLength="8" required />

                    {!senhasConferes && (
                        <p>Senhas não correspodem</p>
                    )}
                </div>

                <div>
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
                </div>

                <div >
                    <button type='submit' >
                        Criar Usuário
                    </button>
                </div>
            </form>

        </div>
    )
}

export default FormularioCadastro