import React from 'react';
import Header2 from './Header2'
import Style from 'styled-components';
import axios from 'axios'
import BeforeNews from './BeforeNews'
import {Route} from 'react-router-dom'

const DIV = Style.div`
background-color: #F5F5F5;
width: 60%;
height: 1000px;
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
border-radius: 5px;
display: flex;
flex-direction: column;

`
const Contain = Style.div`
padding: 1%;
display: flex;
justify-content: center;
align-items: center;
`
const MAIN = Style.div`
display: flex;
flex-direction: row;
justify-content: center;
`

const DIV4 = Style.div`
width: 35%;
background-color: #F5F5F5;
height: 1000px;
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
border-radius: 5px;
`



function BeforeLogin() {

    
    axios.get('https://seller-backends.herokuapp.com/')
        .then()





        return(

            <div>
                <Header2 />
                <BeforeNews />
            </div>



        )

}





export default BeforeLogin;