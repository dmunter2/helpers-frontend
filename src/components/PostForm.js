import React from 'react';
import {connect} from 'react-redux'
import {addUserPost} from '../actions/postAction'



class PostForm extends React.Component {


    state = {
        newPost: ''
    };

    handleChanges = e => {
        this.setState({newPost: e.target.value})
    }




    render(){


        return(
            <React.Fragment>
                <div>
                    {this.props.posts.map((post, index) => {
                        <h1>
                            {post.title}
                        </h1>
                    })}
                </div>

                <input
                    type='text'
                    placeholder='Post'
                    onChange={this.handleChanges}
                    value={this.state.newPost}



                />

                <button onClick={() => this.props.addUserPost(this.state.newPost)}>Add Post</button>


            </React.Fragment>

        )
    }
}


const mapStateToProps = state => {
    console.log(state)
    return {
        posts: state.postReducer.posts
    }
}

export default connect(
    mapStateToProps,
    { addUserPost }
)(PostForm)

