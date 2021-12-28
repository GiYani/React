
import { useEffect, useState } from "react";
import ItemList from "../../componentes/itemList";
import mockedItems from "../../mock/mockItem";
import { useParams } from "react-router-dom";

export const ItemListContainers = ({ greeting }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const { catId } = useParams();

  useEffect(() => {
    setLoading(true);
    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        const myData = catId
          ? mockedItems.filter((item) => item.category === catId)
          : mockedItems;

        resolve(myData);
      }, 1000);
    });

    getItems
      .then((res) => {
        setItems(res);
      })
      .finally(() => setLoading(false));
  }, [catId]);

  return loading ? (
    <h2 style={{color:'rgb(64, 147, 168)', fontWeight:'400'}}>CARGANDO...</h2>
  ) : (
    <>
      <h3 style={{ textAlign: 'center' }}>{greeting}</h3>
      <ItemList items={items} />
    </>
  );
};


export default ItemListContainers;