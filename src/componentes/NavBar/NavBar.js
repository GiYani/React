import React from "react"
import './Navbar.css'
import{NavLink} from "react-router-dom";

const NavBar = () => {
    const categories = [
      { id: 'home', address: '/', text: 'Pita´s Food' },
      { id: 'a0', address : '/categoria/:catId' },
      { id: 'a1', address: '/categoria/integral', text:'Integral'},
      { id: 'a2', address: '/categoria/fit', text: 'Fit' },
      { id: 'b', address: '/categoria/dulce', text: 'Dulce' },
      { id: 'c', address: '/categoria/salado', text: 'Salado' },
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
