const mongoose = require('mongoose');
const string=String;
const userSchema= new mongoose.Schema({
    name:string,
    email:string,
    password:string
});

module.exports=mongoose.model('users',userSchema);