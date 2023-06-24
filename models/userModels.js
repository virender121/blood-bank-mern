const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    role:{
      type:String,
      required:true,
      enum: ['admin','organisation','user', 'hospital']
    },
    name:{
        type:String,
        required: function(){
            if(this.role==='user' || this.role==='admin'){
                return true;
            } 
                return false;
            
        }
    },
    organisationName:{
        type:String,
        required: function(){
            if(this.role==='organisation'){
                return true
            }
             return false
        }
    },
    hospitalName:{
        type:String,
        required:function(){
            if (this.role === "hospital") {
                return true;
            } 
            return false;
        }
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