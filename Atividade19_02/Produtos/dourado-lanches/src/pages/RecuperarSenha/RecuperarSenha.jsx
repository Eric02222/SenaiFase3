import { useState } from "react"
import { esqueciSenha } from "../../services/login";
import { useNavigate } from "react-router"

function RecuperarSenha() {
    const [form, setForm] = useState({
        email: '',
        novaSenha: '',
        confirmarSenha: ''
    })
    const navigate = useNavigate()
    const handleChangePassword = async (e) => {
        e.preventDefault();
        try {
            const ok = await esqueciSenha(form);
            if(ok.success) {
                alert('Senha alterada com sucesso')
            }

            navigate('/login')
        } catch (error) {
            console.log("Erro ao recuperar senha", error)
        }
    }

    return (
        <div>
            <form onSubmit={handleChangePassword}>
                <label htmlFor="senhaRegistro">Senha</label>
                <input type="email" id='senhaRegistro' className="form-control" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} placeholder='Digite seu Email' required />
                <input type="password" id='senhaRegistro' className="form-control" value={form.novaSenha} onChange={(e) => setForm({...form, novaSenha: e.target.value})} maxLength="8" placeholder='Nova Senha' required />
                <input type="password" id='senhaRegistro' className="form-control" value={form.confirmarSenha} onChange={(e) => setForm({...form, confirmarSenha: e.target.value})} maxLength="8" placeholder='Confirmar Senha' required />


                <button type="submit">
                    Recuperar Senha
                </button>
            </form>
        </div>
    )
}

export default RecuperarSenha