export abstract class Produto {
    private _id: number
    private _tipo: string
    private _nome: string
    private _preco: number
    //Método Costructor
    constructor(id: number, tipo: string, nome: string, preco: number) {
        this._id = id
        this._tipo = tipo
        this._nome = nome
        this._preco = preco
    }

    // Métodos GET e SET
    public get id(): number {
        return this._id
    }
    public set id(id: number) {
        this._id = id
    }
    public get tipo(): string {
        return this._tipo
    }
    public set tipo(tipo: string) {
        this.tipo = tipo
    }
    public get nome(): string {
        return this._nome
    }
    public set nome(nome: string) {
        this._nome = nome
    }
    public get preco(): number {
        return this._id
    }
    public set preco(preco: number) {
        this._preco = preco
    }


    public visualizar(): void {
        console.log(`
Id: ${this._id}
tipo: ${this.tipo}
Nome: ${this.nome}
Preço R$: ${this._preco.toFixed(2)}`)
    }
}