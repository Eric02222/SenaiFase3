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
    if (res.status === 200) {
        return true;
    }
    return false;
}

export async function patchProduto(id, produto) {
    const res = await api.patch(`/produto/${id}`, produto);
    if (res.status === 200) {
        return true;
    }
    return false;
}

export async function deleteProduto(id) {
    const res = await api.delete(`/produto/${id}`);

    if (res.status === 200) {
        return true;
    }
    return false;
}