import { useState } from 'react';

const ItemCount = ({onAdd,stock}) => {
  const [contador, setContador] = useState(0);

  
  return (
   <div>
    <button onClick = {contador>1 
      ?()=>{ setContador (contador-1);}
      :()=>{ setContador(contador);}
    }>-</button>
    <button>{contador}</button>
    <button onClick = {contador<stock
      ?()=>{ setContador (contador+1);}
      :()=>{ setContador(contador);}
    }>+</button>
    <button onClick={ ()=> onAdd (contador)}> Agregar</button>
   
    </div> 
  );
};

export default ItemCount