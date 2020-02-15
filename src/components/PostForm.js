import React, {useState, useEffect} from 'react';
import PostCard from './PostCard';
import Style from 'styled-components';
import axiosWithAuth from './axiosWithAuth';
import Profile from './Profile';


const DIV = Style.div`
margin-top: -54px;
width: 60%;
height: 100%;
border-radius: 5px;
display: flex;
flex-direction: column;
@media (max-width: 940px) {
  margin-top: 30px;
}

@media (max-width: 700px) {
  width: 100%;
}


`
const MAIN = Style.div`
display: flex;
flex-direction: row;
justify-content: space-around;
padding-left: 1%;
padding-right: 1%;
padding-bottom: 4%;
height: 100%;
@media (max-width: 940px) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
`
const DIV2 = Style.div`
height: 160px;
background-color: #606C96;
width: 500px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: end;
padding-bottom: 20px;

@media (max-width: 940px) {
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 15px;
}

`


const DIV3 = Style.div`
background-color:#606C96;
margin-top: 30px;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
padding-bottom: 4%;
width: 90%;

@media (max-width: 700px) {
  width: 100%;
}

`

const INPUT = Style.textarea`
max-width: 300px;
width: 300px;
max-height: 80px;
border: none;
background-color: #e4e4e2;
padding: 2%;
margin-top: 10px;

font-family: 'Open Sans', sans-serif;
font-size: .8rem;
resize: none;
`
const HOLDER = Style.div`
// width: 70px;
text-align: end;
margin-right: 7%;

@media (max-width: 700px) {
  margin-top: 10px;
}


`

const BUTTON = Style.button`
border: 1px solid  #e4e4e2;
background-color: #e4e4e2;
height: 40px;
width: 100px;
color: black;


`
const DIV4 = Style.div`
margin-top: -54px;
background-color: #606C96;
width: 400px;
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
@media (max-width: 940px) {
  margin-top: 30px;
//   width: 500px
}

@media (max-width: 700px) {
  width: 100%;
}


`
const INPUT2 = Style.input`
max-width: 300px;
width: 300px;
border: none;
background-color: #e4e4e2;
padding: 2%;
font-family: 'Open Sans', sans-serif;
font-size: .8rem;
`
const Top = Style.div`
// width: 100%;

@media (max-width: 700px) {
  display: flex;
align-items: center;
justify-content: center;
}



`

const Postcount = Style.div``
const Hold = Style.div`
padding-left: 4%;
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
                let data = res.data.slice(0, 6)
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
                            let data = res.data.slice(Math.max(res.data.length - 6))
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

                    <Top>


                    <DIV2>
                        <Hold>

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

                        </Hold>


                        <HOLDER>
                                <BUTTON onClick={postForm}>Add Post</BUTTON>
                        </HOLDER>

                    </DIV2>
{/* 
                    <Postcount>

                    </Postcount> */}



                    </Top>





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



