import { Link } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { CompraContext } from "../CompraContex";
import {Table, Button} from "react-bootstrap"

export const Carrito =()=>{
    const{ items, removeProduct, vaciarCarrito}= useContext(CompraContext)
   
    const totalCompra = () => {
      return items.reduce((acc, curr) => acc + curr.precio * curr.quantity, 0);
  };    

    const limpiar =()=>{vaciarCarrito()}
    if (items.length>0){
        return <div>
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
            </div>     
    } else {
        return(
            <div>
                <div><p>No hay Productos en el Carrito</p></div>
                <Link to="/">Seguir Comprando</Link>
            </div>
        );
    };
}
