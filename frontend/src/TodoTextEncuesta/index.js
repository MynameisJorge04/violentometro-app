import React from "react";
import './TodoTextEncuesta.css'

const TodoTextEncuesta = (props) =>{
    return(
        <div className="container--texto--encuesta">
            <h2>
                {props.texto}
            </h2>
            <p>
                {props.texto1}
            </p>
        </div>
    );
}

export default TodoTextEncuesta;