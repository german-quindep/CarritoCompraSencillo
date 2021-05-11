import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { ProductosComponent } from './components/productos/productos.component';
import { FacturasComponent } from './components/facturas/facturas.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {path:'empleados',component:EmpleadosComponent},
  { path: 'productos', component: ProductosComponent },
  {path:'facturas',component:FacturasComponent},
  {path:'usuarios',component:UsuariosComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule],
})
export class AppRoutingModule {}
