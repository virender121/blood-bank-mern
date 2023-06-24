const userModels = require("../models/userModels");
const bcrypt = require('bcryptjs')
const registerController = async(req, res) => {
   try{
       const existingUser = await userModels.findOne({email:req.body.email})

       if(existingUser){
        return res.status(200).send({
            success: false,
            message: "User Already Exists"
        })
       }
       const salt = await bcrypt.genSalt(10)

       const hashedPassword = await bcrypt.hash(req.body.password, salt , (error)=>console.log(error));

       req.body.password = hashedPassword

       console.log(req.body)
    //    rest data
    // const user = new userModels(req.body)
    // // const user= {...req.body}
    // await user.save()
    const user = await userModels.create(req.body);

    return res.status(201).send({
        success: true,
        message: "User Registered Successfully",
        data: user
    })
   } catch(error){
    console.log(error)
    res.status(500).send({
        success: false,
        message: "Error in Register API",
        error
    })
   }
}

module.exports = { registerController}