import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from './../models/producto';
@Injectable({
  providedIn: 'root',
})
export class ProductoServiceService {
  seleccionProducto: Producto;
  producto: Producto[];
  readonly url_api = 'http://localhost:3000/api/Productos';
  constructor(private http: HttpClient) {
    this.seleccionProducto = new Producto();
  }
  //TRAER A LOS PRODUCTOS
  getProductos() {
    return this.http.get(this.url_api);
  }
  getIdProductos(id: string) {
    return this.http.get(this.url_api + `/${id}`);
  }
  //AGREGAR PRODUCTO
  agregarProducto(producto: Producto) {
    return this.http.post(this.url_api, producto);
  }
  //ACTUALIZAR UN PRODUCTO
  editarProducto(producto: Producto) {
    return this.http.put(this.url_api + `/${producto._id}`, producto);
  }
  //ELIMINAR PRODUCTO
  eliminarProducto(_id: string) {
    return this.http.delete(this.url_api + `/${_id}`);
  }
}
