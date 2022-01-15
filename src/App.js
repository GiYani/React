
import './App.css';
//import Button from './componentes/button';
import NavBar from './componentes/NavBar/NavBar'
import { ItemDetailContainer } from './containers/ItemDetailContainer';
import ItemListContainers from './containers/ItemListContainer';
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect,
   } from "react-router-dom";
import { CompraProvider } from './componentes/CompraContex';

  
const App =()=> {
    return (
   
    <BrowserRouter className= "App">
         <CompraProvider>
        <NavBar/>
           <Switch>
                <Route exact path="/">                 
                    <ItemListContainers gretting={'Home'}/>             
                </Route>
                <Route exact path="/fitIntegral/:catId">
                    <h3 className='title'>Productos Integrales</h3>       
                    <ItemListContainers gretting={'prodCat'}/>             
                </Route>
                   <Route exact path="/product/:itemId">
                    <ItemDetailContainer/>
                </Route>
                <Route path="/dulce">
                    <h3 className='title'>Pasteleria</h3>
                </Route>
                <Route path="/salado">
                    <h3 className='title'>Opciones Saladas</h3>
                </Route>
                <Route path="/carrito">
                    <h3 className='title'>Carrito</h3>
                    <CompraProvider/>
                </Route>
                <Route path= "*">
                    <Redirect to='/'/>
                </Route>
             </Switch>
             </CompraProvider>
    </BrowserRouter> 
  
  
    );
}

export default App;