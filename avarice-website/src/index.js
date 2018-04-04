import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from 'redux';

import reducers from './Reducers';
import {composeWithDevTools} from 'redux-devtools-extension'; 
import thunk from 'redux-thunk';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {syncHistoryWithStore} from 'react-router-redux';
import {Provider} from 'react-redux';

import Layout from './containers/Layout';
import Products from './containers/Products';

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
))

//const history = syncHistoryWithStore(browserHistory,store);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route component={Layout}>
                <Route path='/' component={Products}/>
            </Route>
        </Router>
    </Provider>
, document.getElementById('root')
);
registerServiceWorker();
