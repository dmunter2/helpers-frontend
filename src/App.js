import React from 'react';
import './App.css';
import HomePage from './components/HomePage'
import PrivateRoute from './components/PrivateRoute'
import {BrowserRouter, Route} from 'react-router-dom'
import BeforeLogin from './components/beforeLogin/BeforeLogin';



const App = () => {





  return (
    <BrowserRouter>

      <Route exact path='/' component={BeforeLogin} />
      <PrivateRoute path='/home' component={HomePage}/>

    </BrowserRouter>

  )
}


export default App;

