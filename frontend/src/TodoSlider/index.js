import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import './TodoSlider.css'

import imagen1 from '../assets/4-slider.png';
import imagen2 from '../assets/5-slider.png';
import imagen3 from '../assets/7-slider.jpg';
import imagen4 from '../assets/8-slider.png';
import imagen5 from '../assets/9-slider.png';

const TodoSlider = () => {
  const images = [imagen1, imagen2, imagen3, imagen4, imagen5];
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
