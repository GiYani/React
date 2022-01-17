import  './itemDetail.css'
import NavBar from '../../componentes/NavBar/NavBar';
import { useContext } from 'react';
import { CompraContext } from '../../componentes/CompraContex';


export const ItemDetail = ({category, title, image, description, precio, id }) => { 
  const {item, removeProduct,addUnidad}= useContext(CompraContext);
    
  return (
    <div className={`item_card ${category}-fitIntegral`}>
      <h2 style={{ fontWeight:'400'}}>{title}</h2> 
        <span>
          <img src={image} alt={title} className={'big-img'} />
        </span>
      <h3 style={{ fontWeight:'400'}}>{description}</h3>
      <h3 style={{fontWeight:'500'}}>{precio}</h3>
      <div>
      <div>
          <button onClick={() => addUnidad(item.id)}>AGREGAR</button>
          <button onClick={() => removeProduct(item.id)}>BORRAR</button>
          <button onClick={<NavBar to="/"/>}>Seguir Comprando</button>
      </div>
    
      
         
      </div>
    </div>
    
  );
};


