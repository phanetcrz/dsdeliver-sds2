import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import Orders from "./Orders";

function Routes(){
    return (
        <BrowserRouter> 
            <NavBar/>
            <Switch>
                <Route path="/orders">  
                    <Orders />       
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

//Dicas
// se o usuário usar o /orders será acionado a função "Orders"
// Swith é como se fosse um case, porem usando as rodas
export default Routes;