import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import headerback from '../../Images/HomePIC.jpg';
import Footer from '../../components/Footer/Footer';
import Testimonial from '../../components/Testimonial/Testimonial';
import ActionButtons from '../../components/shared/ActionButtons/ActionButtons';
import  NumberCounter  from "number-counter";
import './Home.css';
import FaqSection from '../../components/FAQ/FaqSection';
import Form from '../../components/shared/Form/Form';
import MapContainer from '../../components/MapContainer/MapContainer';

const Home = () => {
  const [containerOffset, setContainerOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const containerHeight = document.querySelector('.home-container').clientHeight;
      const offset = Math.max(0, (windowHeight - containerHeight) / 2 - scrollTop);
      setContainerOffset(offset);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial positioning
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home-container">
      <Header backgroundImage={headerback} heading ="Give Blood" text="When you give a pint, you give more than just blood." />
      <div className='conatiner'>
        <div className='row'>
          <div className="col-md-12 p-5">
            <h2 className='about-head ' >About Us</h2>
            <p className='about-text justify-content-center'>The Blood Center of Northcentral Wisconsin is a community blood center providing life-saving blood products to hospitals and patients in six counties of Wisconsin. We are licensed by the Food and Drug Administration (FDA), accredited by the AABB (formerly known as the American Association of Blood Banks), and are members of America's Blood Centers (ABC), Blood Centers of America (BCA), and the Wisconsin Association of Blood Banks (WABB). The center, originally named the Marathon County Blood Bank, was established through the combined efforts of the Wausau Junior Chamber of Commerce (Jaycees), Marathon County Medical Society, and over 25 clubs, civic, and county organizations. The center opened for blood donations on Thursday, April 3rd, 1952. The center was renamed Blood Center of Northcentral Wisconsin when it moved to its current location in 2003. Our service area includes hospitals in the cities of Wausau, Wisconsin Rapids, Medford, Antigo, Stevens Point, and Portage.</p>
          </div>
        </div>
      </div>
      <div className="figures">
        <div className='figure-content'>
          <div  className='firstfigure'>
            <span className='figure'>
              <NumberCounter end={350} start={1} delay="4" preFix="+" />
            </span>
            <span className='figure-text'>Units of blood are needed every day in the 12<br/> counties served by Our Blood<br/> Center.</span>
          </div>
          <div className='firstfigure'>
            <span className='figure'>
              <NumberCounter end={43000} start={12220} delay="4" preFix="+" />
            </span>
            <span  className='figure-text'>Units of blood are used each day in the<br/> India.</span>
          </div>
          <div className='firstfigure'>
            <span className='figure'>
              <NumberCounter end={33} start={10} delay="4" preFix="+" />
            </span>
            <span  className='figure-text'>Our Blood Center is the only blood<br/> supplier to 33 hospitals in our region. No other<br/> blood organization supplies these hospitals.</span>
          </div>
        </div>
        </div>
        <FaqSection/>
        <div className="container " >
          <div className='col-md-12'>
            <h3 className='contact-heading'>contact us</h3>
          </div>
          <div className=' contact-info' >
  <div className="map-container" style={{ flex: "1"}}>
  
    {/* <MapContainer/> */}
    </div>
  <div className="form-home-container" style={{ flex: "1" }}>
    
    <Form  formType="contact" submitBtn="Contact" showAdditionalFeild={false}/>
  </div>
</div>
</div>


      <Testimonial />
      <div className="action-buttons-container" style={{ top: `${containerOffset}px` }}>
        <div className="action-buttons-inner">
          <ActionButtons />
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
