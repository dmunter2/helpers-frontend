import React from 'react';
import {Route} from 'react-router-dom'
import Header from './Header'
import PostForm from './PostForm';
function HomePage(){


    return(
        <div>
            <h1>Hello</h1>
            {/* <Route exact path='/home' component={PostForm} />
            <Route exact path='/home' component={Header} /> */}
        </div>
    )
}


export default HomePage;