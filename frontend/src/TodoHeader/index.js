import React from "react";

import './TodoHeader.css'

const TodoHeader = (props) => {
    return (
        <div className="secondnav">
            <div className="oferta--imagen--texto">
                <p>{props.xd}</p>
            </div>
        </div>
    );
}

export default TodoHeader;