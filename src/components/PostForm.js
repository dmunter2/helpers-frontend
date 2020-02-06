import React from 'react';
import { connect } from 'react-redux'
import { addUserPost } from '../actions/actions'
// import combineReducers from '../reducers/index'
import PostCard from './PostCard';
import Style from 'styled-components';
import axiosWithAuth from './axiosWithAuth';
import Profile from './Profile';


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
const INPUT2 = Style.input`
max-width: 250px;
width: 250px;
border: none;
border-radius: 5px;
background-color: #e4e4e2;
padding: 2%;
font-family: 'Open Sans', sans-serif;
font-size: .8rem;
`



class PostForm extends React.Component {

    state = {
        title: '',
        postdescript: ''
    };

    handleChanges1 = e => {
        this.setState({ title: e.target.value });
    };
    handleChanges2 = e => {
        this.setState({ postdescript: e.target.value });
    };



    
    postForm = e => {
        e.preventDefault()

            axiosWithAuth()
                .post('https://seller-backends.herokuapp.com/api/post/new', this.state)
                .then(this.props.addUserPost(this.state))
                .then(
                    this.setState({
                        title: '',
                        postdescript: ''
                    })
                )
                .catch(err => {
                    console.log(err)
                })
    }


    render() {

        return(
            <MAIN>
          
                <DIV>

                    <DIV2>
                        <INPUT2
                            rows="5"
                            type='textarea'
                            placeholder='Title'
                            value={this.state.title}
                            onChange={this.handleChanges1}



                        />
                        <INPUT
                            rows="5"
                            type='textarea'
                            placeholder='Post'
                            value={this.state.postdescript}
                            onChange={this.handleChanges2}



                        />

                    <HOLDER>
                            <BUTTON onClick={this.postForm}>Add Post</BUTTON>
                    </HOLDER>
                    </DIV2>

                    <DIV3>
                        {this.props.store.posts.map((post, index) => {
                            return (
                                <PostCard key={index} title={post.title} postdescript={post.postdescript}/>
                            )

                        })}
                    </DIV3>
                             

                           
                </DIV>
                <DIV4>
                    <Profile />
                </DIV4>

            </MAIN>



        )
    }

}


const mapStateToProps = (state) => {
    return {
        store: state.reducer
    }
}

export default connect(mapStateToProps, { addUserPost })(PostForm);


