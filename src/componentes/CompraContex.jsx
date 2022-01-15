import { createContext,useState } from 'react';

export const CompraContext = createContext();

export const CompraProvider = ({children}) => {
    const [products, setProducts] = useState([]) 


    const removeProduct = (productos) => {
        setProducts([]);
    };
    
    const addProduct = (productos) => {
        if (enCarro(productos.productos.id===-1)) {
           let newProduct=[productos,...products];
          setProducts(newProduct);
        } else {
          let findItem = products.find((item)=>
          item.productos.id===productos.productos.id);
            
          if(findItem){
               let newCantidad = findItem.quantity + productos.quantity;
               let index = products.indexOf(findItem);
               let newCart= [...products]
               newCart[index].quantity = newCantidad;
               setProducts(newCart);
    
              } 
        }
    };

    const enCarro =(id)=>{
      return products.findIndex((item)=>item.id===id);
    };



    
    return ( 
    <CompraContext.Provider value={[removeProduct, addProduct, enCarro]}>{children}
    </CompraContext.Provider>);
};    


