export class Produto {
    private _id: number
    private _name: string
    private _price: number
    private _qtd: number
    //Método Costructor
    constructor(id: number, name: string, price: number, qtd: number) {
        this._id = id
        this._name = name
        this._price = price
        this._qtd = qtd
    }
    // Métodos GET e SET
    public get id(): number {
        return this._id
    }
    public set id(id: number) {
        this._id = id
    }
    public get name(): string {
        return this._name
    }
    public set name(name: string) {
        this._name = name
    }
    public get price(): number {
        return this._id
    }
    public set price(price: number) {
        this._price = price
    }
    public get qtd(): number {
        return this._qtd
    }
    public set qtd(qtd: number) {
        this.qtd = qtd
    }

    public visualizar(): void {
        console.log(`
Id do Produto: ${this._id}
Nome do produto: ${this._name}
Preço do Produto: ${this._price.toFixed(2)}
Quantidade em Estoque: ${this._qtd}`)
    }
}