
import { useEffect, useState } from "react";
import ItemList from "../../componentes/itemList";
/*import mockedItems from "../../mock/mockItem";*/
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase";

export const ItemListContainers = ({ greeting }) => {
  const [items, setItems] = useState([]);
  /*const [loading, setLoading] = useState(true);*/

  const { catId } = useParams();

  useEffect(() => {
    const basedatos= getFirestore()
    const itemColection= basedatos.collection('items');
    if(catId){
    itemColection.get().then( (value)=> {
      let aux= value.docs.map((e)=> {return {...e.data(), id:e.id}});    
      let filtro = aux.filter((e) => e.categoria === catId)
                  console.log(filtro)
      setItems(filtro);
      
        ;    
      
    });   
  }else{
    itemColection.get().then((value)=> {
      let aux= value.docs.map((e)=> {return {...e.data(), id:e.id}});
      setItems(aux) 
      
    }); 
  }

    /* setLoading(true);
    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        const myData = catId
          ? mockedItems.filter((item) => item.category === catId)
          : mockedItems;

        resolve(myData);
      }, 1000);
    }); */

    /* getItems
      .then((res) => {
        setItems(res);
      })
      .finally(() => setLoading(false));*/
  },   [catId ]);

  return (
    <>
      <h3 style={{ textAlign: 'center' }}>{greeting}</h3>
      <ItemList items={items} />
    </>
  );
};


export default ItemListContainers;