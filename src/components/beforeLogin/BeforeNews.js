import React, {useEffect, useState} from 'react';
import Style from 'styled-components';
import Axios from 'axios';
import BeforeCard from './BeforeCard'
import Login from '../../login/Login';
import Signup from '../../login/Signup';


const DIV = Style.div`
background-color: #F5F5F5;
width: 60%;
height: 1000px;
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
border-radius: 5px;
display: flex;
flex-direction: column;
// justify-content: center;
// align-items: flex-start;

`
const MAIN = Style.div`
display: flex;
flex-direction: row;
// justify-content: center;
justify-content: space-around;
align-items: center;
padding-left: 1%;
padding-right: 1%;
align-items: flex-start;

`


const DIV4 = Style.div`
width: 35%;
background-color: #F5F5F5;
height: 500px;
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
border-radius: 5px;
display: flex;
justify-content: flex-start;
flex-direction: column;
align-items: center;
`
const DIV6 = Style.div`

`
const Header = Style.div`
display: flex;
flex-direction: row;
justify-content: space-around;
width: 75%;
height: 35px;
`
const H2 = Style.h2`
`

const Holder = Style.div``




function BeforeNews() {

    const [posts, setPosts] = useState([])

    const [loading, setLoading] = useState('loading')

    const [display, setDisplay] = useState({
        login: 'underline',
        signup: 'no-underline'
    })

    const [show, setShow] = useState({
        login: 'show',
        signup: 'hidden'
    })

      useEffect(() => {
        Axios
            .get('https://seller-backends.herokuapp.com/api/post')
            .then(res => setPosts(res.data))
            .then(() => setLoading('not-loading'))
            // .then(res => console.log(res.data))
            .catch(err => console.log(err))


    }, [])

    const underline1 = e => {
        e.preventDefault()
        setDisplay({
            login: 'underline',
            signup: 'no-underline'
        })
        setShow({
            login: 'show',
            signup: 'hidden'
        })
       
    }
    const underline2 = e => {
        e.preventDefault()
        setDisplay({
            login: 'no-underline',
            signup: 'underline'
        })
        setShow({
            login: 'hidden',
            signup: 'show'
        })
    }



        return (
            <MAIN>
        

                <DIV>
                    {posts.map((post, index) => {
                        return(
                            <BeforeCard key={index} title={post.title} post={post.postdescript} date={post.date} user={post.user_id}/>
                        )
                    })}

                <DIV6 className={loading}>
                        <h1 className='h1'>Loading...</h1>
                </DIV6>
    
                </DIV>


                <DIV4>
                    <Header>
                        <H2 className={display.login} onClick={underline1}>Login</H2>
                        <H2 className={display.signup} onClick={underline2}>Sign up</H2>
                    </Header>

                    
                    

                    <Holder className={show.login}>
                        <Login />
                    </Holder>

                    <Holder className={show.signup}>
                        <Signup />

                    </Holder>



                </DIV4>

            </MAIN>



        )

}



export default BeforeNews;


