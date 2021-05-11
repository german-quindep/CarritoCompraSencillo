//VALIDAR STOCK DEL PRODUCTO
const validateStock = (reqStock, stockProduct) => {
  var boolean = false;
  reqStock > stockProduct ? (boolean = true) : (boolean = false);
  return boolean;
};

module.exports = validateStock;
