const userModels = require("../models/userModels");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const registerController = async(req, res) => {
   try{
    console.log(req.body)
       const existingUser = await userModels.findOne({email:req.body.email})

       if(existingUser){
        return res.status(200).send({
            success: false,
            message: "User Already Exists"
        })
       }
       const salt = await bcrypt.genSalt(10)

       const hashedPassword = await bcrypt.hash(req.body.password, salt );

       req.body.password = hashedPassword

       console.log(req.body)
    //    rest data
    const user = new userModels(req.body)

    // const validationError = user.validateSync();
    // if(validationError){
    //     const errors = Object.keys(validationError.errors).map((key)=>({
    //         field:key,
    //         message: validationError.errors[key].message
    //     }));
    //     return res.status(400).send({
    //         success: false,
    //         message: "Validation Error",
    //         errors: errors,
    //       });
    // }
     console.log(user)
    await user.save()
   

    return res.status(201).send({
        success: true,
        message: "User Registered Successfully",
        user,
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

// Login callback

const loginController = async(req, res) => {
    try{
         const user = await userModels.findOne({email:req.body.email})
         if(!user){
            return res.status(404).send({
                success:false,
                message: "Invalid Credentials"
            })
         }
        //  Compare Password
        const comparePassword = await bcrypt.compare(req.body.password, user.password)
        if(!comparePassword){
            return res.status(500).send({
                success:false,
                message: "Invalid Credentials"
            })
        }
        const token = jwt.sign({userId:user._id},process.env.JWT_SECRET, {expiresIn: '1d'})
        return res.status(200).send({
            success:true,
            message:'Login Successful',
            token,
            user,
        })
    } catch(error){
         console.log(error)
         res.status(500).send({
            success:false,
            message:"Error In Login API",
            error
         })
    }
}

// Get Current user
const currentUserController = async(req,res) => {
    try{
       const user = await userModels.findOne({_id:req.body.userId})
       return res.status(200).send({
        success:true,
        message:"User Fetched Successfully",
        user,
       })
    } catch(error){
        console.log(error)
        res.status(500).send({
            success: false,
            message :'Unable to get current user'
        })
    }
};

module.exports = { registerController, loginController, currentUserController}