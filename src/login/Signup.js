import React, { useState } from 'react';
import Style from 'styled-components';
import Axios from 'axios';
import axiosWithAuth from '../components/axiosWithAuth'
const DIV = Style.div`
// margin-top: 25%;
display: flex;
flex-direction: column;
`
const INPUT = Style.input`
margin: 20px 0 20px 0;
width: 250px;
height: 50px;
border-radius: 8px;
border: white;
font-size: 1.5rem;
padding-left: 3%;
padding-right: 3%;

`
const BUTTON = Style.button`
width: 90px;
height: 40px;
background-color: #353878;
border: none;
color: white;
border-radius: 5px;

`
const BtnHolder = Style.div`
width: 100%;
display: flex;
justify-content: end;
`
const H1 = Style.h1`
text-align: center;
margin: 0;
font-size: 1rem;
`
const DIV3 = Style.div`
height: 100px;
display: flex;
justify-content: center;
align-items: center;
`
const MAIN = Style.div`
`
function Signup() {

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })

    const [loading, setLoading] = useState({
        everything: 'show',
        loading: 'no-show',
        retry: 'no-show'
    })

    const changeHandler = e => {
        e.preventDefault()
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const signUp = e => {
        e.preventDefault()
            setLoading({
                everything: 'no-show',
                loading: 'loading-design',
                retry: 'no-show'
            })
        Axios
            .post('https://seller-backends.herokuapp.com/api/register', credentials)
            .then(res => console.log(res.data))
            .then(() => {
                axiosWithAuth()
                    .post('https://seller-backends.herokuapp.com/api/login', credentials)
                    .then((res) => {
                        localStorage.setItem('token', res.data.token)
                        localStorage.setItem('user', res.data.user_id)
                        localStorage.setItem('new', res.data.username)
                        window.location.href = '/home'

                    })
                
            })
            .catch(() => {
                setLoading({
                    everything: 'no-show',
                    loading: 'no-show',
                    retry: 'invalid'
                })
            })
    }


    return (
        <MAIN>
            <DIV3>
                <div className={loading.retry}>Username is already in use</div>

                <div className={loading.loading}>Loading...</div>
                <H1 className={loading.everything}>Create a username and password</H1>

            </DIV3>
            <DIV >

                <INPUT
                
                    type='text'
                    onChange={changeHandler}
                    value={credentials.username}
                    name='username'
                    placeholder='username'
                />

                <INPUT
                    type='password'
                    onChange={changeHandler}
                    value={credentials.password}
                    name='password'
                    placeholder='password'

                />
                <BtnHolder>
                    <BUTTON onClick={signUp}>Signup</BUTTON>
                </BtnHolder>
            </DIV>

        </MAIN>
    )
}


export default Signup;
