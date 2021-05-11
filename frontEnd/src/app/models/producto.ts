export class Producto {
  constructor(_id = '', Nombre = '', Marca = '', Stock = 0, Precio = 0) {
    this._id = _id;
    this.Nombre = Nombre;
    this.Marca = Marca;
    this.Stock = Stock;
    this.Precio = Precio;
  }
  _id: string;
  Nombre: string;
  Marca: string;
  Stock: number;
  Precio: number;
}
