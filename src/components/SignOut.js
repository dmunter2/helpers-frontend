import React from 'react';
import Style from 'styled-components';

const DIV = Style.div`
`
const H1 = Style.h1`
margin: 0;
`

function SignOut(){

    const handleClick = e => {
        e.preventDefault()
        localStorage.removeItem('token')
        localStorage.removeItem('user')

        window.location.href = '/'

    }

    return(
        <DIV>


            <H1 onClick={handleClick}>Signout</H1>
        </DIV>
    )
}


export default SignOut;

