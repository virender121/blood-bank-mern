import React from 'react'
import Footer from '../../components/Footer/Footer'
import MapContainer from '../../components/MapContainer/MapContainer'
import Form from '../../components/shared/Form/Form'

const Contactus = () => {
  return (
    <div>
      <div className="container">
  <div className="col-md-12">
    <h2>Donor Centers</h2>
    <p>For the most up-to-date hours and locations, <i href=''>click here.</i></p>
  </div>
  <div className="row">
    <div className="map-container col-md-6">
      {/* Add your map component or content here */}
      <MapContainer />
    </div>
    <div className="form-home-container col-md-6">
      <h2>Contact Us</h2>
      <Form  formType="contact" submitBtn="Contact" />
    </div>
  </div>
</div>
      <Footer/>
    </div>
  )
}

export default Contactus
