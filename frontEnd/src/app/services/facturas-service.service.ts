import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Facturas } from './../models/facturas';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FacturasServiceService {
  seleccionFactura: Facturas;
  factura: Facturas[];
  private carritoFactura$ = new Subject<any[]>(); //SUBJECT PARA MANEJAR CARRITO
  private formFactura$ = new Subject<any[]>(); //SUBJECT PARA ENVIAR MULTIPLES FORM AL BACKEND
  formFactura: any = [];
  carritoFactura: any = [];
  readonly url_api = 'http://localhost:3000/api/facturas';
  constructor(private http: HttpClient) {
    this.seleccionFactura = new Facturas();
  }
  //AGREGAR NUEVA FACTURA
  agregarFactura(factura: Facturas) {
    return this.http.post(this.url_api, factura);
  }
  //AGREGAR AL CARRITO
  agregarCarrito(carrito) {
    this.carritoFactura.push(carrito);
    this.carritoFactura$.next(this.carritoFactura);
  }
  //QUITAR ALGO DEL CARRITO
  quitarCarrito(id) {
    //QUITAR LO QUE SE GUARDO EN LA LISTA DE CARRITO DE PRODUCTO
    this.carritoFactura.filter((carrito) => {
      if (carrito.Id_Product === id) {
        this.carritoFactura.splice(carrito, 1);
      }
    });
    this.formFactura.filter((form) => {
      if (form.Id_Factura === id) {
        this.formFactura.splice(form, 1);
      }
    });
  }
  //LIMPIAR TODO
  vaciarCarrito() {
    this.carritoFactura = [];
    this.formFactura = [];
    this.carritoFactura$.next(this.carritoFactura);
    this.formFactura$.next(this.formFactura);
  }
  //RETURN CARRITO
  getCarrito$(): Observable<any[]> {
    return this.carritoFactura$.asObservable();
  }
  //OBTENGO TODAS LAS FACTURAS QUE VAYA GENERANDO EL USUARIO
  generarFactura(Factura) {
    this.formFactura.push(Factura);
    this.formFactura$.next(this.formFactura);
  }
  getFacturaForm$(): Observable<any[]> {
    return this.formFactura$.asObservable();
  }
}
