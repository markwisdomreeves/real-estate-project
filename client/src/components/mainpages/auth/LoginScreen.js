import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { showErrMsg, showSuccessMsg } from "../utils/Notification/Notification";
import { isEmpty, isEmail, isLength } from "../utils/validation/Validate";
import "./login-page.css";

const eye = <i className="fa fa-eye-slash" aria-hidden="true"></i>;
const eyeSlash = <i className="fa fa-eye" aria-hidden="true"></i>;

const initialState = {
  email: '',
  password: '',
  err: '',
  success: ''
}

function LoginScreen() {

  const [passwordShown, setPasswordShown] = useState(false);

  const [user, setUser] = useState(initialState)

  const { email, password, err, success } = user;

  const handleChangeInput = e => {
    const {name, value} = e.target;
    setUser({...user, [name]:value, err: '', success: ''})
  }

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const loginSubmit = async e => {
    e.preventDefault()

    if(isEmpty(email) || isEmpty(password))
      return setUser({...user, err: "All fields are required", success: ''})

    if(!isEmail(email))
      return setUser({...user, err: "Email is invalid", success: ''})

    if(isLength(password))
      return setUser({...user, err: "Password must be at least 6 chars long", success: ''})

    try {
      const res = await axios.post('/user/login', {email, password})
      setUser({...user, err: '', success: res.data.msg})

      localStorage.setItem('firstLogin', true)

      window.location.href = "/"

    } catch (err) {
      err.response.data.msg &&
      setUser({...user, err: err.response.data.msg, success: ''})
    }
  }


  return (

    <div id="login-form-container">

      <div className="container inner-login-container">

          { err && showErrMsg(err) }
          { success && showSuccessMsg(success) }

          <div className="main-demo-account-box">
            <h3 style={{marginTop: "5px"}}>LOGIN DEMO</h3>
            <span className="user">user@gmail.com</span>
            <span className="user">user12345</span>
            <span className="admin">admin@gmail.com</span>
            <span className="admin">admin12345</span>
          </div>

          <div className="row">
            <div className="inner-login-form-box">
              <h3>Login</h3>
              <form onSubmit={loginSubmit}>
                <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control login-input-field"
                      placeholder="Email"
                      autoComplete="off"
                      value={email}
                      onChange={handleChangeInput}
                    />
                </div>
                <div className="form-group custom-password-wrapper">
                    <input
                      type={passwordShown ? "text" : "password"}
                      name="password"
                      id="password"
                      className="form-control login-input-field"
                      placeholder="Password"
                      autoComplete="off"
                      value={password}
                      onChange={handleChangeInput}
                    />
                    <i onClick={togglePasswordVisiblity}>
                      {passwordShown ? eyeSlash : eye}
                    </i>
                </div>

                <div className="login-submit-btn-container">
                  <button
                   type="submit"
                  >
                    Login
                  </button>
                </div>
              </form>

              <div className="register-options-link">
                New Customer? <br /> <Link to="/register">Register</Link>
              </div>
            </div>

          </div>
      </div>

    </div>
  )
}


export default LoginScreen;

