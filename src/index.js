import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Route, Router, Switch } from "react-router";
import {createBrowserHistory} from 'history';
import Home from "./components/home";
import About from "./pages/about";
import Contact from "./pages/contacts";
import Auth from "./pages/auth";
import Menu from "./components/menu";
import Footer from "./components/footer";
import Edition from "./components/edition";

const history = createBrowserHistory();
const routing = (
    <Router history={history}>
        <div>
        <Menu />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/auth" component={Auth} />
                <Route path="/edition" component={Edition} />
            </Switch>
        <Footer/>
        </div>
    </Router>
);
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

