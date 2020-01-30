import React, { useState } from 'react';
import { connect } from 'react-redux'
import { addUserPost } from '../actions/postAction'
import PostCard from './PostCard';
import Style from 'styled-components';
import Likes from './Likes'

const DIV = Style.div`
background-color: #F5F5F5;
width: 60%;
height: 1000px;
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
border-radius: 5px;
display: flex;
flex-direction: column;

`
const MAIN = Style.div`
display: flex;
flex-direction: row;
// justify-content: center;
justify-content: space-around;
// align-items: center;
padding-left: 1%;
padding-right: 1%;
`
const DIV2 = Style.div`
// background-color: blue;
border-radius: 5px;
height: 140px;
margin: 3%;
width: 300px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


`
const DIV3 = Style.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const INPUT = Style.textarea`
max-width: 250px;
width: 250px;
max-height: 80px;
border: none;
border-radius: 5px;
background-color: #e4e4e2;
padding: 2%;
font-family: 'Open Sans', sans-serif;
font-size: .8rem;
`
const HOLDER = Style.div`
width: 100%;
text-align: end;
`

const BUTTON = Style.button`
border: 1px solid  #1f2020;
background-color: #1f2020;
height: 30px;
border-radius: 5px;
width: 80px;
color: white;
margin: 10px 25px 0 0;

`
const DIV4 = Style.div`
width: 35%;
background-color: #F5F5F5;
height: 1000px;
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
border-radius: 5px;
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
                        <INPUT
                            rows="5"
                            type='textarea'
                            placeholder='Post'
                            value={this.state.newPost}
                            onChange={this.handleChanges}



                        />

                    <HOLDER>
                            <BUTTON onClick={() => this.props.addUserPost(this.state.newPost)}>Add Post</BUTTON>
                    </HOLDER>
                    </DIV2>

                    <DIV3>
                        {this.props.posts.map((post, index) => {
                            return (
                                <PostCard post={post.title} />
                            )

                        })}
                    </DIV3>
                             

                           
                </DIV>
                <DIV4>
                    <Likes />
                </DIV4>

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


