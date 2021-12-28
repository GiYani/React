import React from "react"
import { AiOutlineShoppingCart} from "react-icons/ai"; 
import {NavLink} from 'react-router-dom'
function CartWidgets () {
    return ( 
        <div>
           
           <NavLink to={'./carrito'}><AiOutlineShoppingCart/></NavLink> 
        </div>
    );

}
export default CartWidgets;