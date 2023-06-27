import React, { useState } from 'react';
import InputType from './InputType';
import { Link } from 'react-router-dom';
import { handleLogin, handleRegister, handleContact ,showAdditionalFeild} from '../../../services/authservice';

const Form = ({ formType, submitBtn, formTitle }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('donar');
  const [name, setName] = useState('');
  const [organisationName, setOrganisationName] = useState('');
  const [hospitalName, setHospitalName] = useState('');
  const [website, setWebsite] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [streetAddress, setStreetAddress] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          if (formType === 'login')
            return handleLogin(e, email, password, role);
          else if (formType === 'register')
            return handleRegister(
              e,
              name,
              role,
              email,
              password,
              phone,
              organisationName,
              address,
              hospitalName
            );
          // else if (formType === 'contact')
          //   return handleContact(e, name, email, phone, message);
        }}
      >
        <div className="text-center form-title">{formTitle}</div>
        {/* {formType !== 'contact' && <hr />}
        {formType !== 'contact' ? (
  <div className="d-flex mb-3 form-check-class">
    <div className="form-check">
      {/* <input
        type="radio"
        className="form-check-input"
        name="role"
        id="donorRadio"
        value="donor"
        onChange={(e) => setRole(e.target.value)}
        defaultChecked
      /> */}
      {/* <label htmlFor="donorRadio" className="form-check-label">
        Donor
      </label>
    </div> */}
    {/* <div className="form-check ms-2">
      <input
        type="radio"
        className="form-check-input"
        name="role"
        id="adminRadio"
        value="admin"
        onChange={(e) => setRole(e.target.value)}
      />
      <label htmlFor="adminRadio" className="form-check-label">
        Admin
      </label>
    </div>
    <div className="form-check ms-2">
      <input
        type="radio"
        className="form-check-input"
        name="role"
        id="hospitalRadio"
        value="hospital"
        onChange={(e) => setRole(e.target.value)}
      />
      <label htmlFor="hospitalRadio" className="form-check-label">
        Hospital
      </label>
    </div>
    <div className="form-check ms-2">
      <input
        type="radio"
        className="form-check-input"
        name="role"
        id="organisationRadio"
        value="organisation"
        onChange={(e) => setRole(e.target.value)}
      />
      <label htmlFor="organisationRadio" className="form-check-label">
        Organisation
      </label>
    </div>
  </div> */}
{/* ) : null} */} 

        {/* switch statement */}
        {(() => {
          switch (true) {
            case formType === 'login': {
              return (
                <>
                  <InputType
                    labelText="Email"
                    labelFor="forEmail"
                    inputType="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputType
                    labelText="Password"
                    labelFor="forPassword"
                    inputType="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </>
              );
            }
            case formType === 'register': {
              return (
                <>
                  {(role === 'admin' || role === 'donar') && (
                    <InputType
                      labelText="Name"
                      labelFor="forName"
                      inputType="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  )}
                  {role === 'organisation' && (
                    <InputType
                      labelText="Organisation Name"
                      labelFor="forOrganisationName"
                      inputType="text"
                      name="organisationName"
                      value={organisationName}
                      onChange={(e) => setOrganisationName(e.target.value)}
                    />
                  )}
                  {role === 'hospital' && (
                    <InputType
                      labelText="Hospital Name"
                      labelFor="forHospitalName"
                      inputType="text"
                      name="hospitalName"
                      value={hospitalName}
                      onChange={(e) => setHospitalName(e.target.value)}
                    />
                  )}

                  <InputType
                    labelText="Email"
                    labelFor="forEmail"
                    inputType="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputType
                    labelText="Password"
                    labelFor="forPassword"
                    inputType="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputType
                    labelText="Website"
                    labelFor="forWebsite"
                    inputType="text"
                    name="website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                  <InputType
                    labelText="Address"
                    labelFor="forAddress"
                    inputType="text"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <InputType
                    labelText="Phone"
                    labelFor="forPhone"
                    inputType="text"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </>
              );
            }
            case formType === 'contact': {
              return (
                <>
                  <InputType
                    labelText="Name"
                    labelFor="forName"
                    inputType="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='contact-input '
                  />
                  <InputType
                    labelText="Email"
                    labelFor="forEmail"
                    inputType="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='contact-input'
                  />
                  <InputType
                    labelText="Phone"
                    labelFor="forPhone"
                    inputType="text"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className='contact-input'
                  />
            
                  {showAdditionalFeild===true ? (
                    <>
                      <InputType
                        labelText="Address"
                        labelFor="forAddress"
                        inputType="text"
                        name="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                      <InputType
                        labelText="Street Address"
                        labelFor="forStreetAddress"
                        inputType="text"
                        name="streetAddress"
                        value={streetAddress}
                        onChange={(e) => setStreetAddress(e.target.value)}
                      />
                    </>
                  ) : null}
            
                  <InputType
                    labelText="Message"
                    labelFor="forMessage"
                    inputType="textarea"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="contact-textarea"
                    rows={4}
                    cols={50}
                  />
                </>
              );
            }
            
            default: {
              return null;
            }
          }
        })()}

        <div className="d-flex flex-row justify-content-between">
          {formType !=='contact' ?(
            <div>
          {formType === 'login' ? (
            <p>
              Not registered yet? Register
              <Link to="/signup"> Here!</Link>
            </p>
          ) : (
            <p>
              Already a user? Please
              <Link to="/signin"> Login!</Link>
            </p>
          )}
          </div>
          ): null}
          <button className='btn' type="submit">
            {submitBtn}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
