import { useContext } from "react"
import { CompraContext } from "../CompraContex"

export const CompraDetail=()=>{
    const{items}=useContext(CompraContext);
     
    const totalCompra = () => {
        return items.reduce((acc, curr) => acc + curr.precio * curr.quantity, 0);
    };    
 
    return(
        <div>
            {items.map((item) => {
                return (
                <div>
                    <tr>
                        <td>{items.titulo}</td>
                        <td>{items.quantity}</td>
                        <td>{items.item.precio}</td>
                        <td>{totalCompra()}</td>
                        <td> <button> Borrar </button></td>
                    </tr>

                </div>);
            })};
        </div>
    );
 
};