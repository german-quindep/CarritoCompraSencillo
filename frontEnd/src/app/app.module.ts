import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { ProductosComponent } from './components/productos/productos.component';
import { FacturasComponent } from './components/facturas/facturas.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { LoginComponent } from './components/login/login.component';
import { ListCarritoComponent } from './components/facturas/list-carrito/list-carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    ProductosComponent,
    FacturasComponent,
    UsuariosComponent,
    LoginComponent,
    ListCarritoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
