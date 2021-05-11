const { Router } = require("express");
const routerProduct = Router();
const productoCtrl = require("../controllers/producto.controller");
const urlProduct = require("../config/UrlProducts.const");
//RUTAS DE MI PRODUCTOS
//MOSTRAR PRODUCTOS
routerProduct.get(urlProduct.GetProducts, productoCtrl.getProducto);
//AGREGAR PRODUCTOS
routerProduct.post(urlProduct.PostProducts, productoCtrl.agregarProducto);
//EDITAR PRODUCTO
routerProduct.put(urlProduct.PutProduct, productoCtrl.editarProducto);
//BUSCAR UN PRODUCTO
routerProduct.get(urlProduct.GetProduct, productoCtrl.getIdProducto);
//ELIMINAR PRODUCTO
routerProduct.delete(urlProduct.DeleteProduct, productoCtrl.eliminarProducto);

module.exports = routerProduct;
