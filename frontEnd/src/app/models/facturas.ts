export class Facturas {
  constructor(_id = '', Cliente = '', id_Producto = '', Stock = 0) {
    this._id = _id;
    this.Cliente = Cliente;
    this.id_Producto = id_Producto;
    this.Stock = Stock;
  }
  _id: string;
  Cliente: string;
  id_Producto: string;
  Stock: number;
}
