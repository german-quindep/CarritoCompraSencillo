import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Producto } from './../../models/producto';
import { Facturas } from './../../models/facturas';
import { FacturasServiceService } from './../../services/facturas-service.service';
import { ProductoServiceService } from './../../services/producto-service.service';
import { Observable } from 'rxjs';
//PARA CREAR TOAST DE MATERIALIZE
declare var M: any;
@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css'],
})
export class FacturasComponent implements OnInit {
  formFactura$: Observable<any[]>;
  formFactu: any = [];
  carritoId = 1;
  facturaId = 1;
  constructor(
    public facturaService: FacturasServiceService,
    public productoService: ProductoServiceService
  ) {}
  ngOnInit(): void {
    this.getProductos();
    this.verFacturasGeneradas();
  }
  getProductos() {
    this.productoService.getProductos().subscribe(
      (res) => {
        //MOSTRAR TODOS LOS PRODUCTOS
        this.productoService.producto = res as Producto[];
      },
      (err) => {
        console.log(err);
      }
    );
  }
  //AGREGAR AL CARRITO
  addCarrito(producto: Producto) {
    M.toast({
      html: `Producto ${producto.Nombre} marca ${producto.Marca} a sido seleccionado`,
    });
    this.facturaService.seleccionFactura.id_Producto = producto._id;
    this.productoService.seleccionProducto = producto;
  }
  //AGREGAR AL CARRITO
  addCarritoProducts(factura: NgForm) {
    if (factura.value.Stock > this.productoService.seleccionProducto.Stock) {
      M.toast({ html: 'Excede del stock' });
    } else {
      this.productoService
        .getIdProductos(factura.value.id_Producto)
        .subscribe((res) => {
          const carritoFac = {
            Id_Product: this.carritoId++,
            Nombre: res['Nombre'],
            Marca: res['Marca'],
            Stock: factura.value.Stock,
            Precio: factura.value.Stock * res['Precio'],
          };
          this.facturaService.agregarCarrito(carritoFac);
          factura.controls.Cliente.enable();
          const formFactura = {
            _id: this.facturaId++,
            Cliente: factura.value.Cliente,
            id_Producto: factura.value.id_Producto,
            Stock: factura.value.Stock,
          };
          this.facturaService.generarFactura(formFactura);
          factura.controls.Cliente.disable(); //DESACTIVO UNA VEZ QUE AGREGA ALGO AL CARRITO
        });
    }
  }
  //VER CUANTAS FACTURAS TENGO AGREGADA
  verFacturasGeneradas() {
    this.formFactura$ = this.facturaService.getFacturaForm$();
    this.formFactura$.subscribe((form) => {
      this.formFactu = form;
    });
  }
  limpiarForm(form?: NgForm) {
    if (form) {
      form.reset();
      M.toast({ html: 'Limpiado formulario' });
      form.controls.Cliente.enable();
      this.facturaService.seleccionFactura = new Facturas();
    }
  }
}
