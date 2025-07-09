import React, { useState } from "react";
import "./Testimonials.css";
import usericon from "../../assets/usericon.jpg";

const testimonials = [
  {
    name: "Naini Srishailam",
    title: "Intermediate 1st year, Bejjur(MDL) Rebbena(VILL)",
    image: usericon,
    quote:
      "As an Intermediate 1st year student, SSF not only inspired me to stay strong and focused in my studies but also supported me financially during difficult times, making me believe in my journey.",
  },

  {
    name: "Kamera Gnaneshwar",
    title: "Degree final year, Bejjur(MDL) sulugupally(VILL)",
    image: usericon,
    quote:
      "SSF has been a constant support throughout my degree journey, providing academic, career, personal, and financial guidance. Their timely help and approachable nature truly shaped my college experience.",
  },
  
  {
    name: "G.Mounika",
    title: "Degree 1st year, Sirpur(MDL) Lonavelly(VILL)",
    image: usericon,
    quote:
      "As a first-year degree student, the SSF has been a great help in my college journey. Their support in academics, time management, personal well-being, and even financial matters made me feel confident and well-guided from the beginning.",
  },

  {
    name: "L.Prathap",
    title: "Intermediate 1st year,Penchkalpet(MDL)Lonavelly(VILL)",
    image: usericon,
    quote:
      "As a first-year intermediate student, I’m thankful to SSF for guiding me through academic challenges and helping me adjust to college life. Their support, even in financial matters, made a big difference and kept me motivated throughout the year.",
  },

  {
    name: "Bamalapelly Vinay",
    title: "Degree 1st year, Dahegam(MDL) Oddugudem(VILL)",
    image: usericon,
    quote:
      "Starting my degree felt overwhelming, but SSF made it easier with doubt-clearing, study materials, helpful sessions, and financial support. Their constant encouragement kept me focused and positive.",
  },

  {
    name: "P.Chinna",
    title: "Intermediate 1st year, Bareguda",
    image: usericon,
    quote:
      "Being new to college, I was unsure how to handle academic pressure and the new environment. But the SSF team stood by me, offering help in studies, personal guidance, and even financial support when needed.",
  },

  {
    name: "Clendugure Deepak",
    title: "Intermediate 1st year, Sirpur(MDL) Chelapally(VILL)",
    image: usericon,
    quote:
      " As an Intermediate 1st year student, SSF’s academic, personal, and financial support made my first year smooth and motivating.They gave finalcial support also.",
  },

  {
    name: "Nitturi Saicharan",
    title: "Intermediate 2nd year, Penchikalpet(MDL)",
    image: usericon,
    quote:
      "As an Intermediate 2nd year student, SSF stood by me through every academic and personal challenge, giving me the strength and support I needed to stay focused and move forward.",
  },

  {
    name: "Manepally Mahesh",
    title: "Intermediate 1st year, Penchikalpet(MDL) Yellur(VILL)",
    image: usericon,
    quote:
      "As an Intermediate 1st year student, SSF became my biggest support system, helping me stay strong and positive during every challenge, both academically and personally.",
  },

  {
    name: "Challurkar Kranthi",
    title: "Intermediate 1st year, Gudem(VILL)",
    image: usericon,
    quote:
      "As an Intermediate 1st year student, SSF became my biggest support system helped from financial problems to pursue my studies.Motivation from SSF also encouraged me to continue ",
  },

  {
    name: "J.Ram Charan",
    title: "Degree 1st year,Amargonda",
    image: usericon,
    quote:
      "As a Degree 1st year student, SSF's care and support made me feel comfortable, encouraged, and confident to face this new chapter of my life.",
  },

  {
    name: "K.Raju",
    title: "Intermediate first year, Bejjur(MDL) Bareguda(VILL)",
    image: usericon,
    quote:
      "Stepping into college as an Intermediate 1st year student felt overwhelming, but SSF’s constant support and care helped me adjust, stay motivated, and believe in myself.",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => { 
    setIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return ( 
    <div className="testimonial-section" id="testimonials" >
      <span className="testimonial-heading" >What Students Say</span>

      <div className="testimonial-card">
        <img
          src={testimonials[index].image}
          alt={testimonials[index].name}
          className="testimonial-image"
        />
        <div className="testimonial-content">
          <span className="testimonial-name">{testimonials[index].name}</span>
          <span className="testimonial-title">{testimonials[index].title}</span>
          <span className="testimonial-quote">"{testimonials[index].quote}"</span>
        </div>
      </div>

      <div className="testimonial-navigation">
        <button onClick={prevSlide} className="nav-button">
          ‹
        </button>
        {testimonials.map((_, i) => (
          <span key={i} className={`dot ${i === index ? "active" : ""}`} />
        ))}
        <button onClick={nextSlide} className="nav-button">
          ›
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
