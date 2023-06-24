import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import headerback from '../../Images/homeback.jpg';
import Footer from '../../components/Footer/Footer';
import Testimonial from '../../components/Testimonial/Testimonial';
import ActionButtons from '../../components/shared/ActionButtons/ActionButtons';
import './Home.css';

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
      <Header backgroundImage={headerback} text="Welcome to my site" />
      <div className='conatiner'>
        <div className='row'>
          <div className="col-md-10 p-5">
            <h2 className='about-head'>About Us</h2>
            <p className='about-text'>The Blood Center of Northcentral Wisconsin is a community blood center providing life-saving blood products to hospitals and patients in six counties of Wisconsin. We are licensed by the Food and Drug Administration (FDA), accredited by the AABB (formerly known as the American Association of Blood Banks), and are members of America's Blood Centers (ABC), Blood Centers of America (BCA), and the Wisconsin Association of Blood Banks (WABB). The center, originally named the Marathon County Blood Bank, was established through the combined efforts of the Wausau Junior Chamber of Commerce (Jaycees), Marathon County Medical Society, and over 25 clubs, civic, and county organizations. The center opened for blood donations on Thursday, April 3rd, 1952. The center was renamed Blood Center of Northcentral Wisconsin when it moved to its current location in 2003. Our service area includes hospitals in the cities of Wausau, Wisconsin Rapids, Medford, Antigo, Stevens Point, and Portage.</p>
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
