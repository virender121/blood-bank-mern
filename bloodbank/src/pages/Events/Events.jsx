import React, { useState } from 'react'
import {Col, Container, Row } from 'react-bootstrap';
import event1 from '../../Images/event1.jpg'
import Footer from '../../components/Footer/Footer';
import './Event.css'
import Navbar from '../../components/Navbar/Navbar';
const Events = () => {
  const [eventData, setEventData] = useState({
    date: '',
    time: '',
    organisedby: '',
    hospitalName: '',
    pathologyName: '',
    ngoName: '',
    contactPerson: '',
    address: '',
    contactDetail: '',
    primaryContact1: '',
    primaryContact2: '',
    secondaryContact1: '',
    secondaryContact2: '',
  });
  const [eventErrors, setEventErrors] = useState(false);
  const handleEvent = () =>{
     
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
  
    const twelveHourTime = (() => {
      const time = value.split(':');
      const hours = parseInt(time[0]);
      const minutes = time[1];
      let period = 'AM';
  
      let twelveHour = hours % 12;
      if (twelveHour === 0) {
        twelveHour = 12;
      }
  
      if (hours >= 12) {
        period = 'PM';
      }
  
      return `${twelveHour}:${minutes} ${period}`;
    })();
  
    setEventData((prevData) => ({
      ...prevData,
      [name]: twelveHourTime || value,
    }));
  };
  const renderAdditionalFields = () => {
    if (eventData.organisedby === 'hospital') {
      return (
        <>
         <Navbar />
          <div className='form-group'>
            <label htmlFor="hospitalName">Hospital Name:</label>
            <input
              type="text"
              id="hospitalName"
              name="hospitalName"
              value={eventData.hospitalName}
              onChange={handleChange}
              required
            />
          </div>
          {/* Additional fields for hospital */}
        </>
      );
    } else if (eventData.organisedby === 'pathology') {
      return (
        <>
          <div className='form-group'>
            <label htmlFor="pathologyName">Pathology Name:</label>
            <input
              type="text"
              id="pathologyName"
              name="pathologyName"
              value={eventData.pathologyName}
              onChange={handleChange}
              required
            />
          </div>
          {/* Additional fields for pathology */}
        </>
      );
    } else if (eventData.organisedby === 'ngo') {
      return (
        <>
          <div className='form-group'>
            <label htmlFor="ngoName">NGO Name:</label>
            <input
              type="text"
              id="ngoName"
              name="ngoName"
              value={eventData.ngoName}
              onChange={handleChange}
              required
            />
          </div>
          {/* Additional fields for NGO */}
        </>
      );
    }
    // Additional conditions for other options
    return null;
  };

  return (
    <>
    <Navbar/>
     <Container className='mb-3'>
      <Row className='py-5'>
        <Col xs={12} md={6}>
          <img src={event1} alt='' className='img-fluid'/>
          </Col>
          <Col xs={12} md={6}>
          <h3 className='event-heading'>Connect <span color='life'>Life</span> Events</h3>
          <p>World Blood Donor Day is an annual event observed on June 14th. It aims to raise awareness about safe blood donation's importance and express gratitude to blood donors worldwide.</p>
          <button className='mt-5 btn-event' onClick={handleEvent}>Book For Event</button>
          </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
            <h3>Lorem ipsum dolor sit.</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique, atque. Accusantium consequuntur voluptatum hic quae harum perferendis nisi unde officiis laudantium adipisci labore sequi dicta voluptatibus ipsum, expedita ullam alias recusandae, nesciunt impedit soluta. Odio impedit quos veniam, sapiente nihil suscipit quam mollitia quasi animi. Dolores doloremque ut aspernatur magnam.</p>
            <button className='mt-5 btn-event'>Read More</button>
            </Col>
            <Col xs={12} md={6}>
            <img src={event1} alt='' className='img-fluid'/>
            </Col>
          </Row>
          <Row py={5}>
            <Col xs={12} md={6}>
            <img src={event1} alt='' className='img-fluid'/>
            </Col>
            <Col xs={12} md={6}>
            <div className='event-form-container'>
        <h2 className='event-heading'>
            Request for <span className='color-red'>blood</span> donation
        </h2>
            <form>
              <div className='form-group'>
              <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={eventData.date}
            onChange={handleChange}
            required
          />
          {eventErrors.date && <span className="error-message">Please enter date for event generation</span>}
        
              </div>
              <div className='form-group'>
              <label htmlFor="time">Time:</label>
          <input
            type="time"
            id="time"
            name="time"
            value={eventData.time}
            onChange={handleChange}
            required
          />
          {eventErrors.time && <span className="error-message">Please enter time</span>}
        
              </div>
              <div className='form-group'>
              <label htmlFor="location">Location:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={eventData.location}
            onChange={handleChange}
            required
          />
          {eventErrors.location && <span className="error-message">Please enter location</span>}
        
              </div>
           
            <div className='form-group'>
            <label htmlFor="organisedby">Organised By:</label>
            <select id='organisedby' name='organisedby' value={eventData.organisedby} onChange={handleChange} required>
              <option value= ''>Organised by</option>
              <option value='hospital'>Hospital</option>
              <option value='pathology'>Pathology</option>
              <option value ='ngo'>NGO/Association</option>
              <option value='indivisual'>Indivisual</option>
            </select>
            </div>
            {renderAdditionalFields()}
            <button className='event-btn'>Book Event</button>
            </form>
            </div>
            </Col>
          </Row>
          </Container>
    
    <Footer/>
    </>
  )
}

export default Events;
