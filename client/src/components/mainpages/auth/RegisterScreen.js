import React, { useState  } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { showErrMsg, showSuccessMsg } from "../utils/Notification/Notification";
import { isEmpty, isEmail, isLength, isMatch } from "../utils/validation/Validate";
import "./register-page.css";

const eye = <i className="fa fa-eye-slash" aria-hidden="true"></i>;
const eyeSlash = <i className="fa fa-eye" aria-hidden="true"></i>;

const initialState = {
  name: '',
  email: '',
  password: '',
  cf_password: '',
  err: '',
  success: ''
}

function RegisterScreen() {
  const [passwordShown, setPasswordShown] = useState(false);

  const [user, setUser] = useState(initialState)
  const { name, email, password, cf_password, err, success } = user;


  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const handleChangeInput = e => {
    const {name, value} = e.target
    setUser({...user, [name]:value, err: '', success: ''})
  }

  const registerSubmit = async e => {
    e.preventDefault()
    if(isEmpty(name) || isEmpty(password))
        return setUser({...user, err: "All fields are required", success: ''})

    if(!isEmail(email))
        return setUser({...user, err: "Email is invalid", success: ''})

    if(isLength(password))
        return setUser({...user, err: "Password must be at least 6 chars long", success: ''})

    if(!isMatch(password, cf_password))
        return setUser({...user, err: "Passwords do not match", success: ''})

    try {
      const res = await axios.post('/user/register', {
        name, email, password
      })

      setUser({...user, err: '', success: res.data.msg})

      window.location.href = "/login"

    } catch (err) {
       err.response.data.msg &&
       setUser({...user, err: err.response.data.msg, success: ''})
    }

  }

  return (
    <div id="register-form-container">

      {err && showErrMsg(err)}
      {success && showSuccessMsg(success)}

      <div className="container inner-register-container">

          <div className="row">
            <div className="inner-register-form-box">

              <h3>Create New Account</h3>
              <form onSubmit={registerSubmit}>
                <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control register-input-field"
                      placeholder="Name"
                      autoComplete="off"
                      value={name}
                      onChange={handleChangeInput}
                    />
                </div>
                <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control register-input-field"
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
                      className="form-control register-input-field"
                      placeholder="Password"
                      autoComplete="off"
                      value={password}
                      onChange={handleChangeInput}
                    />
                     <i onClick={togglePasswordVisiblity}>
                       {passwordShown ? eyeSlash : eye}
                    </i>
                </div>
                <div className="form-group custom-password-wrapper">
                    <input
                      type={passwordShown ? "text" : "password"}
                      name="cf_password"
                      id="cf_password"
                      className="form-control register-input-field"
                      placeholder="Confirm Password"
                      autoComplete="off"
                      value={cf_password}
                      onChange={handleChangeInput}
                    />
                </div>

                <div className="register-submit-btn-container">
                  <button
                   type="submit"
                  >
                    Register
                  </button>
                </div>
              </form>

              <div className="login-options-link">
                 Already have an account?
                 <br />
                 <Link to="/login">Log In</Link>
              </div>
            </div>

          </div>
      </div>

    </div>
  )

}


export default RegisterScreen;

