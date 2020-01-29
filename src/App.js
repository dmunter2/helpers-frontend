import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux'
import { Route } from 'react-router-dom'
import {connect} from 'react-redux';
import PostForm from './components/PostForm'
import {postReducer} from './reducers';


function App() {



  return (

    <div className="App">
      {/* <Route path='/' component={Posts} /> */}
      <PostForm />
    

    </div>
  );
}


export default App;

