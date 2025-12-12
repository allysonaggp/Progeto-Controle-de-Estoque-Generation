import { colors } from "./colors";

export class Menu {
    menuPrincipal(): void {
        logo()
        descricaoMenu("Menu Principal")
        console.log(colors.fg.gray, `                                                                                                                                   `)
        console.log(colors.fg.yellow, `        [ ${colors.fg.white}1${colors.fg.yellow} ]${colors.fg.blue} -${colors.fg.white} Cadastrar Produto                              `)
        console.log(colors.fg.yellow, `        [ ${colors.fg.white}2${colors.fg.yellow} ]${colors.fg.blue} -${colors.fg.white} Mostrar todos Produtos                   `)
        console.log(colors.fg.yellow, `        [ ${colors.fg.white}3${colors.fg.yellow} ]${colors.fg.blue} -${colors.fg.white} Buscar Produtos por Numero                 `)
        console.log(colors.fg.yellow, `        [ ${colors.fg.white}4${colors.fg.yellow} ]${colors.fg.blue} -${colors.fg.white} Atualizar dados do Produtos                 `)
        console.log(colors.fg.yellow, `        [ ${colors.fg.white}5${colors.fg.yellow} ]${colors.fg.blue} -${colors.fg.white} Deletar Produto                             `)
        console.log(colors.fg.yellow, `        [ ${colors.fg.white}0${colors.fg.yellow} ]${colors.fg.blue} -${colors.fg.white} Sair                                     `)
        console.log(colors.fg.gray, `                                                          `)
        console.log(colors.fg.green, `=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=${colors.reset}`)

    }
}

export function logo() {
    console.log(`${colors.fg.green}=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=${colors.reset}`)
    console.log(`${colors.fg.green}    *    ${colors.fg.yellow} *        ${colors.fg.blue}* * * * * * * * * *    ${colors.fg.yellow}     *   ${colors.fg.green} *    `)
    console.log(`${colors.fg.green}*  *   ${colors.fg.yellow}  *    ${colors.fg.blue}* ${colors.fg.white}Mercearia do Sr Sebastião${colors.fg.blue} *   ${colors.fg.yellow}  *   ${colors.fg.green} *  * `)
    console.log(`${colors.fg.green}    *    ${colors.fg.yellow} *        ${colors.fg.blue}* * * * * * * * * *    ${colors.fg.yellow}     *   ${colors.fg.green} *    `)
    console.log(`${colors.fg.green}=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=${colors.reset}`)
}
export function descricaoMenu(texto: string): void {
    console.log(`${colors.fg.green}        =-=-${colors.fg.yellow}=-=${colors.fg.blue}-=-${colors.reset}     ${texto}     ${colors.fg.blue}-=-${colors.fg.yellow}=-=${colors.fg.green}-=-= ${colors.reset}                       `)
}