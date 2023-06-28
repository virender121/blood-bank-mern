const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   
    name:{
        type:String,
        required: true
    },
  
    email:{
        type: String,
        required:true,
        unique: true
    },
    password:{
        type: String,
        required:true,
        minLength: 8,
    },
    address:{
        type: String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
},{timestamps:true});

module.exports = mongoose.model('users', userSchema)