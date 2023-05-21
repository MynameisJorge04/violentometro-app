import React, { useState } from "react";
import './TodoViolentometroSection.css'

//Imagenes

import Imagen1 from '../assets/s.png';
import Imagen2 from '../assets/r.png';
import Imagen3 from '../assets/m.png';

const TodoViolentometroSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = (e) => {
    e.preventDefault();
    setIsPopupOpen(true);
  }

  const closePopup = (e) => {
    e.preventDefault();
    setIsPopupOpen(false);
  }

  return (
    <section className="violentometro--container">
      <div className="text--container">
        <h2>
          ¿Que es el <span>violentometro?</span>
        </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>

      <div className="button-container">
        {!isPopupOpen && 
          <a className="button--popup" onClick={openPopup}>
            Ver mas
          </a>
        }
        {isPopupOpen &&
          <div className="popup">
            <span className="close" onClick={closePopup}>
              &times;
            </span>
            <h1>EL VIOLENTÓMETRO</h1>
            <img src={Imagen1} alt="Ilustración" className="left-image" />
            <p>
              El "Violentómetro" es como una "regla de medición" para saber si tu
              relación tiene más drama que una telenovela o si es tan tranquila
              como tomar una siesta en una hamaca.
            </p>
            <img src={Imagen2} alt="Ilustración" className="right-image" />
            <p>
              Te ayuda a identificar si estás en una relación saludable o si es
              momento de gritar "Sal de ahí!" y buscar una mejor película
              romántica.
            </p>
            <h4>
              ¡No permitas que el amor sea un programa de acción explosivo, mejor
              usa el Violentómetro y vive feliz!
            </h4>
            <img src={Imagen3} alt="Ilustración" className="center-image" />
          </div>
        }
      </div>
    </section>
  );
};

export default TodoViolentometroSection;
