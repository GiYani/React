
import './item.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Card } from 'react-bootstrap';


 const Item = ({ id, titulo, categoria, descripcion, imagen, precio,}) => {
    
   
    return (
      <Link to={`/product/${id}`}>
        <div>
          <div className={`item_card ${categoria}-fitIntegral`}>
          <Card style={{ width: '18rem',height:'28rem'  }}>
            <Card.Body>
            <Card.Title>{titulo}</Card.Title>    
            <Card.Img variant="top" src={imagen} alt={titulo} style={{ width: '15rem' }}  />
            <Card.Text>{descripcion}</Card.Text>
            <Card.Text>Precio${precio}</Card.Text>
            </Card.Body>
          </Card>
         </div>
        </div>
      </Link>
    );
  };
  export default Item;