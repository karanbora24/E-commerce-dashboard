const mongoose = require('mongoose');
const string=String;
const productSchema= new mongoose.Schema({
    name:string,
    price:string,
    category:string,
    userID:string,
    company:string
});

module.exports=mongoose.model('products',productSchema);