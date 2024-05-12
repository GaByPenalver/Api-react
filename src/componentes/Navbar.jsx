import React from "react";

const Navbar = () => {
return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
    <div className="container-fluid">
        <a className="navbar-brand" href="#">
        Hajime no Ippo
        </a>
        <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon"></span>
        </button>
        <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNav"
        >
        <ul className="navbar-nav">
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
                Home
            </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">
                Explorar
            </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">
                Juegos
            </a>
            </li>
            <li className="nav-item">
            <a className="nav-link disabled">Noticias</a>
            </li>
        </ul>
        </div>
    </div>
    </nav>
);
};

export default Navbar;
