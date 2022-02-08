
import { useEffect, useState } from "react";
import ItemList from "../../componentes/itemList";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase";

export const ItemListContainers = ({ greeting }) => {
  const [items, setItems] = useState([]);
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

   },   [catId ]);

    const titulos =[
    {cat:"integral", titulo:"Productos Integrales"},
    {cat:"fit", titulo:"Productos Fit"},
    {cat:"dulce", titulo:"Productos Dulces"},
    {cat:"salado", titulo:"Productos Salados"}
    ]
    
    const title = titulos.find((e)=>{return e.cat === catId}
    );   
    return (
    <> 
        <h3  class="title" style={{ textAlign: 'center' }}>{title?.titulo}</h3>
         <h3 style={{ textAlign: 'center' }}>{greeting}</h3>
      <ItemList items={items} />
    </>
  );
};


export default ItemListContainers;