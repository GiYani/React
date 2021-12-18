
import { useEffect, useState } from "react";
import ItemList from "../../componentes/itemList";
import MockedItems from "../../mock/mockItem";

const ItemListContainers =()=>{

    const[items,setItems]= useState([]);

    useEffect( ()=>{
        const itemPromise = new Promise ((res,rej) => {
            res(MockedItems);
        });
        itemPromise.then((res)=> setItems(res))
    }, [items]);

    return <ItemList items = {items}/>;
};

export default ItemListContainers;