import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FormControlLabel, Checkbox, Link } from '@mui/material';
import './logins.css';
import * as FaIcons from 'react-icons/fa';

import * as IoIcons from 'react-icons/io';

const Logins = ({ errorMessages, loggedIn, login, loginError }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [userName, setUserName] = useState('');

  const errors = {
    uname: 'Invalid username',
    pass: 'Invalid password',
  };

  const [localErrorMessages, setLocalErrorMessages] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const uname = formData.get('uname');
    const pass = formData.get('pass');

    // Simplified validation (you can customize this as needed)
    const isUnameValid = uname.trim() !== ''; // Basic username validation
    const isPassValid = pass.trim() !== ''; // Basic password validation

    if (isUnameValid && isPassValid) {
      setIsSubmitted(true);
      setUserName(uname);
      login();
    } else {
      let errorMessages = {};

      if (!isUnameValid) {
        errorMessages = { ...errorMessages, uname: errors.uname };
      }

      if (!isPassValid) {
        errorMessages = { ...errorMessages, pass: errors.pass };
      }

      setLocalErrorMessages(errorMessages);
      loginError(errorMessages);
    }
  };

  const handleRememberMe = (event) => {
    setRememberMe(event.target.checked);
  };

  const renderErrorMessage = (name) => (
    name in localErrorMessages && <div className="error">{localErrorMessages[name]}</div>
  );

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-containers">
          <label>Username</label>
          <input type="text" style={{ borderBottom: '2px solid #9c6990' }} name="uname" required />
          {renderErrorMessage('uname')}
        </div>
        <div className="input-containers">
          <label>Password</label>
          <input
            type="password"
            style={{ borderBottom: '2px solid #9c6990' }}
            className="pass1"
            name="pass"
            required
          />
          {renderErrorMessage('pass')}
        </div>
        <div className="checkbox-container">
          <FormControlLabel
            control={<Checkbox checked={rememberMe} onChange={handleRememberMe} />}
            label="Remember me"
          />
          <Link href="Forgot Password">Forgot Password?</Link>
        </div>
        <div className="button-container">
          <Link to="/home">
            <input className="letin" type="submit" style={{ outline: 'none' }} value="Sign In" />
          </Link>
        </div>
      </form>
    </div>
  );

  const renderSuccessMessage = (
    <div>
      <div>Hi! <h5><b>{userName}</b><FaIcons.FaHandSparkles></FaIcons.FaHandSparkles></h5></div>
      You have successfully logged in. Welcome..
    </div>
  );

  return (
    <div className="app4">
      <div className="login-form">
        <div className="title">
          <b>
            <center>Sign In</center>
          </b>
        </div>
        {isSubmitted ? (
          <>
            {renderSuccessMessage}
            <h5>{<Link href="./home" style={{ textDecoration: "none" }}></Link>}<Link to="./home"><FaIcons.FaArrowRight style={{ marginLeft: "20px", color: "#9c6990" }} /></Link></h5>
          </>
        ) : (
          <>
            {renderForm}
            <br />
            <div className="dd">
              Not a member? <Link href="./signup">Register</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loggedIn: state.loggedIn,
  errorMessages: state.errorMessages,
});

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch({ type: 'LOGIN' }),
  loginError: (errorMessages) => dispatch({ type: 'LOGIN_ERROR', payload: errorMessages }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Logins);
