import React from 'react';
import {Route} from 'react-router-dom'
import Header from './Header'
import PostForm from './PostForm';

function HomePage(){


    return(
        <div>
            <Header />
            <Route exact path='/home' component={PostForm} />
        </div>
    )
}


export default HomePage;