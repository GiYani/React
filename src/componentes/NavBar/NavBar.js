import React from "react"
import './Navbar.css'
import{NavLink, Link} from "react-router-dom"
import CartWidgets from "../CartWidgets/CartWidget";


const NavBar = () => {
    const categories = [
      { id: 'home', address: '/', text: 'Pita´s Food' },
      { id: 'a0', address : '/categoria/:catId' },
      { id: 'a1', address: '/categoria/integral', text:'Integral'},
      { id: 'a2', address: '/categoria/fit', text: 'Fit' },
      { id: 'b', address: '/categoria/postres', text: 'Postres' },
      { id: 'c', address: '/categoria/salado', text: 'Salado' },
      { id: 'ca', address: '/carrito', },
            
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
        <Link to={`/carrito`}>
               <CartWidgets/> </Link> {""} 
          
       </section>
    );
  };
  

export default NavBar;
