import React from 'react';
import logo from '../assets/logo.png';
import './TodoNavigationBar.css';
import { Link } from "react-router-dom";

const NavigationBar = () => {
    return (
        <nav className="navigation-bar">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <ul className="navigation-links">
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#sobre-nosotros">Sobre nosotros</a></li>
                <li><a href="#servicios">Servicios</a></li>
                <li><a href="#contacto">Contacto</a></li>
                <Link className="alert-button" to="/administrador">
                    <li><a href="#contacto">Administrador</a></li>
                </Link>
            </ul>
        </nav>
    );
}

export default NavigationBar;
