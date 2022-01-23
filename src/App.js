
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
import { Carrito } from './componentes/CartWidgets/carrito';


  
const App =()=> {
    return (
   <CompraProvider>
    <BrowserRouter className= "App">
        <NavBar/>
           <Switch>
                <Route exact path="/">                 
                    <ItemListContainers gretting={'Home'}/>             
                </Route>
                <Route exact path="/categoria/:catId">
                    <ItemListContainers gretting={'prodCat'}/>                
                </Route>
                <Route exact path="/categoria/integral">
                    <h3 className='title'>Productos Integrales</h3>       
                    <ItemListContainers gretting={'prodCat'}/>             
                </Route>
                <Route exact path="/categoria/fit">
                    <h3 className='title'>Productos Fit</h3>       
                    <ItemListContainers gretting={'prodCat'}/>             
                </Route>
                   <Route exact path="/product/:itemId">
                    <ItemDetailContainer/>
                </Route>
                <Route path="/categoria/dulce">
                    <h3 className='title'>Pasteleria</h3>
                </Route>
                <Route path="/categoria/salado">
                    <h3 className='title'>Opciones Saladas</h3>
                </Route>
                <Route path="/carrito"> 
                    <h3 className='title'>Carrito</h3>  
                    <Carrito/>                   
                </Route>
                <Route path= "*">
                    <Redirect to='/'/>
                </Route>
             </Switch>
        
    </BrowserRouter> 
    </CompraProvider>
  
    );
}

export default App;