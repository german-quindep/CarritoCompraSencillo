const empleadoCtrl = {};
const modeloEmpleado = require("../models/empleados");
//OBTENER TODOS LOS EMPLEADOS
empleadoCtrl.getEmpleado = async (req, res) => {
  const todosEmpleados = await modeloEmpleado.find();
  res.json(todosEmpleados);
};
//CREAR UN EMPLEADO
empleadoCtrl.crearEmpleado = async (req, res) => {
  const nuevoEmpleado = new modeloEmpleado({
    nombre: req.body.nombre,
    posicion: req.body.posicion,
    oficina: req.body.oficina,
    salario: req.body.salario,
  });
  await nuevoEmpleado.save();
  res.json({
    status: "Empleado guardado con exito",
  });
};
//OBTENER UN SOLO EMPLEADO DE LA CONSULTA
empleadoCtrl.getIdEmpleado = async (req, res) => {
  const idEmpleado = await modeloEmpleado.findById(req.params.id);
  res.json(idEmpleado);
};
//EDITAR UN EMPLEADO
empleadoCtrl.editarEmpleado = async (req, res) => {
  const { id } = req.params;
  const empleado = {
    nombre: req.body.nombre,
    posicion: req.body.posicion,
    oficina: req.body.oficina,
    salario: req.body.salario,
  };
  //PARA ACTUALIZAR Y SI NO EXISTE LO CREO
  await modeloEmpleado.findByIdAndUpdate(id, { $set: empleado }, { new: true });
  res.json({
    status: "Empleado actualizado",
  });
};
//ELIMINAR EMPLEADO
empleadoCtrl.eliminarEmpleado = async (req, res) => {
  await modeloEmpleado.findByIdAndRemove(req.params.id);
  res.json({
    status: "Empleado eliminado",
  });
};
module.exports = empleadoCtrl;
