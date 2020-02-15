import React from 'react';
import {Route} from 'react-router-dom'
import Header from './Header'
import PostForm from './PostForm';
import Style from 'styled-components';


const DIV = Style.div`
`

function HomePage(){


    return(
        <DIV>
            <Header />
            <Route exact path='/home' component={PostForm} />

        </DIV>
    )
}


export default HomePage;