const facturasForm = {};
const modeloFactura = require("../../models/facturas");
const calcularTotal = (req, productPrecio) => {
  const subtotal = productPrecio * req.body.Stock;
  const iva = subtotal * 0.12;
  const Total = iva + subtotal;
  return {iva, Total};
};
facturasForm.createForm = (req, productPrecio) => {
  const { iva, Total } = calcularTotal(req, productPrecio);
  const nuevaFactura = new modeloFactura({
    Cliente: req.body.Cliente,
    id_Producto: req.body.id_Producto,
    Stock: req.body.Stock,
    Iva: iva,
    Total_Pagar: Total,
  });
  console.log(nuevaFactura);
  return nuevaFactura;
};

module.exports = facturasForm;
