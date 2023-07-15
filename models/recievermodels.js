const mongoose = require('mongoose');

const recieverSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    address: {
        type : String,
        required : true,
    },
    quantity: {
        type : Number,
        required : true
    },
    bloodGroup: {
        type :String,
        required : true
    },
    patient: {
        type : String,
        required : true
    }
})

module.exports =mongoose.model('Reciever', recieverSchema);