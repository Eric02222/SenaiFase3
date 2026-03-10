import { api } from './api.js'

export async function LogarUsuario(data) {
    // await axios.post('http://localhost:3001/login', data)
    try {
        const res = await api.post(`/login`, data);
        return res;
    } catch (error) {
        console.log('Erro ao logar', error)
    }


}

export async function esqueciSenha(data) {
    // await axios.post('http://localhost:3001/login', data)
    try {
        const res = await api.post(`/esquciSenha`, data);

        return res;
    } catch (error) {
        console.log('Erro ao recuperar senha', error)

    }

}

