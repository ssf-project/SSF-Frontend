import React from "react";
import "./Ourservices.css"; // Import the CSS

const Ourservices = () => {
  return (
    <div className="services-section" id="services">
      <span className="services-title">Our Services</span>
      <div className="services-container">
        <div className="service-card">
          <div className="service-icon">📘</div>
          <span className="service-heading">Workshops</span>
          <span className="service-description">
            Interactive sessions led by industry experts and academic professionals
            on various topics including study skills, career development.
          </span>
          <div className="service-points">
            <span>✔ Weekly skill-building workshops</span><br />
            <span>✔ Industry expert guest lectures</span><br />
            <span>✔ Hands-on learning experiences</span>
          </div>
        </div>

        <div className="service-card">
          <div className="service-icon">👥</div>
          <span className="service-heading">Peer Mentoring</span>
          <span className="service-description">
            Connect with experienced students who can provide guidance, share
            resources, and help you navigate academic challenges.
          </span>
          <div className="service-points">
            <span>✔ One-on-one mentorship matching</span><br />
            <span>✔ Study groups and collaborative learning</span><br />
            <span>✔ Academic and career guidance</span>
          </div>
        </div>

        <div className="service-card">
          <div className="service-icon">🎓</div>
          <span className="service-heading">Scholarships</span>
          <span className="service-description">
            Access to financial support opportunities through our network of
            partners and alumni who are committed to student success.
          </span>
          <div className="service-points">
            <span>✔ Merit and need-based awards</span><br />
            <span>✔ Application assistance and guidance</span><br />
            <span>✔ Exclusive partner opportunities</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourservices;
