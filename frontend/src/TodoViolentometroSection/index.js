import React from "react";
import './TodoViolentometroSection.css'

const TodoViolentometroSection = () => {
  function openPopup() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("link-violentometro").style.display = "none";
    document.getElementById("boton-main").style.display = "none";
  }

  function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("contenido-adicional").style.display = "block";
    document.getElementById("boton-main").style.display = "block";
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
        <a id="link-violentometro" className="button--popup" onClick={openPopup}>
          Ver mas
        </a>
        {/* Contenido del pop-up */}
        <div id="popup" className="popup" style={{ display: "none" }}>
          <span className="close" onClick={closePopup}>
            &times;
          </span>
          <h1>EL VIOLENTÓMETRO</h1>
          <img src="../s.png" alt="Ilustración" className="left-image" />
          <p>
            El "Violentómetro" es como una "regla de medición" para saber si tu
            relación tiene más drama que una telenovela o si es tan tranquila
            como tomar una siesta en una hamaca.
          </p>
          <img src="../r.png" alt="Ilustración" className="right-image" />
          <p>
            Te ayuda a identificar si estás en una relación saludable o si es
            momento de gritar "Sal de ahí!" y buscar una mejor película
            romántica.
          </p>
          <h4>
            ¡No permitas que el amor sea un programa de acción explosivo, mejor
            usa el Violentómetro y vive feliz!
          </h4>
          <img src="../m.png" alt="Ilustración" className="center-image" />
        </div>
      </div>
    </section>
  );
};

export default TodoViolentometroSection;
