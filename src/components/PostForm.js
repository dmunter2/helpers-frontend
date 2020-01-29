import React, { useState } from 'react';
import { connect } from 'react-redux'
import { addUserPost } from '../actions/postAction'




const PostForm = props => {


    const [state, setState] = useState({
        newPost: ''
    })

    const handleChanges = e => {
        setState({newPost: e.target.value})
    }




        return(
            <React.Fragment>
            <div>
                <div>User: {props.user}</div>
                <div>To watch{props.movie}</div>

                <input
                    type='text'
                    placeholder='Post'
                    onChange={handleChanges}
                    value={state.newPost}



                />

                {/* <button onClick={() => this.props.addUserPost(state.newPost)}>Add Post</button> */}


            </div>
            </React.Fragment>



        )
}



const mapStateToProps = state => {
    return {
        posts: state.posts,
        movie: state.movie,
        user: state.user
    };
};



export default connect(
    mapStateToProps,
    { addUserPost }
)(PostForm);



