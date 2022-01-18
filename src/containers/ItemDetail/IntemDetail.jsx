import  './itemDetail.css'
import { useContext, useState } from 'react';
import ItemCount  from '../../componentes/CartWidgets/ItemCount';
import { CompraContext } from '../../componentes/CompraContex';
import { Link } from 'react-router-dom';



export const ItemDetail = ({category, title, image, description, precio, id, stock }) => { 
  
  const[redireccionCart, setRedireccion]=useState(false);
  const {item, addProduct}= useContext(CompraContext);
 

  const onAdd =(contador)=>{
    setRedireccion(true)
    addProduct ({quantity:contador,category, title, image, description, precio, id, stock });
    alert(`Agrego ${contador} productos     `)
  }
    
  return (
    <div className={`item_card ${category}-fitIntegral`}>
      <h2 style={{ fontWeight:'400'}}>{title}</h2> 
        <span>
          <img src={image} alt={title} className={'big-img'} />
        </span>
      <h3 style={{ fontWeight:'400'}}>{description}</h3>
      <h3 style={{fontWeight:'500'}}>{precio}</h3>
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


