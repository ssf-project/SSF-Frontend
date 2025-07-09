import React from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './Thankyou.css'

function Thankyou() {
    const location=useLocation();
    const navigate=useNavigate();

    useEffect(()=>{
        if(!location.state?.formSubmit){
            navigate("/",{replace:true});
        }
    },[location,navigate]);
  return (
    <div className="thankyou-container">
      <div className="thankyou-box">
        <span className="heading">🎉 Thank You for Registering!</span>
        <span className="text">
          Dear Student,<br />
          Your registration with <strong>Student Support Force (SSF)</strong> is successfully received.
        </span>
        <span className="text">
          We’re excited to have you on board and will reach out to you soon with updates and opportunities.
        </span>
        <span className="gratitude-message">
          Together, we empower education and support your journey. 🌟
        </span>
        <a href="/" className="back-home">← Back to Home</a>
      </div>
    </div>
  );
}

export default Thankyou;
