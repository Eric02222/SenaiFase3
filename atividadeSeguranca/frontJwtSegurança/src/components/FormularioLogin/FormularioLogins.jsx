import axios from 'axios'
import { useState } from "react"
import { useNavigate } from "react-router"
import { useAuth } from '../../context/Context';

function FormularioLogins() {
    const { login } = useAuth()
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const navigate = useNavigate();

    const handleEmailChange = (e) => setEmail(e.target.value)
    const handleSenhaChange = (e) => setSenha(e.target.value)

    const resetForm = () => {
        setEmail('')
        setSenha('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const data = {
                email: email,
                senha: senha
            }

            const res = await axios.post('http://localhost:3000/login', data)

            if (res.data.length === 0) {
                return alert('Usuario não encontrado')
            }

            const dataUsuario = {
                ...res
            }

            resetForm()
            login(dataUsuario)
            alert("login efetuado com sucesso");
        }
        catch (error) {
            console.error("Erro ao logar usuario", error)
            alert('Erro ao logar usuario')
        }
    }

    return (
        <div >
            <form onSubmit={handleSubmit} >
                <h2 >Acesso ao Sistema</h2>

                <div>
                    <label htmlFor="emailRegistro">Email</label>
                    <input type="email" id='emailRegistro' value={email} onChange={handleEmailChange} required />
                </div>

                <div>
                    <label htmlFor="senhaRegistro">Senha</label>
                    <input type="password" id='senhaRegistro' value={senha} onChange={handleSenhaChange} maxLength="8" required />
                </div>

                <div >
                    <button type='submit' >
                        Entrar Usuário
                    </button>
                </div>
            </form>

        </div>
    )
}

export default FormularioLogins