import React, {useState} from 'react';
import Style from 'styled-components';


const DIV = Style.div`
display: flex;
flex-direction: row;
justify-content: space-around;
`

const Text = Style.div``
const DIV2 = Style.div``

const Button = Style.div`
border: 1px solid red;
width: 33%;
`
const H1 = Style.h1`
padding-left: 2%;
`



function Profile(){


    const [display, setDisplay]  = useState({
        posts: 'show',
        likes: 'no-show',
        comments: 'no-show'
})

    const [post, setPost] = useState([])


    const clickHandler = e => {
        e.preventDefault();
        if (e.target.className === 'sc-fzXfLW hXsOxE posts'){
            setDisplay({
                posts: 'show',
                likes: 'no-show',
                comments: 'no-show'
            })
        } else if (e.target.className === 'sc-fzXfLW hXsOxE likes') {
            setDisplay({
                posts: 'no-show',
                likes: 'show',
                comments: 'no-show'
            })
        } else if (e.target.className === 'sc-fzXfLW hXsOxE comments') {
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
                    <h1>whats up posts</h1>
                </Text>

                <Text className={display.likes}>
                    <h1>whats up likes</h1>

                </Text>

                <Text className={display.comments}>
                    <h1>whats up comments</h1>

                </Text>

            </DIV2>

        </div>
    )
}


export default Profile;

