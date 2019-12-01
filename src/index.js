import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from './components/common/header/header';
import NotFound from './components/notfound/notfound';
import Favorites from './components/favorites/favorites';
import Home from './components/home/home';
import Search from './components/search/search';
import Footer from './components/common/footer/footer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import "core-js/stable";
import "regenerator-runtime/runtime";

const rootElement = document.getElementById('root')
const store = createStore(rootReducer);

const routing = (
    <Router>
        <Provider store={store}>
            <div className="container">
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/search" component={Search} />
                    <Route path="/fav" component={Favorites} />
                    <Route component={NotFound} />
                </Switch>
                <Footer />
            </div>
        </Provider>
    </Router>
);

ReactDOM.render(routing, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
