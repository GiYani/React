
import './item.css'
const Item =({item})=>{
    return(
    <div>
        <h1>{item.title}</h1>
        <h3>{item.description}</h3>
        <h3>{item.precio}</h3>
        <p>{item.pictureurl}</p>
    </div>)
    
};
export default Item;