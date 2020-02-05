import React, {useState} from 'react';
import Style from 'styled-components';
import axiosWithAuth from '../components/axiosWithAuth'
import { connect } from 'react-redux'
import {addUserInfo} from '../actions/actions'
import { createStore } from 'redux';


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
background-color: navy;
border: none;
color: white;
border-radius: 5px;



`
const BtnHolder = Style.div`
width: 100%;
display: flex;
justify-content: end;
margin-left: 17px;
`
const DIV3 = Style.div`
height: 100px;
display: flex;
justify-content: center;
align-items: center;
`
const CONTAIN = Style.div`
// margin-top: 25%;
display: flex;
flex-direction: column;
`

function Login(props) {

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    })


    const [loading, setLoading] = useState({
        loading: 'no-show',
        retry: 'no-show'
    })

    const [user, setUser] = useState({
        username: ''
    })


    const Login = e => {
        e.preventDefault()
        props.addUserInfo('devon')

        setLoading({
            loading: 'loading-design1',
            retry: 'no-show'
        })
        axiosWithAuth()
            .post('https://seller-backends.herokuapp.com/api/login', credentials)
            .then(props.addUserInfo('devon'))
            .then((res) => {
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('user', res.data.user_id)
                localStorage.setItem('new', res.data.username)
                window.location.href = '/home'
                
            })
            .then(() => {
                setLoading({
                    loading: 'no-show',
                    retry: 'no-show'
                })
            })
            .catch(() => {
                setLoading({
                    loading: 'no-show',
                    retry: 'invalid'
                })
            })


        

    }
    const changeHandler1 = e => {
        e.preventDefault()
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const changeHandler2 = e => {
        e.preventDefault()
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    


    return (
        <DIV>
            <DIV3>

                <div className={loading.loading}>Loading...</div>
                <div className={loading.retry}>Username or Password was Incorrect</div>
            </DIV3>
            <CONTAIN>

                <INPUT
                    type='text'
                    onChange={changeHandler1}
                    value={credentials.username}
                    name='username'    
                    placeholder='username'
                />

                <INPUT
                    type='password'
                    onChange={changeHandler2}
                    value={credentials.password}
                    name='password'
                    placeholder='password'

                />
                <BtnHolder>
                    <BUTTON onClick={Login}>Login</BUTTON>
                </BtnHolder>
            </CONTAIN>

        </DIV>
    )
}






export default connect(
    null,
    { addUserInfo }
)(Login);