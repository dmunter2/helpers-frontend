import React, {useState, useEffect} from 'react';
import Style from 'styled-components';
import axiosWithAuth from './axiosWithAuth';

const DIV = Style.div`
background-color: #f5f8fa;
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
margin-top: 5%;
height: 100%;
width: 80%;

`
const DIV3 = Style.div`
display: flex;
flex-direction: row;
height: 30px;

`
const LIKE = Style.div`
margin: 0;
margin-right: 15px;
margin-left: 15px;
`

const DIV1 = Style.div`
// height: 50px;
display: flex;
flex-direction: column;
align-items: center;
border: 1px solid green;

`
const COMMENT = Style.div`
margin: 0;

`
const H1 = Style.h1`
border-bottom: 1px solid grey;
margin: 0;
width: 90%;
display: flex;
align-items: center;
text-align: initial;
color: #1f2020;
font-family: 'Roboto', sans-serif;

`
const H2 = Style.h4`
width: 95%;
// font-size: 1.2rem;
font-weight: 600;
`
const H5 = Style.h4`
margin: 0;
color: #1f2020;

`



function PostCard(props){

    const [posts, setPosts] = useState([])


    useEffect(() => {
        axiosWithAuth()
            .get('https://seller-backends.herokuapp.com/api/post')
            .then(res => {
                let data = res.data.slice(Math.max(res.data.length - 5))
                console.log(data)
                setPosts(data)
            })
            .catch(err => {
                console.log(err)
            })
    },[])
     




    return(
        <DIV>
       
                
                {posts.map((post) => {
                    return(
                        <DIV1>
                            <h1>{post.title}</h1>
                            <h1>{post.postdescript}</h1>

                        </DIV1>

                    )
                })}





            <DIV3>

                <LIKE>
                    {/* <H5>Like</H5> */}
                    
                </LIKE>


                <COMMENT>
                    {/* <H5 onClick={dropdown}>Comments</H5> */}
                </COMMENT>

            </DIV3>
        </DIV>
    )
}

export default PostCard;


