///// sugar suntax
/// concatenar los strings
let name = 'Gisele'
let lastName='Yaniunas'
console.log(name + ''+ lastName);
console.log( '${name}  ${lastName}') /// template strings//

/// adicionar
let edad = 36
console.log ( edad+1);
console.log (edad++);


// cracion de funcion
function showTime (prop){
    return(
        console.log(prop.timeStart)
    )
};

//const showTime=(prop)=>{ console.log(prop.timeStart)};
//const showTime=prop=>{ console.log(prop.timeStart)};

// USAR ESTO 
 const showTime=({timeStarr, timeEnd}) => console.log(timeStart)
    
/// numero en el mismo array
let num1 =[1,2,3,4];
let num2=[5,6,7,8,9];
let num3= num1.concat(num2);
console.log(num3);
// USAR ESTO  stpread operator
//  num3[...num1, ...num2,];y



//// SUGAR SYNTAX
const condicion = true;
let result = null;
if(condicion){
result = 'correct';
} else { result= 'incorrect';

}
console.log (`This is ${result}`);


//// USAR ESTO ///
const condicion =true; 
console.log(`This is ${ condicion ? 'correct' : 'incorrect'}`);
// ternario: condicion (? validador si es true o false) si es veradero (: y si no) si no es false
//            esto es verdad? devolveme tal (: y si no) esto





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

import { Link } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { CompraContext } from "../CompraContex";

import { CompraDetail } from "./compraDetail";


export const Cart =()=>{
    const{ product, removeProducts}= useContext(CompraContext)
    
    const Limpiar =()=>{ removeProducts()}
    if (product.lenght> 0){
        return (
            <div>
                <table>
                <tr>
                    <td>Producto</td>
                    <td>Cantidad</td>
                    <td>Precio U.</td>
                    <td>Total</td>
                    
                </tr>
                <CompraDetail/>
                </table>
                <button onClick={Limpiar}>vaciar Carrito</button>
            </div>        
        );
    }else {
        return(
            <div>
                <div><p>No hay Productos en el Carrito</p></div>
                <Link to="/">Seguir Comprando</Link>
            </div>
        );
    };
}



