import React from "react"
import { AiOutlineShoppingCart} from "react-icons/ai"; 
import { useContext } from "react";
import { CompraContext } from "../CompraContex";
import { Button, Badge } from "react-bootstrap";

export const CartWidgets =()=> {
 const{items,Limpiar}=useContext(CompraContext);
 
    const sumaCantidad =(items)=>{
        var  q = 0;
        for (let i = 0; i <items.length;i++){   
            q = q + items[i].quantity;
        }
        console.log(q);          
    };    
    if (items.length>0){
        return( 
        <Button variant="outline-secondary"onClick={Limpiar}>
             <i><AiOutlineShoppingCart/></i> 
            <Badge variant="success">{sumaCantidad(items)}</Badge>        
        </Button>                                                                               
        );
    }else{
        
    }
};        

export default CartWidgets;