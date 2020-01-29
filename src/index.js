import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import {Provider}  from 'react-redux'
import { createStore } from 'redux';
import {rootReducer} from './reducers'


const store = createStore(rootReducer)
const rootElement = document.getElementById('root')



ReactDOM.render(


    <Provider store={store}>

        {/* <BrowserRouter> */}
            <App />
        {/* </BrowserRouter> */}
    </Provider>,
    rootElement
);


serviceWorker.unregister();
