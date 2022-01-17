import { useContext } from "react";
import { ItemDetail } from "../../containers/ItemDetail/IntemDetail";
import { CompraContext } from "../CompraContex";
import ItemCount from "../ItemCount.Jsx";
import { NewProduct } from "./newProduct";

export const Carrito =()=>{
    const {item, removeProduct,addProduct,addUnidad, enCarro,totalPrecio }= useContext(CompraContext);

    return(
        <div>
        <h3>Productos en carrito</h3>
        {item.map((item, id) => {
          return (
            <ItemDetail
              key={id}
              item={item}
              removeProduct={removeProduct}
              addUnidad={addUnidad}
                                 
            />
          );
         
        })}
        <NewProduct addProduct={addProduct} enCarro={enCarro} totalPrecio={totalPrecio} />
        <ItemCount/>
        </div>
        
    );
    
};