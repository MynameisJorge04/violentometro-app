import React from "react";
import './TodoImageEncuesta.css'
import { Link } from "react-router-dom";

const TodoImageEncuesta = (props) =>{
    return(
        <div className="container--imagenencuesta">
        <Link className="my-link-class--encuesta" to={props.linkTo} >
            <img src={props.imgSrc} className="image--encuesta"/>
            <p className="image--caption">{props.caption}</p>
        </Link>
        </div>
    );
}

export default TodoImageEncuesta;