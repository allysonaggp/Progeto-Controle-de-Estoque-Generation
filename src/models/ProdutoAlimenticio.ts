import { Produto } from "./Produto"

export  class ProdutoAlimenticio extends Produto {
    private _validade: string

    //Método Costructor
    constructor(id: number,tipo:string, nome: string, preco: number, validade: string) {
        super(id,tipo, nome, preco)
        this._validade = validade

    }
    // Métodos GET e SET

    public get validade(): string {
        return this._validade
    }
    public set validade(validade: string) {
        this.validade = validade
    }

    public visualizar(): void {
        super.visualizar()
        console.log(`Validade: ${this._validade}`)
    }
}