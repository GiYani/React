import { Link } from "react-router-dom";
import { useContext} from "react";
import { CompraContext } from "../CompraContex";
import {Table, Button } from "react-bootstrap"
import Compra from "./compra";



export const Carrito =()=>{
    const{ items, removeProduct, vaciarCarrito, totalCompra}= useContext(CompraContext) 

    

    const limpiar =()=>{vaciarCarrito()}
    if (items.length>0){
        return <div className="formC">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio U.</th>
                        <th>Precio T.</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item) => {
                            return <tr>
                                <td>{item.titulo}</td>
                                <td>{item.quantity}</td>
                                <td>{item.precio}</td>
                                <td>{item.quantity * item.precio}</td>
                                <td><Button variant="outline-secondary" onClick={() => removeProduct(item.id)}>Eliminar producto</Button>{' '}</td>
                            </tr>
                        }
                        )}
                       <tr>
                            <td></td>
                            <td></td>
                            <td> <p>Total Compra</p></td>
                            <td>{totalCompra()}</td>
                            <td><Button variant="outline-secondary"onClick={limpiar}>Vaciar carrito</Button>{' '}</td>
                        </tr> 
                    </tbody>
                </Table>
                <Compra/>        
            
            </div> 
            
    } else {
        return(

            <div>
                <div><p>No hay Productos en el Carrito</p></div>
                <br></br>
                <br></br>
                <Link to="/">Seguir Comprando</Link>
            </div>      

        );
    };
}
