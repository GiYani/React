
import './item.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


 const Item = ({ id, title, category, description, image, precio }) => {
    return (
      <Link to={`/product/${id}`}>
        <div>
          <div className={`item_card ${category}-fitIntegral`}>
            <h2 style={{ fontWeight:'400'}}>{title}</h2> 
            <h3 style={{fontWeight:'400'}}> Categoría: {category}</h3>      
            <span>
              <img src={image} alt={title} className={'medium-img'} />
            </span>
            <h3 style={{ fontWeight:'400'}}>{description}</h3>
            <h3 style={{fontWeight:'500'}}>{precio}</h3>
          </div>
        </div>
      </Link>
    );
  };
  export default Item;