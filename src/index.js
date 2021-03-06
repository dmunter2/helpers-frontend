import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider}  from 'react-redux'
import {createStore} from 'redux';
import allReducers from './reducers'

const store = createStore(allReducers);
const rootElement = document.getElementById('root')



ReactDOM.render(


    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);


serviceWorker.unregister();
