const productoCtrl = {};
const modelProducto = require("../models/producto");
//Obtener todos los productos

productoCtrl.getProducto = async (req, res) => {
  const todosProducto = await modelProducto.find();
  res.json(todosProducto);
};
//AGREGAR NUEVO PRODUCTO
productoCtrl.agregarProducto = async (req, res) => {
  const nuevoProducto = new modelProducto({
    Nombre: req.body.Nombre,
    Marca: req.body.Marca,
    Stock: req.body.Stock,
    Precio: req.body.Precio,
  });
  await nuevoProducto.save();
  res.json({
    status: "Producto Guardado con exito",
  });
};
//Mostrar un Producto
productoCtrl.getIdProducto = async (req, res) => {
  const getIdProducto = await modelProducto.findById(req.params.id);
  res.json(getIdProducto);
};
//Editar un producto
productoCtrl.editarProducto = async (req, res) => {
  const { id } = req.params;
  const producto = {
    Nombre: req.body.Nombre,
    Marca: req.body.Marca,
    Stock: req.body.Stock,
    Precio: req.body.Precio,
  };
  //PARA ACTUALIZAR PRODUCTO
  await modelProducto.findByIdAndUpdate(id, { $set: producto }, { new: true });
  res.json({
    status: "Actualizado con exito",
  });
};
//ELIMINAR UN PRODUCTO
productoCtrl.eliminarProducto = async (req, res) => {
  await modelProducto.findByIdAndRemove(req.params.id);
  res.json({
    status: "Eliminado con exito",
  });
};

module.exports = productoCtrl;
