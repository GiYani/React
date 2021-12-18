
import './App.css';
//import  ItemListContainer  from './containers/ItemListContainer';
//import Button from './componentes/button';
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainers from './containers/ItemListContainer';


const App =()=> {
    return (
    <div className= "App">
        <NavBar/>
        <h1>Hola</h1>
       <ItemListContainers titulo={'no me aperecen los productos '}/>
    </div> 
    );
}

export default App;