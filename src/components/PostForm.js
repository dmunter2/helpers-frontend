import React, { useState } from 'react';
import { connect } from 'react-redux'
import { addUserPost } from '../actions/postAction'
import PostCard from './PostCard';
import Style from 'styled-components';


const DIV = Style.div`
background-color: #F5F5F5;
width: 80%;
height: 1000px;
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
border-radius: 5px;

`
const MAIN = Style.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const DIV2 = Style.div`
background-color: blue;
border-radius: 5px 5px 0 0;
height: 60px;


`


class PostForm extends React.Component {

    state = {
        newPost: ''
    };


    handleChanges = e => {
        this.setState({ newPost: e.target.value });
    };



    render() {
        return(
            <MAIN>
          
                <DIV>

                    <DIV2>
                        <input
                            rows="5" cols="50"
                            type='textarea'
                            placeholder='Post'
                            value={this.state.newPost}
                            onChange={this.handleChanges}



                        />


                        <button onClick={() => this.props.addUserPost(this.state.newPost)}>Add Post</button>
                    </DIV2>
                             

                                {this.props.posts.map((post, index) => {
                                    return (
                                        <PostCard post={post.title} />
                                    )

                                })}
                </DIV>

            </MAIN>



        )
    }

}



const mapStateToProps = state => {
    return {
        user: state.user.name,
        posts: state.posts
    }
}



export default connect(
    mapStateToProps,
    { addUserPost }
)(PostForm);


