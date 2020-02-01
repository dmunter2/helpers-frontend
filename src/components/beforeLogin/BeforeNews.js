import React, {useEffect, useState} from 'react';
import Style from 'styled-components';
import Axios from 'axios';
import BeforeCard from './BeforeCard'

const DIV = Style.div`
background-color: #F5F5F5;
width: 60%;
height: 1000px;
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
border-radius: 5px;
display: flex;
flex-direction: column;
// justify-content: center;
align-items: center;

`
const MAIN = Style.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding-left: 1%;
padding-right: 1%;
`


const DIV4 = Style.div`
width: 35%;
background-color: #F5F5F5;
height: 1000px;
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
border-radius: 5px;
`
const DIV6 = Style.div`

`

function BeforeNews() {

    const [posts, setPosts] = useState([])

    const [loading, setLoading] = useState('loading')



      useEffect(() => {
        Axios
            .get('https://seller-backends.herokuapp.com/api/post')
            .then(console.log('hello'))
            .then(res => setPosts(res.data))
            .then(() => setLoading('not-loading'))
            .then(res => console.log(res.data))
            .catch(err => console.log(err))


    }, [])





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

                </DIV4>

            </MAIN>



        )

}



export default BeforeNews;


