import { useRef } from "react"


export const NewProduct =({addProduct, enCarro,totalPrecio})=>{
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
