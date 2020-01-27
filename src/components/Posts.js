import React, {useState} from 'react';
import PostCard from './posts/PostCard';
import PostForm from './posts/PostForm';


function PostHolder(props){


const [cards, setCard] = useState([])

const addNewPost = post => {
    setCard({...cards, post})
}


    return(
        <div>
            <h1>Welcome</h1>
            <PostCard cards={cards}/>
            <PostForm addNewPost={addNewPost}/>
        </div>
    )
}


export default PostHolder;