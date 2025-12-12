import { Produto } from "../models/Produto"

export interface ProdutoRepository {
    //CRUD do controle do Produto
    procurarPorId(id: number): void
    listarTodos(): void
    cadastrar(produto: Produto): void
    atualizar(produto: Produto): void
    deletar(id: number): void
}