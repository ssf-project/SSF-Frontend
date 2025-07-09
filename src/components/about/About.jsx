import React from 'react';
import './About.css';

function About() {
  return (
    <div id="about" className="about-section">
      <span className='title'>Who We Are</span>
      <div className="about-container">
        <div className="about-left">
          <span>
            Student SupportForce (SSF) is a dedicated community built by students, for students.
            We believe that every student deserves access to resources, mentorship, and opportunities
            that empower their academic journey.
          </span>
          <span>
            Founded in 2025, our mission is to bridge the gap between educational institutions and
            the real needs of students, creating a supportive ecosystem where everyone can thrive
            regardless of their background.
          </span>
          <span>
            Our approach combines peer-to-peer support with professional guidance, creating a holistic
            support system that addresses academic, professional, and personal development needs.
          </span>
        </div>
        <div className="about-right">
          <div className="value-item">
            <div className="icon-circle">💚</div>
            <span><strong>Inclusivity:</strong><br />We welcome and support students from all backgrounds and walks of life.</span>
          </div>
          <div className="value-item">
            <div className="icon-circle">👥</div>
            <span><strong>Community:</strong><br />Building connections that extend beyond the classroom.</span>
          </div>
          <div className="value-item">
            <div className="icon-circle">💡</div>
            <span><strong>Innovation:</strong><br />Constantly evolving our approach to meet student needs.</span>
          </div>
          <div className="value-item">
            <div className="icon-circle">✅</div>
            <span><strong>Integrity:</strong><br />Maintaining the highest standards in all our programs.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
