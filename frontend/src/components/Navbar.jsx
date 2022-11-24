import React from "react";
import {Link} from 'react-router-dom';

const Navbar = () => 
{
        return(
                <header id="navbar">
                        <nav className="navbar navbar-expand-lg navbar-light">
                                <h1 className="navbar-brand">Turnos</h1>
                                <div className="container-fluid">
                                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                                        <li className="nav-item">
                                                        <Link to="/" className="nav-link active" aria-current="page">Inicio</Link>
                                                        </li>
                                                        <li className="nav-item">
                                                        <Link className="nav-link active" aria-current="page">Nosotros</Link>
                                                        </li>
                                                </ul>
                                                <div className="d-flex">
                                                <Link to="/login"><button id="login-button" className="navbar-btn">Iniciar Sesión</button></Link>
                                                        <Link to="/register"><button id="register-button" className="navbar-btn">Registrarse</button></Link>
                                                </div>
                                        </div>
                                </div>
                        </nav>
                </header>
        )
}

export default Navbar;