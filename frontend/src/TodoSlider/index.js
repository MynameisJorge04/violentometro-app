import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import './TodoSlider.css'

import imagen1 from '../assets/1-slider.jpg';
import imagen2 from '../assets/2-slider.jpg';
import imagen3 from '../assets/3-slider.jpg';

const TodoSlider = () => {
  const images = [imagen1, imagen2, imagen3];
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return(
    <section className="slider--container">
      <FaArrowLeft className="slider--arrow" onClick={handlePrevious} />
      <img src={images[currentImage]} alt="Slider"/>
      <FaArrowRight className="slider--arrow" onClick={handleNext} />
    </section>
  );
}

export default TodoSlider;
