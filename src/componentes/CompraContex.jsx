import { createContext,useState } from 'react';

export const CompraContext = createContext();

export const CompraProvider = ({children}) => {
    const [items, setItems] = useState([]) 


    const removeProduct = (id) => {
      const auxArray = items.filter((item) => item.id!== id);
      setItems(auxArray);
    };

    const addProduct= (producto) => {
      const agregarProduct = items.find(
        (item) => item.id  === producto.id
      );
  
      if (agregarProduct) {
        agregarProduct.quantity += producto.quantity;
        setItems([...items]);         
      } else {
        setItems([...items, producto]);
      }
    };
    console.log(items)

    const vaciarCarrito =()=>{
      setItems ([])
    }

    const totalPrecio = () => {
      return items.reduce((acc, curr) => acc + curr.precio, 0);
    };
  

   
    return ( <CompraContext.Provider value={{items,removeProduct, addProduct, vaciarCarrito,totalPrecio}}>{children}
    </CompraContext.Provider>);
};    


