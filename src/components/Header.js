import React from 'react';
import Style from 'styled-components';

const DIV = Style.div`
border: 1px solid #F5F5F5;
background-color: #F5F5F5;
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
margin-bottom: 2%;
height: 60px;
display: flex;
flex-direction: row;
`
const H1 = Style.h1`
margin: 0;
margin-left: 4%;
text-align: initial;
color: #25282a;
font-size: 2rem;
width: 40%;
margin-right: 0;
`
const H2 = Style.h1`
margin: 0;

text-align: end;
color: #5eb0e5;
font-size: 2rem;
width: 50%;
`


function Header(){



    return(
        <DIV>
            <H1>Post-It</H1>
            <H2>Welcome!</H2>
        </DIV>
    )
}



export default Header;

