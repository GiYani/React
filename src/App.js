
import './App.css';
//import Button from './componentes/button';
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainers from './containers/ItemListContainer';


const App =()=> {
    return (
    <div className= "App">
        <NavBar/>
        <h1 className='fit'>Productos Fit</h1>
       <ItemListContainers />
    </div> 
    );
}

export default App;