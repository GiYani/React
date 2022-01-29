import  './itemDetail.css'
import { useContext, useState } from 'react';
import ItemCount  from '../../componentes/CartWidgets/ItemCount';
import { CompraContext } from '../../componentes/CompraContex';
import { Link } from 'react-router-dom';
import { Card} from 'react-bootstrap';



export const ItemDetail = ({id, titulo, categoria, descripcion, imagen, precio ,stock}) => { 
  
  const[redireccionCart, setRedireccion]=useState(false);
  const {addProduct}= useContext(CompraContext);
 

  const onAdd =(contador)=>{
    setRedireccion(true)
    addProduct ({quantity:contador,id, titulo, categoria, descripcion, imagen, precio });
  
  }
    
  return (
    <div className={`item_card ${categoria}-fitIntegral`}>
         <Card style={{ width: '28rem'}}>
            <Card.Body>
            <Card.Title>{titulo}</Card.Title>    
            <Card.Img variant="top" src={imagen} alt={titulo} style={{ width: '25rem' }}  />            
            <Card.Text>Precio${precio}</Card.Text>
            <Card.Text style ={{textAlign:'center'}}><Link to="/"  className='btn'>Seguir comprando</Link></Card.Text>
            </Card.Body>
          </Card>
      
      <br/>

      <br/>                           
      <div>
        {redireccionCart ? (
        <Link to="/carrito"  className='btn'>Finalizar Compra</Link>
        ):(
          <ItemCount
          stock = {stock}
          onAdd ={onAdd}/>
        )}     
                 
      </div>
      
    </div>
    
  );
};


