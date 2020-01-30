import React from 'react';
import './App.css';
import PostForm from './components/PostForm'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom';

const App = props => {





  return (
    <BrowserRouter>


      <div className="App">
        <Header />
        <PostForm />



      </div>
      {/* <PrivateRoute /> */}



    </BrowserRouter>

  );
}


export default App;

