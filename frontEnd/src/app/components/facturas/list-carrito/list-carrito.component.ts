import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FacturasServiceService } from './../../../services/facturas-service.service';
import { NgForm } from '@angular/forms';
import { FacturasComponent } from '../facturas.component';
//PARA CREAR TOAST DE MATERIALIZE
declare var M: any;
@Component({
  selector: 'app-list-carrito',
  templateUrl: './list-carrito.component.html',
  styleUrls: ['./list-carrito.component.css'],
})
export class ListCarritoComponent implements OnInit {
  carritoFactura$: Observable<any[]>;
  carritoFactura: any;
  @Input() facturaForm;
  generarFactura = false;
  constructor(
    private facturaService: FacturasServiceService,
    private compoFactu: FacturasComponent
  ) {}

  ngOnInit(): void {
    this.agregarAlCarrito();
  }
  //MOSTRAR LISTA DE LOS PRODUCTOS ESCOGIDO
  agregarAlCarrito() {
    this.carritoFactura$ = this.facturaService.getCarrito$();
    this.carritoFactura$.subscribe((carrito) => {
      this.carritoFactura = carrito;
      this.generarFactura = true;
    });
  }
  //AGREGAR FACTURA
  agregarFactura(factura: NgForm) {
    factura.controls.Cliente.enable();
    this.compoFactu.formFactu.filter((form) => {
      this.facturaService.agregarFactura(form).subscribe((res) => {
        M.toast({ html: 'Generado con Exito' });
        this.compoFactu.getProductos();
        this.facturaService.vaciarCarrito();
        this.compoFactu.formFactu = [];
        this.carritoFactura = null;
        this.generarFactura = false;
      });
    });
  }
  //QUITAR PRODUCTO DE LA LISTA
  quitarProducto(id: String) {
    this.facturaService.quitarCarrito(id);
    if (this.carritoFactura.length <= 0) this.generarFactura = false;
  }
}
