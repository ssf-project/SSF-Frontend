import React from "react";
import "./Howitworks.css";

const steps = [
  {
    number: "1",
    title: "Sign Up",
    description: "Create your account and complete your student profile with your interests and goals.",
  },
  {
    number: "2",
    title: "Get Matched",
    description: "Our system connects you with mentors, resources, and opportunities aligned with your needs.",
  },
  {
    number: "3",
    title: "Engage",
    description: "Participate in workshops, mentoring sessions, and community events.",
  },
  {
    number: "4",
    title: "Grow",
    description: "Track your progress, build your network, and achieve your academic and career goals.",
  },
];

const Howitworks = () => {
  return (
    <div className="how-wrapper" id="howitworks">
      <span className="how-title">How It Works</span>
      <div className="how-steps">
        {steps.map((step, index) => (
          <div className="how-card" key={index}>
            <div className="circle">{step.number}</div>
            <span>{step.title}</span>
            <span>{step.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Howitworks;