import React from 'react';
import './Login.css';
import { ImFacebook } from 'react-icons/im';
import { AiOutlineGoogle } from 'react-icons/ai';
import { GrFormClose } from 'react-icons/gr';

const Login = () => {
    return (
        <div className="forms-wrapper">
            <div className="close-btn"><GrFormClose className="close-btn-icon" /></div>
            <div className="title"><h3 className="title-1">We're glad you're here. <br />Welcome to XYZ</h3></div>
            <div><button className="facebook-btn"><ImFacebook className="facebook-icon" /><span className="connect-fb">Connect with Facebook</span></button></div>
            <div><button className="google-btn"><AiOutlineGoogle className="facebook-icon" /><span className="connect-fb">Connect with Google</span></button></div>
            <div className="or-paragraph"><div className="or">Or</div></div>
            <div className="email-text">Enter Your Mobile Number</div>
            <input type="text" className="input-number" placeholder="Enter your Mobile Number" />
            <div><button className="email-btn">Continue with Mobile Number</button></div>
        </div>
    );
}

export default Login;
