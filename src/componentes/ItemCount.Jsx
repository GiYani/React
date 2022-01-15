import { useState } from 'react';




export const ItemCount = (onAdd) => {
  const [contador, setContador] = useState(1);

  const contadorAdd =()=>{
    onAdd(contador);

  };
  function Check(props){
    return contador<props.stock;

  }

  return (
   <div>
    <button onClick = {contador>1 
      ?()=>{ setContador (contador-1);}
      :()=>{ setContador(contador);}
    }></button>
    <button>{contador}</button>
    <button onClick = {Check
      ?()=>{ setContador (contador+1);}
      :()=>{ setContador(contador);}
    }></button>
    <button onClick={contadorAdd}> Agregar</button>

    </div> 
  );
};
