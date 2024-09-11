import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./NavBar.css"
import {Link} from "react-router-dom";



const VerticalNavbar = (props) => {
    const userId = props.customerId;
    const userName = props.customerName;          

    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <ul className="navbar-nav d-flex flex-column">
                <li className="nav-item"><Link to="/home" state={{id:userId,name:userName}}>Dashboard</Link></li>
                <li className="nav-item"><Link to="/profile" state={{id:userId,name:userName}}>Profile</Link></li>
                <li className="nav-item"><Link to="/" onClick={ (event) => event.preventDefault() }>Payments</Link></li>
                <li className="nav-item"><Link to="/" onClick={ (event) => event.preventDefault() }>Transfer</Link></li>
            </ul>
        </nav>
    );
};

export default VerticalNavbar;