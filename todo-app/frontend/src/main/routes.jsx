import React from "react";
import { createHashHistory } from 'history';
import { Router, Route, Redirect } from "react-router";
import About from "../about/about";
import Todo from "../todo/todo";

export default (props) => {
    const hashHistory = createHashHistory();

    return (
        <Router history={hashHistory}>
            <Route path='/todos' component={Todo} />
            <Route path='/about' component={About} />

            <Redirect from="*" to='/todos' />
        </Router>
    )
}