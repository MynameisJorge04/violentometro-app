import React from "react";
import './TodoTextEncuesta.css'

const TodoTextEncuesta = (props) =>{
    return(
        <div className="container--texto--encuesta">
            <p>
                {props.texto}
            </p>
        </div>
    );
}

export default TodoTextEncuesta;