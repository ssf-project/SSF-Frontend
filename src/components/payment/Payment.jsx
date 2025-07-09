import React from "react";
// import  {useEffect} from "react";
// import { useLocation,useNavigate } from "react-router-dom";
import phonepay from '../../assets/phonepay.png';
import paytm from '../../assets/Paytm.jpg';
import gpay from '../../assets/gpay.png';
import qrcode from '../../assets/qrcode.jpg';
import './Payment.css'

function Payment() {
    // const location=useLocation();
    // const navigate=useNavigate();

    // useEffect(()=>{
    //     if(!location.state?.formSubmit){
    //         navigate("/",{replace:true});
    //     }
    // },[location,navigate]);

    const handleDonateClick = () => {
        const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
        const upiLink = "upi://pay?pa=7675820393-2@ybl&pn=Support%20Students&cu=INR";

        if (isMobile) {
            window.location.href = upiLink;
        } else {
            alert("Please scan the QR code using any UPI app on your phone.");
        }
    };

    return (
        <>
            <div className="page-title-wrapper">
                <span className="page-title">Support US</span>
            </div>

            <div className="container">
                {/* Left panel */}
                <div className="panel">
                    <span className="panel-subtitle">Scan to Donate</span>

                    <div className="upi-apps">
                        <img src={phonepay} alt="Phone Pay" />
                        <img src={gpay} alt="Google Pay" />
                        <img src={paytm} alt="Paytm" />
                    </div>

                    <img
                        src={qrcode}
                        alt="QR Code"
                        className="qr-code"
                    />

                    <span>Scan this QR code using any UPI App</span>
                    <button className="donate-button" onClick={handleDonateClick}>
                        Submit
                    </button>
                </div>

                {/* Right panel */}
                <div className="panel">
                    <span className="panel-subtitle">Benefits of Donating</span>
                    <ul>
                        <li>Empowers education for underprivileged children</li>
                        <li>Improves healthcare access in rural areas</li>
                        <li>Receive Official Certificates after Donation</li>
                        <li>Inviting Donors for Every event conducted by SSF</li>
                        <li>100% Donation Tracking</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Payment;
