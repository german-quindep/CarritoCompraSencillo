const { Router } = require("express");
const routerEmpleados = Router();
const empleado = require("../controllers/empleados.controllers");
const urlEmploye = require("../config/UrlEmployee.const");
//RUTAS
//MOSTRAR EMPLEADOS
routerEmpleados.get("/Empleados", empleado.getEmpleado);
//GUARDAR EMPLEADOS
routerEmpleados.post(urlEmploye.PostEmploye, empleado.crearEmpleado);
//PEDIR UN SOLO USUARIO
routerEmpleados.get(urlEmploye.GetEmploye, empleado.getIdEmpleado);
//ACTUALIZAR
routerEmpleados.put(urlEmploye.PutEmploye, empleado.editarEmpleado);
//ELIMINAR EMPLEADO
routerEmpleados.delete(urlEmploye.DeleteEmploye, empleado.eliminarEmpleado);
module.exports = routerEmpleados;
