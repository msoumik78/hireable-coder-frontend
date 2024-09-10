import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./NavBar.css"

const VerticalNavbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <ul className="navbar-nav d-flex flex-column">
                <li className="nav-item"><a className="nav-link" href="">Dashboard</a></li>
                <li className="nav-item"><a className="nav-link" href="">Profile</a></li>
                <li className="nav-item"><a className="nav-link" href="">Transactions</a></li>
                <li className="nav-item"><a className="nav-link" href="">Payments</a></li>
            </ul>
        </nav>
    );
};

export default VerticalNavbar;