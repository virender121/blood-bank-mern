const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    fatherName: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    currentLocation: {
      type: String,
      required: true,
    },
    nativePlace: {
      type: String,
      required: true,
    },
    educationSummary: {
      type: String,
      required: true,
    },
    bloodGroup: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: true,
    },
    weight: {
      type: String,
      required: true,
    },
    bmi: {
      type: Number,
      required: true,
    },
    familyMembers: {
      type: String,
      required: true,
    },
    lastBloodDonationDate: {
      type: Date,
      required: true,
    },
    availableForDonation: {
      type: Boolean,
      default: false,
    },
  },{timestamps:true});
  

  module.exports =mongoose.model('Donor', donorSchema);