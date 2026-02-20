import { api } from './api.js'

export async function getProdutos() {
    const res = await api.get("/produto")
    if(res.status === 200){
        if(res.data) return res.data
    }
}