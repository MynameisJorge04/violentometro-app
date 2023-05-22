import React, { useState } from "react";
import "./form.css";
import imgVerde from "../assets/verde.png";
import imgAmarillo from "../assets/amarillo.png";
import imgNaranja from "../assets/naranja.png";
import imgRojo from "../assets/rojo.png";
import imgMorado from "../assets/morado.png";

const FormAlumno = () => {
    const [result, setResult] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [showResultAlert, setShowResultAlert] = useState(false);
    const [imagen, setImagen] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        // Obtener las respuestas del usuario
        const q1 = document.querySelector('input[name="q1"]:checked')?.value;
        const q2 = document.querySelector('input[name="q2"]:checked')?.value;
        const q3 = document.querySelector('input[name="q3"]:checked')?.value;
        const q4 = document.querySelector('input[name="q4"]:checked')?.value;
        const q5 = document.querySelector('input[name="q5"]:checked')?.value;

        // Validar que se hayan seleccionado todas las respuestas
        if (q1 && q2 && q3 && q4 && q5) {
            // Calcular el nivel del "Violentómetro"
            let nivel = 0;
            if (q1 === "s") nivel++;
            if (q2 === "s") nivel++;
            if (q3 === "s") nivel++;
            if (q4 === "s") nivel++;
            if (q5 === "s") nivel++;

            // Mostrar el nivel en el pop-up
            let mensaje = "";

            if (nivel === 0) {
                mensaje =
                    "Querido usuario, permíteme informarte sobre algo muy relevante: según los datos disponibles, el nivel de violencia en esta situación es bajo. Sin embargo, te insto a ser consciente de que incluso con un nivel bajo, es esencial mantener el respeto y la cortesía en todo momento.";
                setImagen(imgVerde);
            } else if (nivel === 1) {
                mensaje =
                    "Atención, querido usuario: hemos detectado que el nivel de violencia en esta situación se cataloga como medio. Es importante que te tomes un momento para reflexionar sobre tus palabras y acciones antes de continuar.";
                setImagen(imgNaranja);
            } else if (nivel === 2) {
                mensaje =
                    "Atención, querido usuario: hemos recibido información alarmante. El nivel de violencia en esta situación se clasifica como alto. Es de suma importancia que tomemos medidas para garantizar la seguridad y el respeto mutuo.";
                setImagen(imgRojo);
            } else {
                mensaje =
                    'Querido usuario, la situación es crítica. Según la información disponible, el nivel de violencia se encuentra catalogado como "Muy Alto". En este momento, es imprescindible que prestes máxima atención a tus palabras y acciones.';
                setImagen(imgMorado);
            }

            setResult(mensaje);
            setShowAlert(true);
        } else {
            alert("Por favor, responde todas las preguntas.");
        }
    };

    const handleAlertClose = () => {
        setShowAlert(false);
        setShowResultAlert(true);
    };

    const handleResultAlertClose = () => {
        setShowResultAlert(false);
    };

    return (
        <div className="form">
            <div className="title-div">
                <h1>VIOLENTOMETRO ALUMNO - ALUMNO</h1>
                <p>FORMULARIO COMPLETAMENTE CONFIDENCIAL</p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="uno-div">
                    <div className="pregunta">
                        ¿Alguna vez has sentido que las palabras de alguien pueden doler más que un golpe físico en el entorno escolar?{" "}
                    </div>
                    <div className="option">
                        <input type="radio" name="q1" value="s" id="q1-si" />
                        <label htmlFor="q1-si">Si</label>
                    </div>
                    <div className="option">
                        <input type="radio" name="q1" value="n" id="q1-no" />
                        <label htmlFor="q1-no">No</label>
                    </div>
                </div>

                <div className="dos-div">
                    <div className="pregunta">
                        ¿Alguna vez has sentido la necesidad de tener el control total sobre tus relaciones o decisiones?
                    </div>
                    <div className="option">
                        <input type="radio" name="q2" value="s" id="q2-si" />
                        <label htmlFor="q2-si">Si</label>
                    </div>
                    <div className="option">
                        <input type="radio" name="q2" value="n" id="q2-no" />
                        <label htmlFor="q2-no">No</label>
                    </div>
                </div>

                <div className="tres-div">
                    <div className="pregunta">¿Has bromeado sobre las calificaciones de alguno de tus compañeros?</div>
                    <div className="option">
                        <input type="radio" name="q3" value="s" id="q3-si" />
                        <label htmlFor="q3-si">Si</label>
                    </div>
                    <div className="option">
                        <input type="radio" name="q3" value="n" id="q3-no" />
                        <label htmlFor="q3-no">No</label>
                    </div>
                </div>

                <div className="cuatro-div">
                    <div className="pregunta">
                        ¿En alguna ocasión has escondido las cosas a algún compañero para reírte de su reacción?
                    </div>
                    <div className="option">
                        <input type="radio" name="q4" value="s" id="q4-si" />
                        <label htmlFor="q4-si">Si</label>
                    </div>
                    <div className="option">
                        <input type="radio" name="q4" value="n" id="q4-no" />
                        <label htmlFor="q4-no">No</label>
                    </div>
                </div>

                <div className="cinco-div">
                    <div className="pregunta">¿Consideras que las personas se sienten cómodas a tu alrededor?</div>
                    <div className="option">
                        <input type="radio" name="q5" value="s" id="q5-si" />
                        <label htmlFor="q5-si">Si</label>
                    </div>
                    <div className="option">
                        <input type="radio" name="q5" value="n" id="q5-no" />
                        <label htmlFor="q5-no">No</label>
                    </div>
                </div>

                <div>
                    <p>Conoce tus resultados</p>
                    <input className="btn" type="submit" value="Enviar" />
                </div>
            </form>

            {showAlert && (
                <div className="alert-container">
                    <h2 className="alert-title">
                        Nos gusta creer que tenemos una comprensión profunda de nuestros propios pensamientos, acciones y motivaciones, pero en realidad, ¡es todo un juego de espejos! A continuación te mostramos tus resultados:
                    </h2>
                    <button className="alert-button" onClick={handleAlertClose}>
                        Mostrar resultados
                    </button>
                </div>
            )}

            {showResultAlert && (
                <div className="alert-container">
                    <h2 className="alert-title">Tus resultados:</h2>
                    <img src={imagen} alt="Nivel de violencia" className="alert-image" /> {/* Agregar la imagen correspondiente */}
                    <p className="alert-message">{result}</p>
                    <button className="alert-button" onClick={handleResultAlertClose}>
                        Cerrar
                    </button>
                </div>
            )}
        </div>
    );
};

export default FormAlumno;
