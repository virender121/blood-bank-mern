

const userModels = require('../models/donormodels');

exports.createDonor = async (req, res) =>{
  try {
    const formData = req.body;
    console.log(req.body);

    
    const savedData = await userModels.create(formData);

    res.status(201).send({
      message: 'Donor data received and saved successfully',
      savedData,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      error: error.message,
    });
  }
};


