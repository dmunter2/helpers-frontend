import React, { useState } from 'react';
import { connect } from 'react-redux'
import { addUserPost } from '../actions/postAction'




class PostForm extends React.Component {

    state = {
        newPost: ''
    };


    handleChanges = e => {
        this.setState({ newPost: e.target.value });
    };



    render() {
        return(
            <React.Fragment>
            <div>
          

                <input
                    type='text'
                    placeholder='Post'
                    value={this.state.newPost}
                    onChange={this.handleChanges}



                />
                

                <button onClick={() => this.props.addUserPost(this.state.newPost)}>Add Post</button>

                    {this.props.posts.map((post, index) => {
                        return (
                            <h4 key={index}>
                                {post.title}
                            </h4>
                        )

                    })}


            </div>
            </React.Fragment>



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


