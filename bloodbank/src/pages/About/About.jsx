
import React from 'react';
import "./About.css"
import Header from '../../components/Header/Header';
import headerPic from '../../Images/homeback.jpg'
import Footer from '../../components/Footer/Footer';
import directorpic from "../../Images/director-pic.jpg"
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import Navbar from '../../components/Navbar/Navbar'
const About = () => {
  const members= [
   { 
    heading: "Board Chairman:",
    name:"Sarah Eakin, M.D.",
  },
  {
    heading:"Vice Chairman",
    name:"Stephen Henderson"
  },
  {
    heading:"Secretary:",
    name:"Jennifer Stewart"
  },
  {
    heading:"Treasurer:",
    name:"Julie Snyder"
  },
  {
    heading:"CBB Medical Director:",
    name:"Jeffrey Richmond, M.D."
  },
  {
    heading:"CBB Executive Director:",
    name:"William Geary, M.D."
  }
  ]
  const icons = [
    { name: 'Twitter', icon: FaTwitter, link: 'https://twitter.com' },
    { name: 'Facebook', icon: FaFacebook, link: 'https://facebook.com' },
    { name: 'Instagram', icon: FaInstagram, link: 'https://instagram.com' },
  ];
  return (
    <>
     <Navbar />
    <Header backgroundImage={headerPic}/>
   <div className='justify-content-center'>
    <h1 className='about-header'>Mission Statement</h1>
    <p className='mission-text'>The Community Blood Bank of Northwest Pennsylvania and Western New York connects donors to patients who are in need of life-sustaining blood products in the communities we serve.</p>
   <div className='seprater'> <hr /></div>
   <h1 className='leaders'>Meet Our <span className='leadership'>Leadership</span> Team</h1>
    <div className='bord-list'>
      <div className='items'>
        <img src= {directorpic} alt='director' className='director-pic'/>
        <h2>Deanna Rosenthal</h2>
        <p>Executive Director</p>
        <p>deanna.rosenthal@fourhearts.org</p>
        <div className='icons'>
        {icons.map((icon, index) => (
        <a key={index} href={icon.link} target="_blank" rel="noopener noreferrer" >
          <span className='abouticon'>{React.createElement(icon.icon)}</span>
        </a>
      ))}
      </div>
      </div>
      <div className='items'>
        <p className='director-text'>"All you need is one hour, and you can directly impact family, friends and neighbors right here in our community.  Together we can end blood shortages.  Thank you for your support!"</p>
         <h3 className='director-name'>Deanna Rosenthal</h3>
      </div>
      <div className='items'>
        <div>
       
      </div>
      <div>
       <h5 className='member-heading'>CBB Board of Directors:</h5>
       {
  members.map((member, id) => (
    <div key={id}>
      <h6 className='member'>{member.heading}</h6>
      <p className='member-name'>{member.name}</p>
    </div>
  ))
}
</div>

      </div>
    </div>
   </div>
    
    <Footer/>
    </>
  );
};

export default About;
