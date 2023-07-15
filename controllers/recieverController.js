

const userModels = require('../models/recievermodels');

exports.createReciever = async (req, res) =>{
  try {
    const requestData = req.body;
    console.log(req.body);

    
    const savedData = await userModels.create(requestData);

    res.status(201).send({
      message: 'Reciever data received and saved successfully',
      savedData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      error: error.message,
    });
  }
};