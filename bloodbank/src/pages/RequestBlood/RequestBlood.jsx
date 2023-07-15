import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import headerPic from '../../Images/HomePIC.jpg';
import './RequestBlood.css';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import { useDispatch } from 'react-redux';
import { recieverAdded } from '../../Reduxe/auth/authSlice';
const RequestBlood = () => {
  const dispatch = useDispatch()
    const [requestData, setRequestData] = useState({
        name:'',
        address:"",
        quantity:'',
        bloodGroup:"",
        patient:''
    })
    const [requestErrors, setRequestErrors] = useState({
      name:false,
      address:false,
      quantity:false,
      bloodGroup:false,
      patient:false
    })

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const fieldValue = type === 'checkbox' ? checked : value;
    
        setRequestData((prevData) => ({
          ...prevData,
          [name]: fieldValue,
        }));
    
        setRequestErrors((prevErrors) => ({
          ...prevErrors,
          [name]: false,
        }));
      };
    
      const handleSubmit = async(e) => {
        e.preventDefault();
    
        const errors = {};
        let hasErrors = false;
    
        // Validate form fields
        for (const fieldName in requestData) {
          if (!requestData[fieldName]) {
            errors[fieldName] = true;
            hasErrors = true;
          }
        }
    
        if (hasErrors) {
          setRequestErrors(errors);
        } else {
          try{
            const res = await axios.post('http://localhost:8080/api/v1/blood/reciever', { requestData });
            // console.log(response.data); 
            const savedData = res.data.savedData;
            dispatch(recieverAdded(savedData))
          } catch(error){
            console.log(error)
          }
        }
      };
    return (
       <>
        <Navbar />
       <Header backgroundImage={headerPic}/>
       <div className='request-form-container'>
        <h2 className='request-heading'>
            Request for <span className='color-red'>blood</span> donation
        </h2>
        <form className="donor-form" onSubmit={handleSubmit}>
       <div className='donor-row'>
        <div className="form-group">
        <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={requestData.name}
            onChange={handleChange}
            required
          />
          {requestErrors.name && <span className="error-message">Please enter a name</span>}
       
         </div>
         <div className="form-group">
        <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={requestData.address}
            onChange={handleChange}
            required
          />
          {requestErrors.address && <span className="error-message">Please enter address</span>}
       
         </div>
         </div>
         <div className='donor-row'>
         <div className="form-group">
        <label htmlFor="quantity">Quantity:</label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            value={requestData.quantity}
            onChange={handleChange}
            required
          />
          {requestErrors.quantity && <span className="error-message">Please enter a name</span>}
       
         </div>
         <div className="form-group">
        <label htmlFor="bloodGroup">Select Blood Group:</label>
        <select
           
           id="bloodGroup"
           name="bloodGroup"
           value={requestData.bloodGroup}
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
         {requestErrors.bloodGroup && <span className="error-message">Please enter a blood group</span>}

         </div>
         </div>
         <div className="form-group">
        <label htmlFor="patient">RequiredForPerson:</label>
          <input
            type="text"
            id="patient"
            name="patient"
            value={requestData.patient}
            onChange={handleChange}
            required
          />
          {requestErrors.patient && <span className="error-message">Please enter the name of patient</span>}
       
         </div>
         <div >
          <button type="submit" className="btn-request">Submit</button>
        </div>
         </form>
       </div>
       <Footer/>
       </>
    );
}
export default RequestBlood;