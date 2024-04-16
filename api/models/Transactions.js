const mongoose = require('mongoose');
const { Schema, model } = mongoose;


const TransSchema  = new Schema({
    Name: { type: String, required:true },
    Description: {type:String, required:true},
    Datetime: {type:Date, required:true}
});

const TransModel = model('Transaction', TransSchema);

module.exports = TransModel;