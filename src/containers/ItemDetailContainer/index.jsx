import { useState, useEffect } from 'react';
import { ItemDetail } from '../ItemDetail/IntemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../../firebase';

export const ItemDetailContainer = () => {
  const [items, setItems] = useState({});
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
    
    }, [itemId]);

  return( 
   <ItemDetail {...items} />
  );
};
