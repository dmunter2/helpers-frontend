import React, {useState} from 'react';
import Style from 'styled-components';
import signout from './signout.png'
const DIV = Style.div`
height: 50px;
width: 70px;
display: flex;
// justify-content: center;
margin-top: 22px;
align-items: end;
flex-direction: column;
@media (max-width: 600px) {
  width: 30px;
}
`
const H1 = Style.h1`
margin: 0;
font-size: 1.5rem;

`
const IMG = Style.img`
width: 30px;
height: 30px;
`
const H2 = Style.h2`
margin-top: 0;
`

function SignOut(){

    const [logout, setLogout] = useState('no-show')


    const leave = e => {
        if(logout === 'no-show'){ 
            setLogout('signout')

        } else{
            setLogout('no-show') 
        }
    }

    const handleClick = e => {
        e.preventDefault()
        localStorage.removeItem('token')
        localStorage.removeItem('user')

        window.location.href = '/'

    }

    return(
        <DIV onClick={leave}>

            <H1 >
                <IMG src={signout} />
            </H1>

            <H2 className={logout} onClick={handleClick}>Signout</H2>
        </DIV>
    )
}


export default SignOut;

