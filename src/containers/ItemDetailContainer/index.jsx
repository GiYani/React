import { useState, useEffect } from 'react';
import { ItemDetail } from '../ItemDetail/IntemDetail';
/*import mockedItems from "../../mock/mockItem";*/
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase';

export const ItemDetailContainer = () => {
  const [items, setItems] = useState({});
  /*const [loading, setLoading] = useState(true);*/

  const { itemId } = useParams();

  useEffect(() => {
    const basedatos= getFirestore()
    const itemColection= basedatos.collection('items');
    
    itemColection.get().then((value)=> {
      let aux= value.docs.map((e)=> {return {...e.data(), id:e.id}});
      let unico= aux.find((e)=> {return e.id === itemId;
      });      
        setItems(unico)       
       
    });   
    /*
    setLoading(true);
    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        const myData = mockedItems.find((item) => item.id === itemId);
        resolve(myData);
      }, 1000);
    });

    getItems.then((res) => {
        setProduct(res);
}) .finally(() => setLoading(false));*/
    }, [itemId]);

  return( 
   <ItemDetail {...items} />
  );
};
