import React from 'react';
import "./Testimonial.css";
import famous from '../../Images/testimonialpic1.jpg'
const Testimonial =() =>{
    return(
      <>
      <h2 className='testimonial-header'><span style={{color:"rgba(219,19,58,255)"}}>What People</span> Say about Us</h2>
        <div className="testimonials ">
          
        <div className="card">
          <div className="layer"></div>
          <div className="content">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, possimus blanditiis! Dolorem nihil debitis, ipsum quia magnam tempora saepe fugiat? Ut, beatae. Quae consequatur architecto animi doloribus debitis nam pariatur.</p>
            <div className="image">
              <img src={famous} alt="Someone Famous"/>
            </div>
            <div className="details">
              <h2>Someone Famous<br/><span>Website Developer</span></h2>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="layer"></div>
          <div className="content">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, possimus blanditiis! Dolorem nihil debitis, ipsum quia magnam tempora saepe fugiat? Ut, beatae. Quae consequatur architecto animi doloribus debitis nam pariatur.</p>
            <div className="image">
              <img src="" alt="Someone Famous"/>
            </div>
            <div className="details">
              <h2>Someone Famous<br/><span>Website Developer</span></h2>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="layer"></div>
          <div className="content">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, possimus blanditiis! Dolorem nihil debitis, ipsum quia magnam tempora saepe fugiat? Ut, beatae. Quae consequatur architecto animi doloribus debitis nam pariatur.</p>
            <div className="image">
              <img src="" alt="Someone Famous"/>
            </div>
            <div className="details">
              <h2>Someone Famous<br/><span>Website Developer</span></h2>
            </div>
          </div>
        </div>
      </div>
      </>
    );
}

export default Testimonial;