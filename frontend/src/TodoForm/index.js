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
                <div className="pregunta">¿Has escuchado algún comentario ofensivo hacia tu aspecto físico? </div>
                <div className="option">
                    <input type="radio" name="q1" value="s" id="q1-si" />
                    <label htmlFor="q1-si" >Si</label>
                </div>
                <div className="option">
                    <input type="radio" name="q1" value="n" id="q1-no" />
                    <label htmlFor="q1-no">No</label>
                </div>
            </div>

            <div className="dos-div">
                <div className="pregunta">¿En alguna ocasión te has sentido intimidado en clase o te han amenazado?</div>
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
                <div className="pregunta">¿Has hablado con alguien sobre ser intimidado?</div>
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
                <div className="pregunta">¿En alguna ocasión te han robado o escondido las cosas?</div>
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
                <div className="pregunta">¿Te sientes seguro en la escuela?</div>
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
                <input className="btn" type="submit" name="Submit" />
            </div>
        </div>
    );
};

export default FormAlumno;
