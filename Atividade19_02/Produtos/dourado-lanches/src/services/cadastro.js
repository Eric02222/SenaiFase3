import { api } from './api.js'

export async function CriarUsuario(data) {
    // await axios.post('http://localhost:3001/registro', data)

    const res = await api.post(`/registro`, data);

    let r = "";
    if (res.status === 200) {
        r = res.message;
    }
    return r;
}
