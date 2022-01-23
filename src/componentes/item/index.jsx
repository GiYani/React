
import './item.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


 const Item = ({ id, titulo, categoria, descripcion, imagen, precio,}) => {
    
   
    return (
      <Link to={`/product/${id}`}>
        <div>
          <div className={`item_card ${categoria}-fitIntegral`}>
            <h2 style={{ fontWeight:'400'}}>{titulo}</h2> 
            <h3 style={{fontWeight:'400'}}> Categoría: {categoria}</h3>      
            <span>
              <img src={imagen} alt={titulo} className={'medium-img'} />
            </span>
            <h3 style={{ fontWeight:'400'}}>{descripcion}</h3>
            <h3 style={{fontWeight:'500'}}>Precio:{precio}</h3>
           </div>
        </div>
      </Link>
    );
  };
  export default Item;