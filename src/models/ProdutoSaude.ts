import { Produto } from "./Produto";

export class ProdutoSaude extends Produto {
    private _fragrancia

    constructor(id: number, tipo: string, nome: string, preco: number, fragrancia: string) {
        super(id, tipo, nome, preco)
        this._fragrancia = fragrancia
    }

    public get fragrancia(): string {
        return this._fragrancia
    }
    public set fragrancia(fragrancia: string) {
        this._fragrancia = fragrancia
    }

    public visualizar(): void {
        super.visualizar()
        console.log(`Fragrancia: ${this.fragrancia}`)
    }
}