export class Empleados {
  constructor(_id = '', nombre = '', posicion = '', oficina = '', salario = 0) {
    this._id = _id;
    this.nombre = nombre;
    this.posicion = posicion;
    this.oficina = oficina;
    this.salario = salario;
  }
  _id: string;
  nombre: string;
  posicion: string;
  oficina: string;
  salario: number;
}
