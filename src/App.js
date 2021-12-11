
import './App.css';
import  ItemListContainer  from './componentes/NavBar/ItemListContainer';
//import Button from './componentes/button';
import NavBar from './componentes/NavBar/NavBar'
const App =()=> {
    return (
    <div className= "App">
       <NavBar/>
       <ItemListContainer titulo='Pedidos a tu medida'/>
    </div> 
    );
}

export default App;