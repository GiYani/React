import { createContext,useState } from 'react';

export const CompraContext = createContext();

export const CompraProvider = ({children}) => {
    const [items, setItems] = useState([]) 


    const removeProduct = (id) => {
      const auxArray = items.filter((item) => item.id!== id);
      setItems(auxArray);
    };

    const addProduct= (item, id) => {
      const agregarProduct = items.find(
        (item) => item.id  === id
      );
  
      if (agregarProduct) {
        agregarProduct.cantidad += 1;
        setItems([...items]);         
      } else {
        setItems([...items, { item:item, cantidad: 1 }]);
      }
    };
    
    const addUnidad = (id) => {
      const agregarProduct = items.find((item) => item.id === id);
  
      if (agregarProduct) {
        agregarProduct.id += 1;
        setItems([...items]);
      }
    };

    const enCarro =(id)=>{
      return items.findIndex((item)=>item.id===id);
    };
    const totalPrecio = () => {
      return items.reduce((acc, curr) => acc + curr.precio, 0);
    };
  

   
    return ( <CompraContext.Provider value={[removeProduct, addProduct, addUnidad, enCarro, totalPrecio]}>{children}
    </CompraContext.Provider>);
};    


