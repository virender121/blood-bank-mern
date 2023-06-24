const mongoose = require('mongoose');
const colors = require('colors')

const connectDB = async () => {
    try {
          await mongoose.connect(process.env.MONGO_URL)
          console.log(`Connect To MongoDb Database ${mongoose.connection.host}`.bgCyan.white)
    } catch (error){
       console.log(`MongoDb Database Errors ${error}`.bgRed.white)
    }
}

module.exports = connectDB