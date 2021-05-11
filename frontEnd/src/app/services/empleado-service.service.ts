import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleados } from './../models/empleados';
@Injectable({
  providedIn: 'root',
})
export class EmpleadoServiceService {
  seleccionEmpleado: Empleados;
  empleado:Empleados[];
  readonly url_api = 'http://localhost:3000/api/empleados';
  constructor(private http: HttpClient) {
    this.seleccionEmpleado= new Empleados();
  }

  //MOSTRAR TODOS LOS EMPLEADOS
  getEmpleados() {
    return this.http.get(this.url_api);
  }
  //AGREGAR EMPLEADO
  agregarEmpleados(empleado: Empleados) {
    return this.http.post(this.url_api, empleado);
  }
  //ACTUALIZAR EMPLEADO
  actualizarEmpleado(empleado: Empleados) {
    return this.http.put(this.url_api + `/${empleado._id}`, empleado);
  }
  //ELIMINAR EMPLEADO
  eliminarEmpleado(_id: string) {
    return this.http.delete(this.url_api + `/${_id}`);
  }
}
