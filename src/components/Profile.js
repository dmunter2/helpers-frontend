import React, {useState} from 'react';
import Style from 'styled-components';
import axiosWithAuth from './axiosWithAuth'
import UserCard from './UserCard'
const DIV = Style.div`
display: flex;
flex-direction: row;
justify-content: space-around;
`

const Text = Style.div`
margin-top: 20px;
`
const DIV2 = Style.div``

const Button = Style.div`
border: 1px solid red;
width: 33%;
`
const H1 = Style.h1`
padding-left: 2%;
`
const H2 = Style.h2`

`
const H4 = Style.h2`
color: blue;
`
const H5 = Style.h2`
color: purple;
`
const DATE = Style.div`


`
const HN = Style.h4`
position: absolute;
margin-left: 2%;

`
const CARD = Style.div`

// background-color: white;
`


function Profile(props){

    // useEffect(() => {
    //     axiosWithAuth()
    //         .get('')
    //         .then()
    //         .catch()
    
    // }, [])



    const [display, setDisplay]  = useState({
        posts: 'show',
        likes: 'no-show',
        comments: 'no-show'
})

    const [posts, setPost] = useState([])


    const clickHandler = e => {
        e.preventDefault();
        if (e.target.className.slice(-5) === 'posts'){
            setDisplay({
                posts: 'show',
                likes: 'no-show',
                comments: 'no-show'
            })
            axiosWithAuth()
                .get('https://seller-backends.herokuapp.com/api/post/me')
                .then(res => setPost(res.data))
                .catch(err => {console.log(err)})


        } else if (e.target.className.slice(-5) === 'likes') {
            setDisplay({
                posts: 'no-show',
                likes: 'show',
                comments: 'no-show'
            })
        } else if (e.target.className.slice(-8) === 'comments') {
            setDisplay({
                posts: 'no-show',
                likes: 'no-show',
                comments: 'show'
            })
        }
    }

  





    return(
        <div>
            <H1>{window.localStorage.getItem('new')}</H1>



            <DIV>
                <Button className='posts' onClick={clickHandler}>Posts</Button>

                <Button className='likes' onClick={clickHandler}>Likes</Button>


                <Button className='comments' onClick={clickHandler}>Comments</Button>



            </DIV>
            <DIV2>
                <Text className={display.posts}>


                    {posts.map((post, index) => {
                        
                        return(
                                <UserCard key={index} setPost={setPost} title={post.title} postdescript={post.postdescript} date={post.date} id={post.id}/>
                               
                        )
                    })}
                </Text>

                <Text className={display.likes}>
                    <H5>Coming Soon...</H5>

                </Text>

                <Text className={display.comments}>
                    <H4>Coming Soon...</H4>

                </Text>

            </DIV2>

        </div>
    )
}


export default Profile;

