import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsCalendarDate } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import "./ActionButtons.css";

const ActionButtons = () => {
  return (
    <div className="action-buttons-wrapper">
      <div className="action-buttons">
        <div className="column">
          <div className="icon-wrapper">
            <span className="hover-text">Get Directions</span>
            <FaMapMarkerAlt className="icon" />
          </div>
          <div className="icon-wrapper">
            <span className="hover-text">Register for an Appointment</span>
            <BsCalendarDate className="icon" />
          </div>
          <div className="icon-wrapper">
            <span className="hover-text">We'd love to hear from you</span>
            <GrMail className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionButtons;
