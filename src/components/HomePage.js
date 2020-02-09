import React from 'react';
import {Route} from 'react-router-dom'
import Header from './Header'
import PostForm from './PostForm';
import Style from 'styled-components';
import PostCard from './PostCard';


const DIV = Style.div`
`

function HomePage(){


    return(
        <DIV>
            <Header />
            <Route exact path='/home' component={PostForm} />
            {/* <Route exact path='/home' component={PostCard} /> */}

        </DIV>
    )
}


export default HomePage;