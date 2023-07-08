import React from 'react'
import Footer from '../../components/Footer/Footer'
import MapContainer from '../../components/MapContainer/MapContainer'
import Form from '../../components/shared/Form/Form'
import './Contactus.css'
const Contactus = () => {

  return (
    <div>
      <div className="container">
  <div className="col-md-12">
    <h2 className='contact-heading'>Donor Centers</h2>
    <p>For the most up-to-date hours and locations, <i href=''>click here.</i></p>
  </div>
  <div className="row">
    <div className="map-container ">
      {/* Add your map component or content here */}
      {/* <MapContainer /> */}
    </div>
    <div className="form-home-container ">
      <h2  className='contact-heading'>How can we help?</h2>
      <p>For any other comments, questions or concerns, please use the form below.</p>
      <Form formType="contact" submitBtn="Contact" showAdditionalField={true} />
    </div>
  </div>
</div>
      <Footer/>
    </div>
  )
}

export default Contactus
