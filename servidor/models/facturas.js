const mongoose = require('mongoose');
const {Schema}= mongoose;


const modelFactura= new Schema({
    Cliente:{type:String,required:true},
    id_Producto:{type:Schema.Types.ObjectId, ref:'Producto', required:true},
    Stock:{type:String,required:true},
    Fecha:{type:Date, default:Date.now},
    Iva:{type:Number},
    Total_Pagar:{type:Number},
});

module.exports= mongoose.model('Factura',modelFactura);