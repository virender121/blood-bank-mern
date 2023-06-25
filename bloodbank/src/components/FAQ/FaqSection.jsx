import React, { useState } from 'react';
import './Faq.css'; // Import the CSS file

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className='mycontainer'>
      <h3 className='qusetion-header'>Frequently Asked Questions</h3>
      <div className="accordion">
        <div className="accordion-item">
          <a
            className={activeIndex === 0 ? 'active' : ''}
            onClick={() => handleAccordionClick(0)}
          >
          How long does it take?
          </a>
          <div className={`content ${activeIndex === 0 ? 'active' : ''}`}>
           <ul>
            <li>Blood donations take 30-45 minutes and can be done every eight weeks.</li>
            <li>Platelet donations take 70-90 minutes and donors can give every seven days.</li>
            </ul>
          </div>
        </div>
        <div className="accordion-item">
          <a
            className={activeIndex === 1 ? 'active' : ''}
            onClick={() => handleAccordionClick(1)}
          >
           Is it safe?
          </a>
          <div className={`content ${activeIndex === 1 ? 'active' : ''}`}>
            <p>
             
Now, as always, it is safe to donate blood. All donations are made by appointment at the MD Anderson Blood Donor Center on Holly Hall Street in the Texas Medical Center.
            </p>
          </div>
        </div>
        <div className="accordion-item">
          <a
            className={activeIndex === 2 ? 'active' : ''}
            onClick={() => handleAccordionClick(2)}
          >
            Who is eligible to donate?
          </a>
          <div className={`content ${activeIndex === 2 ? 'active' : ''}`}>
            <p>
            Donors must be 17 years or older.
            </p>
          </div>
        </div>
        <div className="accordion-item">
          <a
            className={activeIndex === 3 ? 'active' : ''}
            onClick={() => handleAccordionClick(3)}
          >
            Where is my donation used?
          </a>
          <div className={`content ${activeIndex === 3 ? 'active' : ''}`}>
            <p>
            All blood donated to the MD Anderson Blood Bank is used to treat MD Anderson patients in need.
            </p>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default FAQSection;
