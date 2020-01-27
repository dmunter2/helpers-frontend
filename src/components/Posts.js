import React, {useState} from 'react';
import PostCard from './posts/PostCard';
import PostForm from './posts/PostForm';


function PostHolder(props){



    return(
        <div>
            <h1>Welcome</h1>
            <PostCard />
            <PostForm />
        </div>
    )
}


export default PostHolder;