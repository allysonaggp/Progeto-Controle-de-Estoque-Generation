import { ProdutoRepository } from "../repository/ProdutoRepository";
import { Produto } from "../models/Produto";


export class ProdutoController implements ProdutoRepository {

    // Cria o Array que simula o Banco de Dados
    private ListaProdutos: Array<Produto> = new Array<Produto>
    id: number = 0

    // CRUD dos Produtos
    procurarPorId(id: number): void {
        let buscarId = this.buscarNoArray(id)
        if (buscarId != null) buscarId.visualizar()
        else {
            console.log(`A conta: ${id} não foi encontrada`)
        }
    }
    listarTodos(): void {
        for (let produto of this.ListaProdutos)
            produto.visualizar()
    }
    cadastrar(produto: Produto): void {
        this.ListaProdutos.push(produto)
        console.log(`Produto ID: ${produto.id} Cadastrado com Sucesso!`)
    }
    atualizar(produto: Produto): void {
        let buscarProduto = this.buscarNoArray(produto.id)
        if (buscarProduto != null) {
            this.ListaProdutos[this.ListaProdutos.indexOf(buscarProduto)]
            console.log(`Produto ID: ${produto.id} atualizado com sucesso!`)
        } else {
            console.log(`Produto ID: ${produto.id} nao ofi encontrado!`)
        }
    }
    deletar(id: number): void {
        let buscarProduto = this.buscarNoArray(id)
        if (buscarProduto != null) {
            this.ListaProdutos.splice(this.ListaProdutos.indexOf(buscarProduto))
            console.log(`O Produto ID: ${id} foi deletado com Secesso!`)
        } else {
            console.log(`O Produto ID: ${id} não foi encontrado! `)
        }
    }

    // Verifica que o prodruto existe no banco de dados Simulado
    public buscarNoArray(id: number): Produto | null {
        for (let produto of this.ListaProdutos) {
            return produto
        }
        return null
    }
    public gerarId(): number {
        return ++this.id
    }
}