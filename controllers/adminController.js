const jwt = require('jsonwebtoken');


let otp;
const matchPass = (req, res) => {
    try{
      const pass = req.body.password
      if(!pass) return res.status(400).send({message: 'Password is required'});

      if(pass != process.env.ADMIN_PASS) return res.status(401).send({
        message:'Invalid password'
      })
      else sendMail(process.env.RECIEVER_MAIL)
      .then((digit)=>{

    otp = digit;
      })
      .catch(err=>{
        throw err
      })
      res.json({data:'Success'});
    } catch(error){
      console.log(error)
      res.status(500).send({message:error.message})
    }
}

module.exports = {matchPass}