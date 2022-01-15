import React from "react"
import './Navbar.css'

import{NavLink} from "react-router-dom";

const NavBar = () => {
    const categories = [
      { id: 'home', address: '/', text: 'Pita´s Food' },
      { id: 'a1', address: '/fitIntegral/Integral', text: 'Integral' },
      { id: 'a2', address: '/fitIntegral/Fit', text: 'Fit' },
      { id: 'b', address: '/dulce', text: 'Dulce' },
      { id: 'c', address: '/salado', text: 'Salado' },
      { id: 'ca', address: '/carrito', text: 'Carrito' },
      
      
    ];
  
    return (
      <section className="nav">
      
        {categories.map((cat) => {
          return (
            <div className="links" key={cat.id}>
              <NavLink to={cat.address} exact activeClassName={'activeClass'}>
                {cat.text}
              </NavLink>
            </div>
          );
          
        })}
      </section>
    );
  };
  

export default NavBar;
