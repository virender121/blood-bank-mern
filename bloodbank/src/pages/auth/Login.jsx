import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../../components/shared/spinner/spinner';
import Form from '../../components/shared/Form/Form';
import loginBack from '../../Images/banner1.jpg';
import Footer from '../../components/Footer/Footer';

const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className='row login-container' >
          <div className='col-md-6' style={{ flex: 1 }}>
            <img src={loginBack} alt='loginImage' className="loginImage" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className='col-md-6 d-flex align-items-center justify-content-center'>
            <div className='form-container'>
              <Form formTitle={'Welcome Back!! '} submitBtn={'Log In'} formType={'login'} />
            </div>
          </div>
        </div>
      )}
      <Footer/>
    </>
  );
};

export default Login;
