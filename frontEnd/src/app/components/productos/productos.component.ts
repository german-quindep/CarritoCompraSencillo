import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Producto } from './../../models/producto';
import { ProductoServiceService } from './../../services/producto-service.service';

//PARA CREAR TOAST DE MATERIALIZE
declare var M: any;
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  constructor(public serviceProducto: ProductoServiceService) {}
  vacio: boolean;
  edit = false;
  ngOnInit(): void {
    this.getProductos();
  }
  //AGREGAR PRODUCTOS
  agregarProducto(productoForm: NgForm) {
    if (productoForm.value._id) {
      this.serviceProducto.editarProducto(productoForm.value).subscribe(
        (res) => {
          this.limpiarForm(productoForm);
          M.toast({ html: 'Producto Actualizado' });
          this.getProductos();
          this.edit = false;
        },
        (err) => {
          console.log(err);
        }
      );
    } else {
      this.serviceProducto.agregarProducto(productoForm.value).subscribe(
        (res) => {
          this.limpiarForm(productoForm);
          M.toast({ html: 'Producto Guardado' });
          this.getProductos();
          this.edit = false;
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
  getProductos() {
    this.serviceProducto.getProductos().subscribe(
      (res) => {
        this.serviceProducto.producto = res as Producto[];
        if (this.serviceProducto.producto.length > 0) {
          this.serviceProducto.producto;
          this.vacio = false;
        } else {
          this.vacio = true;
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
  //EDITAR
  editProduct(producto: Producto) {
    this.serviceProducto.seleccionProducto = producto;
    this.edit = true;
  }
  //ELIMINAR
  elimiProducto(id: string) {
    if (confirm('Deseas eliminar el producto?')) {
      this.serviceProducto.eliminarProducto(id).subscribe(
        (res) => {
          M.toast({ html: 'Eliminado con exito' });
          this.getProductos();
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
  //LIMPIAR FORMULARIO
  limpiarForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.edit = false;
      this.serviceProducto.seleccionProducto = new Producto();
    }
  }
}
