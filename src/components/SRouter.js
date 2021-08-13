import React from "react";
import {Switch,Route,HashRouter as Router} from "react-router-dom";
import Home from "../router/Home";
import Movies from "../router/Movies";
import Search from "../router/Search";
import TV from "../router/TV";
import Header from "./header";

export default ()=>(
    <Router>
        <>
            <Header />
            <Switch>
                <Route path="/" exact component = {Home}/>
                <Route path="/tv" component={TV} />
                <Route path = "/search" component={Search}/>
                <Route path ="/movies" component={Movies}/>
            </Switch>
        </>
    </Router>
);
