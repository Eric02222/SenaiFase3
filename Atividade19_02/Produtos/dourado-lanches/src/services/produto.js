import { api } from './api.js'

export async function getProdutos() {
    const res = await api.get("/produto")
    if (res.status === 200) {
        return res.data?.data ?? [];
    }
    return [];
}

export async function postProduto(produto) {
    const res = await api.post("/produto", produto)

    let r = "";
    if (res.status === 201) {
        r = res.message;
    }

    return r;
}

export async function patchProduto(id, produto) {
    const res = await api.patch(`/produto/${id}`, produto);

    let r = "";
    if (res.status === 200) { 
        r = res.message;
    }
    return r;
}

export async function deleteProduto(id) {
    const res = await api.delete(`/produto/${id}`);

    let r = "";
    if (res.status === 200) {
        r = res.message;
    }
    return r;
}