import React from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa6";
import Logo from "../../assets/Logo.png";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="footer-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.4236908560197!2d78.46701107493597!3d17.439423683456642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb910dfc78e421%3A0x1dc738993a087c8f!2sOptiCraft!5e0!3m2!1sen!2sin!4v1750751907289!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="footer-content">
        <div className="footer-container">
          <div className="footer-row-1024">
          <div className="footer-logo">
            <div className="Logo">
                          <img src={Logo} alt="SSF-Logo"/>

            </div>
            <span className="logo-heading">
              Empowering students through community,<span className="mobile-break"></span> resources, and support
              since 2025.
            </span>
            <div className="social-icons">
              <span className="icon">
                <FaFacebookF />
              </span>
              <span className="icon">
                <FaXTwitter />
              </span>
              <span className="icon">
                <FaInstagram />
              </span>
              <span className="icon">
                <FaLinkedinIn />
              </span>
            </div>
          </div>

          <div className="footer-links">
            <span>Quick Links</span>
            <ul>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#howitworks">How It Works</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#join">Join Now</a>
              </li>
            </ul>
          </div>
          </div>
          <div className="footer-row-1024">

          <div className="footer-resources">
            <span>Resources</span>
            <ul>
              <li>
                <a href="#blog">Blog</a>
              </li>
              <li>
                <a href="#events">Events</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#support">Support Center</a>
              </li>
              <li>
                <a href="#careers">Careers</a>
              </li>
            </ul>
          </div>

          <div className="footer-contact">
            <span>Contact</span>
            <span>
              <FaLocationDot /> Prakash nagar, Begumpet, Hyderabad
            </span>
            <span>
              <FaEnvelope /> founder@studentsupportforce.com
            </span>
            <span>
              <FaPhone /> +91 6301680400
            </span>
          </div>
        </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-text">
            <span>© 2025 Student Support Force. All rights reserved.</span>
          </div>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
