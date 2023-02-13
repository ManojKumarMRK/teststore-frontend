import {Route , BrowserRouter, Switch} from 'react-router-dom';
import React, {useEffect} from 'react';
import Navbar from './components/navbar'
import Home from './components/home';
import Search from './components/search';
import Details from './components/details';
import Pagenotfound from './components/404';

const Router = () => {

    return(
        <BrowserRouter>

           <Navbar/>
            <div id="bik-widget-wrapper-web-story"></div>
           <Switch>
           <Route exact path='/' component={Home}></Route>
           <Route exact path='/details' component={Details}></Route>
           <Route exact path='/search' component={Search}></Route>
           <Route component={Pagenotfound}></Route>
           </Switch>

        </BrowserRouter>
    );
};

export default Router;
