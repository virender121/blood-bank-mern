import React, { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsFillCalendar2MonthFill } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import "./ActionButtons.css";
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import Form from '../Form/Form';

const ActionButtons = () => {
  const [show, setShow] = useState(false)
  const handleShowForm = () => {
    setShow(true)
  }
  const handleCloseForm = () => {
    setShow(false)
  }
  const handleShowMap = () =>{
    setShow(true)
  }
  const handleCloseMap = () =>{
    setShow(false)
  }
  return (
    <>
    <div className="action-buttons-wrapper">
      <div className="action-buttons">
        <div className="column">
          <div className="icon-wrapper">
            <span className="hover-text">Get Directions</span>
            <FaMapMarkerAlt className="icon" />
          </div>
          <div className="icon-wrapper">
            <span className="hover-text">Register for an Appointment</span>
            <BsFillCalendar2MonthFill className="icon" />
          </div>
          <div className="icon-wrapper">
            <span className="hover-text">We'd love to hear from you</span>
            <GrMail className="icon" onClick={handleShowForm} />
          </div>
        </div>
      </div>
    </div>
    <Modal show={show} onHide={handleCloseForm} keyboard={false} backdrop='static'>
        <Modal.Header closeButton>
          <Modal.Title>Ask your query</Modal.Title>
        </Modal.Header>
        <Modal.Body><Form formType="contact" submitBtn="Contact" showAdditionalField={true} />
        </Modal.Body>
      </Modal>
      <Modal show={show} onHide={handleCloseMap} keyboard={false} backdrop='static'>
        <Modal.Header closeButton>
          <Modal.Title>Ask your query</Modal.Title>
        </Modal.Header>
        <Modal.Body><Form formType="contact" submitBtn="Contact" showAdditionalField={true} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ActionButtons;
