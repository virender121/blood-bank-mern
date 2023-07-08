import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import headerPic from '../../Images/HomePIC.jpg'
import "./DonorPage.css"
import axios from 'axios';
import Footer from '../../components/Footer/Footer';

const DonorPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    surname: '',
    dateOfBirth: '',
    gender: '',
    currentLocation: '',
    nativePlace: '',
    educationSummary: '',
    bloodGroup: '',
    height: '',
    weight: '',
    bmi: '',
    familyMembers: '',
    lastBloodDonationDate: '',
    availableForDonation: false,
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    fatherName: false,
    surname: false,
    dateOfBirth: false,
    gender: false,
    currentLocation: false,
    nativePlace: false,
    educationSummary: false,
    bloodGroup: false,
    height: false,
    weight: false,
    bmi: false,
    familyMembers: false,
    lastBloodDonationDate: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: fieldValue,
    }));

    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [name]: false,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    const errors = {};
    let hasErrors = false;

    // Validate form fields
    for (const fieldName in formData) {
      if (!formData[fieldName]) {
        errors[fieldName] = true;
        hasErrors = true;
      }
    }

    if (hasErrors) {
      setFormErrors(errors);
    } else {
      try{
        const response = await axios.post('auth/donor', { formData });
        console.log(response.data); 
      } catch(error){
        console.log(error)
      }
    }
  };

  return (
   <>
      <Header backgroundImage={headerPic}/>

 
    <div className="donor-form-container">
      <h2>Blood Donation  Form</h2>
      <form className="donor-form" onSubmit={handleSubmit}>
       <div className='donor-row'>
        <div className="form-group">
        <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {formErrors.name && <span className="error-message">Please enter a name</span>}
       
         </div>
         <div className="form-group">
          <label htmlFor="surname">Surname:</label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            required
          />
          {formErrors.surname && <span className="error-message">Please enter a surname</span>}
        </div>
      </div>
        <div className='donor-row'>
        <div className="form-group ">
         <label htmlFor="fatherName">Father Name:</label>
          <input
            type="text"
            id="fatherName"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            required
          />
          {formErrors.fatherName && <span className="error-message">Please enter a father's name</span>}
      
      </div>
        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of Birth:</label>
         
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
          {formErrors.dateOfBirth && <span className="error-message">Please enter a date of birth</span>}
        </div>
        </div>
        <div className='donor-row'>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {formErrors.gender && <span className="error-message">Please select a gender</span>}
        </div>
        <div className="form-group">
          <label htmlFor="currentLocation">Current Location:</label>
          <input
            type="text"
            id="currentLocation"
            name="currentLocation"
            value={formData.currentLocation}
            onChange={handleChange}
            required
          />
          {formErrors.currentLocation && <span className="error-message">Please enter a current location</span>}
        </div>
        </div>
        <div className='donor-row'>
        <div className="form-group">
          <label htmlFor="nativePlace">Native Place Location:</label>
          <input
            type="text"
            id="nativePlace"
            name="nativePlace"
            value={formData.nativePlace}
            onChange={handleChange}
            required
          />
          {formErrors.nativePlace && <span className="error-message">Please enter a native place location</span>}
        </div>
        <div className="form-group">
          <label htmlFor="educationSummary">Education Summary:</label>
          <textarea
            id="educationSummary"
            name="educationSummary"
            value={formData.educationSummary}
            onChange={handleChange}
            required
          />
          {formErrors.educationSummary && <span className="error-message">Please enter an education summary</span>}
        </div>
        </div>  
         <div className='donor-row'>
        <div className="form-group">
          <label htmlFor="bloodGroup">Blood Group:</label>
          <select
           
            id="bloodGroup"
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            required
          >
            <option value=''>Select Blood Group</option>
            <option value='A+'>A<sup >+</sup></option>
            <option value='A-'>A<sup>-</sup></option>
            <option value='B+'>B<sup>+</sup></option>
            <option value='B-'>B<sup>-</sup></option>
            <option value='AB+'>AB<sup>+</sup></option>
            <option vlaue='AB-'>AB<sup>-</sup></option>
            <option value='O+'>O<sup>+</sup></option>
            <option value='O-'>O<sup>-</sup></option>
          </select>
          {formErrors.bloodGroup && <span className="error-message">Please enter a blood group</span>}
        </div>
        <div className="form-group">
          <label htmlFor="height">Height:</label>
          <input
            type="text"
            id="height"
            name="height"
            value={formData.height}
            onChange={handleChange}
            required
          />
          {formErrors.height && <span className="error-message">Please enter a height</span>}
        </div>
        </div>
        <div className='donor-row'>
        <div className="form-group">
          <label htmlFor="weight">Weight:</label>
          <input
            type="text"
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            required
          />
          {formErrors.weight && <span className="error-message">Please enter a weight</span>}
        </div>
        <div className="form-group">
          <label htmlFor="bmi">BMI:</label>
          <input
            type="text"
            id="bmi"
            name="bmi"
            value={formData.bmi}
            onChange={handleChange}
            required
          />
         
         {formErrors.bmi && <span className="error-message">Please enter a BMI</span>}
        </div>
        </div>
        <div className="form-group-family">
          <label htmlFor="familyMembers">Members in the Family:</label>
          <input
            type="text"
            id="familyMembers"
            name="familyMembers"
            value={formData.familyMembers}
            onChange={handleChange}
            required
          />
          {formErrors.familyMembers && <span className="error-message">Please enter the number of family members</span>}
        </div>
        <div className="form-group-family">
          <label htmlFor="lastBloodDonationDate">Last Blood Donation Date:</label>
          <input
            type="date"
            id="lastBloodDonationDate"
            name="lastBloodDonationDate"
            value={formData.lastBloodDonationDate}
            onChange={handleChange}
            required
          />
          {formErrors.lastBloodDonationDate && <span className="error-message">Please enter the last blood donation date</span>}
        </div>
        <div className="checkbox-container">
          <label htmlFor="availableForDonation" className='checkbox-label'>Available for Blood Donation:</label>
          <input
            type="checkbox"
            id="availableForDonation"
            name="availableForDonation"
            checked={formData.availableForDonation}
            onChange={handleChange}
          />
        </div>
        <div className="btn-donor">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  <Footer/>
   </>  
   
  )
}

export default DonorPage
