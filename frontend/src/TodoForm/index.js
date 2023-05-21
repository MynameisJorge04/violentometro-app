import React from "react";
import './form.css';

const FormAlumno = () => {
    return (
        <div className="form">
            <div className="title-div">
                <h1>VIOLENTOMETRO ALUMNO - ALUMNO </h1>
                <p>FORMULARIO COMPLETAMENTE CONFIDENCIAL</p>
            </div>

            <div className="uno-div">
                <div className="pregunta">Pregunta 1</div>
                <div className="option">
                    <input type="radio" name="q1" id="q1-option1" />
                    <label htmlFor="q1-option1">Option 1</label>
                </div>
                <div className="option">
                    <input type="radio" name="q1" id="q1-option2" />
                    <label htmlFor="q1-option2">Option 2</label>
                </div>
            </div>

            <div className="dos-div">
                <div className="pregunta">Pregunta 2</div>
                <div className="option">
                    <input type="radio" name="q2" id="q2-option1" />
                    <label htmlFor="q2-option1">Option 1</label>
                </div>
                <div className="option">
                    <input type="radio" name="q2" id="q2-option2" />
                    <label htmlFor="q2-option2">Option 2</label>
                </div>
            </div>

            <div className="tres-div">
                <div className="pregunta">Pregunta 3</div>
                <div className="option">
                    <input type="radio" name="q3" id="q3-option1" />
                    <label htmlFor="q3-option1">Option 1</label>
                </div>
                <div className="option">
                    <input type="radio" name="q3" id="q3-option2" />
                    <label htmlFor="q3-option2">Option 2</label>
                </div>
            </div>

            <div className="cuatro-div">
                <div className="pregunta">Pregunta 4</div>
                <div className="option">
                    <input type="radio" name="q4" id="q4-option1" />
                    <label htmlFor="q4-option1">Option 1</label>
                </div>
                <div className="option">
                    <input type="radio" name="q4" id="q4-option2" />
                    <label htmlFor="q4-option2">Option 2</label>
                </div>
            </div>

            <div className="cinco-div">
                <div className="pregunta">Pregunta 5</div>
                <div className="option">
                    <input type="radio" name="q5" id="q5-option1" />
                    <label htmlFor="q5-option1">Option 1</label>
                </div>
                <div className="option">
                    <input type="radio" name="q5" id="q5-option2" />
                    <label htmlFor="q5-option2">Option 2</label>
                </div>
            </div>

            <div>
                <input className="btn" type="submit" name="Submit" />
            </div>
        </div>
    );
};

export default FormAlumno;
