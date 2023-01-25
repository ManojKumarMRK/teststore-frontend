import {Route , BrowserRouter, Switch} from 'react-router-dom';
import React, {useEffect} from 'react';
import Navbar from './components/navbar'
import Home from './components/home';
import Search from './components/search';
import Details from './components/details';
import Pagenotfound from './components/404';

const Router = () => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "<script type=\"text/javascript\" id=\"bikScript\" async src=\"https://api.staging.bik.ai/dm/storeFrontScriptsApiFunctions-serveBikScripts/?store=https://63c951acdc72e600093c8ec7--genuine-mousse-6c4307.netlify.app/\"></script>";
        script.async = true;
        document.head.appendChild(script);
    }, []);

    return(
        <BrowserRouter>

           <Navbar/>
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
