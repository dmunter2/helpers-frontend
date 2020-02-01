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

function Header2(){



    return(
        <DIV>
            <h1>Hello323</h1>
        </DIV>
    )
}


export default Header2;

