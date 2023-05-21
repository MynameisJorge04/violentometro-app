import React from "react";
import './TodoButtonHome.css'
import { Link } from 'react-router-dom';

const TodoButtonHome = () =>{
    return(
        <div className="butonhome--container">
            <Link className="my-link-class" to="/encuesta-inicio">
                <button>Ir a la encuesta</button>
            </Link>
        </div>
    );
}

export default TodoButtonHome;
