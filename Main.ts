// Importação das Bibliotecas
import read = require("readline-sync")
import { descricaoMenu, Menu } from "./src/util/menu";
import { sobre } from "./src/util/sobre";
import { ProdutoController } from "./src/controller/ProdutoController";
import { ProdutoAlimenticio } from "./src/models/ProdutoAlimenticio";
import { ProdutoPerfumaria } from "./src/models/ProdutoPerfumaria";

// Declaração de Variaveis e Constantes
const menu: Menu = new Menu
let nomeProduto, validade, fragrancia: string, option, precoProduto, tipo, numero: number


// Instancia da Class Controller
let produto: ProdutoController = new ProdutoController
produto.cadastrar(new ProdutoAlimenticio(1, "alimenticio", "Torta de limao", 150, "25/12/2025"))

function main() {
    do {
        menu.menuPrincipal()
        option = read.questionInt("Digite a opção Valida: ")
        switch (option) {
            // Ok Cadastro de Produtos
            case 1:
                descricaoMenu("Cadastrar Produto")
                console.log(`\nDigite o tipo do produto:\n
[ 1 ] - Alimenticio 
[ 2 ] - limpeza
[ 3 ] - Perfumaria                  
`)
                tipo = read.questionInt("")
                nomeProduto = read.question("Digite o nome do Produto: ")
                precoProduto = read.questionFloat("Digite o preço do produto: ")
                switch (tipo) {
                    case 1:
                        tipo = "Alimenticio"
                        validade = read.question("Digite a Validade Ex:00/00/00:")
                        produto.cadastrar(new ProdutoAlimenticio(produto.gerarId(), tipo, nomeProduto, precoProduto, validade))
                        break
                    case 2:
                        tipo = "Limpeza"
                        fragrancia = read.question("Digite a fragrancia do Produto de Limpeza: ")
                        produto.cadastrar(new ProdutoPerfumaria(produto.gerarId(), tipo, nomeProduto, precoProduto, fragrancia))
                        break
                    case 3:
                        tipo = "Perfumaria"
                        fragrancia = read.question("Digite a fragrancia do Perfume: ")
                        produto.cadastrar(new ProdutoPerfumaria(produto.gerarId(), tipo, nomeProduto, precoProduto, fragrancia))
                        break
                    default:
                        console.log(`Digite uma opção válida!`)
                        break
                }
                break
            // OK Mostrar todos Produtos
            case 2:
                descricaoMenu("Mostrar todos Produtos")
                produto.listarTodos()
                break
            // OK Buscar produtos por ID        
            case 3:
                descricaoMenu("Buscar Produtos por Id")
                numero = read.questionInt("\nDigite o numero do ID do produto: ")
                produto.procurarPorId(numero)
                break
            // Atualizar dados do Produtos
            case 4:
                descricaoMenu("Atualizar dados do Produtos")
                numero = read.questionInt(`\nDigite o ID do Produto: `)
                console.log(`\nDigite o tipo do produto:\n
[ 1 ] - Alimenticio 
[ 2 ] - limpeza
[ 3 ] - Perfumaria                  
`)
                tipo = read.questionInt("")
                nomeProduto = read.question("Digite o nome do Produto: ")
                precoProduto = read.questionFloat("Digite o preço do produto: ")
                switch (tipo) {
                    case 1:
                        tipo = "Alimenticio"
                        validade = read.question("Digite a Validade Ex:00/00/00:")
                        produto.cadastrar(new ProdutoAlimenticio(numero, tipo, nomeProduto, precoProduto, validade))
                        break
                    case 2:
                        tipo = "Limpeza"
                        fragrancia = read.question("Digite a fragrancia do Produto de Limpeza: ")
                        produto.cadastrar(new ProdutoPerfumaria(numero, tipo, nomeProduto, precoProduto, fragrancia))
                        break
                    case 3:
                        tipo = "Perfumaria"
                        fragrancia = read.question("Digite a fragrancia do Perfume: ")
                        produto.cadastrar(new ProdutoPerfumaria(numero, tipo, nomeProduto, precoProduto, fragrancia))
                        break
                    default:
                        console.log(`Digite uma opção válida!`)
                        break
                }
                break
            // OK Deletar Produto
            case 5:
                descricaoMenu("Deletar Produto")
                numero = read.questionInt(`Digite o ID do Produto: `)
                produto.deletar(numero)
                break
            // Sobre
            case 6:
                sobre()
                break
            default:
                console.log("Digite uma opcao valida!")
                break

        }
    } while (option !== 0);
}
main()