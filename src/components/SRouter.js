import React from "react";
import {Switch,Route,HashRouter as Router,Redirect} from "react-router-dom";
import Home from "router/Home";
import Search from "router/Search";
import TV from "router/TV";
import Header from "components/Header";
import Detail from "router/Detail";

export default () => (
    <Router>
        <>
            <Header />
            <Switch>
                <Route path="/" exact component = {Home}/>
                <Route path="/tv" component={TV} />
                <Route path = "/search" component={Search}/>
                <Route path = "/tv/:id" component={Detail}/>
                <Route path = "/movie/:id" component={Detail}/>
                <Redirect from ="*" to ="/" />
            </Switch>
        </>
    </Router>
);
