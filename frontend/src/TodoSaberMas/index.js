import React from "react";
import './TodoSaberMas.css';
import violentometro from '../assets/violentometro.pdf';
import violentometroBanner from '../assets/violentometro-banner.pdf';

const TodoSaberMas = () => {
    return (
        <section className="sabermas--container">
            <div className="text--container--sa">
                <h3>¿Te interesa saber más?</h3>
                <p>Si te interesa conocer más acerca del violentometro a continuación puedes encontrar los links de descarga para conocer más acerca del tema.</p>
            </div>
            <div className="button-container">
                <button onClick={() => window.open(violentometroBanner, "_blank")}>Violentometro</button>
                <button onClick={() => window.open(violentometro, "_blank")}>¿Has visto el violentometro últimamente?</button>
            </div>
        </section>
    );
}

export default TodoSaberMas;
