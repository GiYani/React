import React from "react"
import './Navbar.css'
import CartWidgets from '../CartWidgets/CartWidget';

export const NavBar = () => {
    return (      
        <ul>
            <li><h1>Sweet Food</h1></li>
            <li><h3>Fit/Integral</h3></li>
            <li><h3>Dulce </h3></li>
            <li><h3>Salado </h3></li>
            <li><h3>Especial Fiestas </h3></li>
            <li><h3><CartWidgets/></h3></li>
        </ul>
    );
}

export default NavBar;
