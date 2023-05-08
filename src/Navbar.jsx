import React from "react";
import { Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {

    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                <Link exact activeClassName="menu_active" to="/" className="navbar-brand">Vision Tech</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link exact activeClassName="menu_active" to="/" className="nav-link active" aria-current="page">Home</Link>
                </li>
                <li className="nav-item">
                <Link exact activeClassName="menu_active" to="/service" className="nav-link">Service</Link>
                </li>           
                <li className="nav-item">
                <Link exact activeClassName="menu_active" to="/about" className="nav-link">About</Link>
                </li>           
                <li className="nav-item">
                <Link exact activeClassName="menu_active" to="/contact" className="nav-link" >Contact</Link>
                </li>           
            </ul>
        </div>
        </div>
    </nav>

    </div>
    </div>
</div>
        </>
    )
}

export default Navbar;