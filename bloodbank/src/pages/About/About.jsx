
import React from 'react';
import "./About.css"
import Header from '../../components/Header/Header';
import headerPic from '../../Images/homeback.jpg'
import Footer from '../../components/Footer/Footer';
import directorpic from "../../Images/director-pic.jpg"
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
  return (
    <>
    <Header backgroundImage={headerPic}/>
   <div>
    <h1 className='about-header'>Mission Statement</h1>
    <p>The Community Blood Bank of Northwest Pennsylvania and Western New York connects donors to patients who are in need of life-sustaining blood products in the communities we serve.</p>
   <div className='seprater'> <hr /></div>
    <div className='bord-list'>
      <div className='items'>
        <img src= {directorpic} alt='director' className='director-pic'/>
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
