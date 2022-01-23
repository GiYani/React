import  './itemDetail.css'
import { useContext, useState } from 'react';
import ItemCount  from '../../componentes/CartWidgets/ItemCount';
import { CompraContext } from '../../componentes/CompraContex';
import { Link } from 'react-router-dom';



export const ItemDetail = ({id, titulo, categoria, descripcion, imagen, precio ,stock}) => { 
  
  const[redireccionCart, setRedireccion]=useState(false);
  const {addProduct}= useContext(CompraContext);
 

  const onAdd =(contador)=>{
    setRedireccion(true)
    addProduct ({quantity:contador,id, titulo, categoria, descripcion, imagen, precio });
  
  }
    
  return (
    <div className={`item_card ${categoria}-fitIntegral`}>
      <h2 style={{ fontWeight:'400'}}>{titulo}</h2> 
        <span>
          <img src={imagen} alt={titulo} className={'big-img'} />
        </span>
      <h3 style={{ fontWeight:'400'}}>{descripcion}</h3>
      <h3 style={{fontWeight:'500'}}>Precio:{precio}</h3>
      <Link to="/">Seguir comprando</Link> 
      <br/>

      <br/>                           
      <div>
        {redireccionCart ? (
        <Link to="/carrito" className='btn'>Finalizar Compra</Link>
        ):(
          <ItemCount
          stock = {stock}
          onAdd ={onAdd}/>
        )}     
                 
      </div>
      
    </div>
    
  );
};


