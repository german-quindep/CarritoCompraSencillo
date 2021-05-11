const facturaCtrl = {};
const modeloProducto = require("../models/producto");
const validateStock = require("../shared/validations/ValidateStock.validations");
const { createForm } = require("../shared/Forms/FormsFactura.forms.js");
//generar nueva factura
facturaCtrl.agregarFactura = async (req, res) => {
  const stockFactura = await modeloProducto.findById({
    _id: req.body.id_Producto,
  });
  const valiStock = validateStock(req.body.Stock, stockFactura.Stock);
  //SI ES VERDADERO RETURNO
  if (valiStock) res.status(400).json({ message: "No hay suficiente stock" });
  else {
    const stockTotal = stockFactura.Stock - req.body.Stock;
    //CALCULO PARA LA FACTURA
    const nuevaFactura = createForm(req, stockFactura.Precio);
    //ACTUALIZO EL STOCK
    await modeloProducto.findByIdAndUpdate(req.body.id_Producto, {
      Stock: stockTotal,
    });
    //GUARDO LA NUEVA FACTURA
    await nuevaFactura.save();
    res.status(200).json({
      message: "Factura generada con exito",
    });
  }
};

module.exports = facturaCtrl;
