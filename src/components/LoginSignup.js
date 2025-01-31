import React from 'react';
import './LoginSignup.css';
import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'


const LoginSignup = () => {
  return (
    <div className="Container">
        <div className="header">
            <div className="text">Sign up</div>
            <div className="underline"></div>
        </div>
       <div className="inputs">
        <div className="inputs">
            <img src={user_icon} alt=""/>
            <input type="text"/>
        </div>
        <div className="inputs">
            <img src={email_icon} alt=""/>
            <input type="email"/>
        </div>
        <div className="inputs">
            <img src={password_icon}alt=""/>
            <input type="password"/>
        </div>
    </div>
    <div className="forgot-password">Lost password?<span>Click Here!
        </span></div>
    <div className="submit-container">
        <div className="submit">Sign up</div>
        <div className="submit">Login</div>
    </div>

    </div>
  )
}

export default LoginSignup;
