import { useState } from 'react';
import { Button } from 'react-bootstrap';

const ItemCount = ({onAdd,stock}) => {
  const [contador, setContador] = useState(0);

  return (
   <div>
    <Button variant="outline-light" size="sm" onClick = {contador>1 
      ?()=>{ setContador (contador-1);}
      :()=>{ setContador(contador);}
    }>-</Button>
    <Button variant="outline-light" size="sm">{contador}</Button>
    <Button variant="outline-light" size="sm" onClick = {contador<stock
      ?()=>{ setContador (contador+1);}
      :()=>{ setContador(contador);}
    }>+</Button>
    <Button variant="outline-light" size="sm" onClick={ ()=> onAdd (contador)}> Agregar</Button>
   
    </div> 
  );
};

export default ItemCount