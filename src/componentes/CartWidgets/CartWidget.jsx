import React from "react"
import { AiOutlineShoppingCart} from "react-icons/ai"; 
import { useContext } from "react";
import { CompraContext } from "../CompraContex";
import { Button, Badge } from "react-bootstrap";


export const CartWidgets =()=> {
 const{items}=useContext(CompraContext);
 
    const sumaCantidad =(items)=>{
        let suma = 0;
        for (let i = 0; i < items.length; i++){   
            suma = suma + items[i].quantity;
        }
        return suma
              
    };    
   console.log(sumaCantidad(items))
    return( 
        items.length>0 && 
        <Button variant="outline-secondary">
         <AiOutlineShoppingCart/><Badge bg="success">{sumaCantidad(items)}</Badge>     
        </Button>                                                                           

    );

   
      
};
export default CartWidgets