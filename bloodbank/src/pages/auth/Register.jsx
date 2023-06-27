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
            className="col-md-8 form-banner "
            style={{
              backgroundImage: `linear-gradient(rgba(219, 19, 58, 0.5), rgb(180,180,180)), url(${banner2})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              // backgroundColor: 'rgba(219, 19, 58, 0.5)', 
            }}
            
          >
            <div className='contents'>
            <div
              className=" "
             
            >
              </div>
              <div className= 'register-form'>
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
