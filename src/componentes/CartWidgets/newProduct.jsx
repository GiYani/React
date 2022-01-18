import { useContext, useRef } from "react"
import { CompraContext } from "../CompraContex";


export const NewProduct =()=>{

    const{addProduct, enCarro,totalPrecio}=useContext(CompraContext)
    const referencia= useRef ({});
    
    const handleSubmit=(event)=>{
        event.preventDefault();
      
    };
    return(
    <>
    <form onSubmit={handleSubmit}>
    <button ref= {(element) => (referencia.current.producto = element)}
    onClick={(addProduct,enCarro, totalPrecio)}>agregar producto</button>
    </form>
    </>
    );

};
