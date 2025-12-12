// Importação das Bibliotecas
import read = require("readline-sync")
import { descricaoMenu, Menu } from "./src/util/menu";
import { sobre } from "./src/util/sobre";

// Declaração de Variaveis e Constantes
const menu: Menu = new Menu
let option: number

do {
    menu.menuPrincipal()
    option = read.questionInt("Digite a opção Valida: ")
    switch (option) {
        case 1:
            descricaoMenu("Cadastrar Produto")
            break
        case 2:
            descricaoMenu("Mostrar todos Produtos")
            break
        case 3:
            descricaoMenu("Buscar Produtos por Numero")
            break
        case 4:
            descricaoMenu("Atualizar dados do Produtos")
            break
        case 5:
            descricaoMenu("Deletar Produto")
            break
        case 6:
            sobre()
            break
        default:
            console.log("Digite uma opcao valida!")
            break

    }
} while (option === 0);