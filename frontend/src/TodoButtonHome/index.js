import React from "react";
import "./TodoButtonHome.css";
import { Link } from "react-router-dom";
import imgS from "../assets/s.png";
import imgR from "../assets/r.png";
import imgM from "../assets/m.png";

const TodoButtonHome = () => {
    return (
        <div>
            <div className="container--participa">
                <p>
                    ¡Participa en nuestra encuesta y descubre en qué nivel del violentómetro te encuentras! Tu opinión es importante para entender y abordar la violencia en nuestra sociedad. Ayúdanos a crear un entorno más seguro y libre de violencia. ¡Tu voz cuenta!
                </p>
            </div>

            <div className="butonhome--container">
                <Link className="my-link-class" to="/encuesta-inicio">
                    <button>Ir a la encuesta</button>
                </Link>
            </div>
        </div>
    );
};

export default TodoButtonHome;
