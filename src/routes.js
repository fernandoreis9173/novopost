import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Sobre from './components/Sobre';
import Header from './components/Header';
import Contato from './components/Contato';
import Inicio from './components/Inicio';
import Footer from './components/Footer';
import Home from './components/Home';


const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                 <Route exact path="/" component={Home}/>
                <Route  path="/inicio" component={Inicio}/>
                <Route  path="/sobre" component={Sobre}/>
                <Route  path="/contato" component={Contato}/>
            </Switch>
            <Footer/>
            
        </BrowserRouter>
    )
}

export default Routes;