import { useState, useEffect } from 'react';
import { ItemDetail } from '../ItemDetail/IntemDetail';
import mockedItems from '../../mock/mockItem';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        const myData = mockedItems.find((item) => item.id === itemId);
        resolve(myData);
      }, 1000);
    });

    getItems.then((res) => {
        setProduct(res);
         })
        .finally(() => setLoading(false));
    }, [itemId]);

  return loading ? 
  <h2 style={{color:'rgb(64, 147, 168)', fontWeight:'400'}}>CARGANDO...</h2> : <ItemDetail {...product} />;
};
