import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../../components/shared/spinner/spinner';
import Form from '../../components/shared/Form/Form';
import banner2 from '../../Images/banner2.jpg';
import './Register.css';
import Footer from '../../components/Footer/Footer';
const Register = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="row g-0">
          <div
            className="col-md-8 form-banner"
            style={{
              backgroundImage: `url(${banner2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div
              className="form-container registerform"
              style={{
                margin: 'auto',
                
                maxWidth: '800px',
                padding: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '8px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
              }}
            >
              <div className= 'container mt-5'>
              <Form formTitle={'Register'} submitBtn={'Register'} formType={'register'} />
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer/>
    </>
  );
};

export default Register;
