import { useContext } from "react"
import { CompraContext } from "../CompraContex"

export const CompraDetail=()=>{
    const{products}=useContext(CompraContext);
     
    const totalCompra =(products)=()=>{
         return( products.productos.precio * products.quantity);
    };
    const sumaCompra =(products)=()=>{
        let total = 0
        for (let i = 0; i <products.length; i++){
            total = total + products(i).productos.precio * products(i).quantity;
        };
        return(total);
    };    
 
    return(
        <div>
            {products.map((products) => {
                return (
                <div>
                    <tr>
                        <td>{products.productos.title}</td>
                        <td>{products.quantity}</td>
                        <td>{products.productos.precio}</td>
                        <td>{totalCompra(products)}</td>
                        <td> <button> Borrar </button></td>
                    </tr>
                    <tr>
                    <td> <p>Precio Total</p> </td>
                    <td>{sumaCompra(products)}</td>
                    </tr>
                </div>);
            })};
        </div>
    );
 
};