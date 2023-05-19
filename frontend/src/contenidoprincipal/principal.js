import React from "react";

const Principal = () => {
    function openPopup() {
        document.getElementById('popup').style.display = 'block';
        document.getElementById('link-violentometro').style.display = 'none';
        document.getElementById('boton-main').style.display = 'none';
    }

    function closePopup() {
        document.getElementById('popup').style.display = 'none';
        document.getElementById('contenido-adicional').style.display = 'block';
        document.getElementById('boton-main').style.display = 'block';
    }

    return (
        <main className="" id="main">
            <section className="banner">
                <div className="title--container">
                    <h1> Sí, la violencia también se mide </h1>
                </div>
            </section>

            <section className="aprendizaje">
                <div className="aprendizaje--container">
                    <a id="link-violentometro" onClick={openPopup}>
                        <p>Para poder comenzar a comprender, nos tenemos que plantear la siguiente pregunta:</p>
                        <h2> ¿Qué es el violentometro?</h2>
                    </a>
                    {/* Contenido del pop-up */}
                    <div id="popup" className="popup" style={{ display: 'none' }}>
                        <span className="close" onClick={closePopup}>&times;</span>
                        <h1>EL VIOLENTÓMETRO</h1>
                        <img src="../s.png" alt="Ilustración" className="left-image" />
                        <p>El "Violentómetro" es como una "regla de medición" para saber si tu relación tiene más drama que una telenovela o si es tan tranquila como tomar una siesta en una hamaca.</p>
                        <img src="../r.png" alt="Ilustración" className="right-image" />
                        <p>Te ayuda a identificar si estás en una relación saludable o si es momento de gritar "Sal de ahí!" y buscar una mejor película romántica.</p>
                        <h4>¡No permitas que el amor sea un programa de acción explosivo, mejor usa el Violentómetro y vive feliz!</h4>
                        <img src="../m.png" alt="Ilustración" className="center-image" />
                    </div>
                </div>

                <div id="contenido-adicional" style={{ display: 'none' }} className="aprendizaje--container">
                    <h3>Ahora que sabes que es el violentometro vamos a ver como se divide</h3>
                    <p>El Violentómetro IPN se divide en <strong>cinco escalas de colores</strong>, que representan diferentes niveles de violencia:</p>
                    <div className="aprendizaje--container--items">
                        <div className="aprendizaje--container--item">
                            <img src="../verde.png" alt="Img violencia sin daño" />
                            <p>Violencia Sin Daño: Representada por el color verde, indica una relación libre de violencia</p>
                        </div>
                        <div className="aprendizaje--container--item">
                            <img src="../amarillo.png" alt="Img violencia verbal" />
                            <p>Violencia Verbal: Representada por el color amarillo, abarca expresiones ofensivas, humillaciones y menosprecios verbales.</p>
                        </div>
                        <div className="aprendizaje--container--item">
                            <img src="../naranja.png" alt="Img violencia Psicológica" />
                            <p>Violencia Psicológica: Representada por el color naranja, incluye manipulación emocional, control excesivo y amenazas.</p>
                        </div>
                        <div className="aprendizaje--container--item">
                            <img src="../rojo.png" alt="Img violencia fisica" />
                            <p>Violencia Física: Representada por el color rojo, engloba agresiones físicas como golpes, empujones y maltrato físico.</p>
                        </div>
                        <div className="aprendizaje--container--item">
                            <img src="../morado.png" alt="Img violencia extrema" />
                            <p>Violencia Extrema: Representada por el color morado, implica violencia sexual, violencia económica y amenazas de muerte.</p>
                        </div>
                    </div>

                    <p>Ahora que ya sabes qué es el violentometro y cómo se divide, ¡anímate a hacer la siguiente encuesta!</p>

                    {/* Boton para ir a las encuestas */}
                    <div id="boton-main" className="button--container" style={{ display: 'none' }}>
                        <a href="conociendotemas.html" className="button">Ir a la encuesta</a>
                    </div>
                </div>
            </section>

            <section className="descargas--contenedor">
                    <h2>¿Te interesa saber más?</h2>
                    <p>Si te interesa conocer más acerca del violentometro a continuación puedes encontrar los links de descarga para conocer más acerca del tema.</p>
                    <div className="botones--descargas">
                        <button onClick={() => window.open("files/violentometro.pdf", "_blank")} className="button--descargas">Violentometro</button>
                        <button className="button--descargas">¿Has visto el violentometro últimamente?</button>
                    </div>
            </section>
        </main>
    );
}

export default Principal;
