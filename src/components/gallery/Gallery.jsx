import React from 'react'
import { useState, useEffect, useRef } from 'react';
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";
import './Gallery.css';

import slide1 from "../../assets/image0.JPG";
import slide2 from "../../assets/image1.JPG";
import slide3 from "../../assets/image2.JPG";
import slide4 from "../../assets/image3.JPG";
import slide5 from "../../assets/image4.JPG";
import slide6 from "../../assets/image5.JPG";
import slide7 from "../../assets/image6.JPG";
import slide8 from "../../assets/image8.JPG";
import slide9 from "../../assets/image9.JPG";
import slide10 from "../../assets/image10.JPG";
import slide11 from "../../assets/image11.JPG";
import slide12 from "../../assets/image12.JPG";
import slide13 from "../../assets/image13.JPG";


const images=[slide1,slide2,slide3,slide4,slide5,slide6,slide7,slide8,slide9,slide10,slide11,slide12,slide13];

const Gallery=()=>{
    const [currentIndex, setCurrentIndex]=useState(0);
    const [isHovered, setIsHovered]=useState(false);
    const intervalRef=useRef(null);

    const goToNext=()=>{
        setCurrentIndex((prev)=>(prev + 1) % images.length );
    };
    const goToPrev=()=>{
        setCurrentIndex((prev)=>(prev - 1 + images.length ) % images.length);
    };
    useEffect(()=>{
        if(!isHovered){
            intervalRef.current=setInterval(goToNext,3000);
        }
        return ()=> clearInterval(intervalRef.current);
    },[isHovered]);

  return (
    <div className='gallery-section' id='gallery'>
        <span className='gallery-heading'>Gallery</span>
    <div className='carousel-container' onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
        <button className='carousel-btn left' onClick={goToPrev}><FiChevronLeft className='carousel-icon' /></button>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className='carousel-image'/>
        <button className='carousel-btn right' onClick={goToNext}><FiChevronRight className='carousel-icon' /></button>
    </div>
    </div>
  )
}

export default Gallery