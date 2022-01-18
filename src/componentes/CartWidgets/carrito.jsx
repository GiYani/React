import { Link } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { CompraContext } from "../CompraContex";



export const Carrito =()=>{
    const{ items, removeProduct, vaciarCarrito}= useContext(CompraContext)
    console.log(items)

    const totalCompra = () => {
      return items.reduce((acc, curr) => acc + curr.precio * curr.quantity, 0);
  };    

    const Limpiar =()=>{ vaciarCarrito()}
    if (items.length> 0){
        return <>{
          items.map((item) => {
            return <div>
                <table>
                <tr>
                    <td>{item.title}</td>
                    <td>{item.quantity}</td>
                    <td>{item.precio}</td>
                    <td>{item.quantity * item.precio}</td>
                    <td><button onClick={()=>removeProduct(item.id)}> borrar producto</button></td>

                </tr>
               </table>
            </div>        
          }
          )
        }{totalCompra()}
                  <button onClick={Limpiar}>vaciar Carrito</button>
        </>
    } else {
        return(
            <div>
                <div><p>No hay Productos en el Carrito</p></div>
                <Link to="/">Seguir Comprando</Link>
            </div>
        );
    };
}
