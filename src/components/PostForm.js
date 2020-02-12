import React, {useState, useEffect} from 'react';
import PostCard from './PostCard';
import Style from 'styled-components';
import axiosWithAuth from './axiosWithAuth';
import Profile from './Profile';


const DIV = Style.div`
background-color: #F5F5F5;
width: 60%;
height: 100%;
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
padding-bottom: 4%;
height: 100%;
border: 1px solid green;
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
flex-direction: column-reverse;
justify-content: center;
align-items: center;
padding-bottom: 4%;
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
resize: none;
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



function PostForm(){


    const [post, setPost] = useState({
        title: '',
        postdescript: '',
    })

    const [api, setApi] = useState([])



    useEffect(() => {
        axiosWithAuth()
            .get('https://seller-backends.herokuapp.com/api/post')
            .then(res => {
                let data = res.data.slice(Math.max(res.data.length - 5))
                setApi(data)
            })
            .catch(err => {
                console.log(err)
            })
     
    }, [])


      
    



    const handleChanges1 = e => {
        setPost({ 
            ...post, 
            [e.target.name]: e.target.value
         });
    };



    
    const postForm = e => {
        e.preventDefault()
        if (post.title === '' || post.postdescript === ''){
            alert('Make sure you enter a title and a description')
        } else {

            axiosWithAuth()
                .post('https://seller-backends.herokuapp.com/api/post/new', post)
                // .then(props.addUserPost(this.state))
                .then(() => {
                    setPost({
                        title: '',
                        postdescript: ''
                    })
                }
                 
                )
                .then(
                    axiosWithAuth()
                        .get('https://seller-backends.herokuapp.com/api/post')
                        .then(res => {
                            let data = res.data.slice(Math.max(res.data.length - 5))
                            setApi(data)
                        })
                        .catch(err => {
                            console.log(err)
                        })
                )
                .catch(err => {
                    console.log({message: "this is an error"})
                })
        }
    }



        return(
            <MAIN>
          
                <DIV>

                    <DIV2>
                        <INPUT2
                            rows="5"
                            type='textarea'
                            placeholder='Title'
                            value={post.title}
                            name='title'
                            onChange={handleChanges1}

                        />
                        <INPUT
                            rows="5"
                            type='textarea'
                            placeholder='Post'
                            name='postdescript'
                            value={post.postdescript}
                            onChange={handleChanges1}

                        />

                        <HOLDER>
                                <BUTTON onClick={postForm}>Add Post</BUTTON>
                        </HOLDER>

                    </DIV2>

                    <DIV3>
                        {api.map((post, index) => {
                            return(
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


export default PostForm;



