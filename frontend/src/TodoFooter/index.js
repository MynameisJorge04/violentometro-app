import React from "react";
import './TodoFooter.css'

const TodoFooter = () => {
    return (
        <footer>
            <div className="footer--container">
                <div className="item"><img src="imgs/goblogo.png" alt="Logo gobierno" /></div>
                <div className="item"><h3>Enlaces</h3></div>
                <div className="item"><h3>¿Qué es gob.mx?</h3></div>
                <div className="item"><h3>Denuncias</h3></div>
            </div>
        </footer>
    );
}

export default TodoFooter;
