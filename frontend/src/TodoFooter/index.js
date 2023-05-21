import React from "react";
import './TodoFooter.css'
import logo from '../assets/logo.png';

const TodoFooter = () => {
    return (
        <footer>
            <div className="footer--container">
                <div className="item"><img src={logo} alt="Logo"/></div>
                <div className="item"><h3>Enlaces</h3></div>
                <div className="item"><h3>¿Qué es gob.mx?</h3></div>
                <div className="item"><h3>Denuncias</h3></div>
            </div>
        </footer>
    );
}

export default TodoFooter;
