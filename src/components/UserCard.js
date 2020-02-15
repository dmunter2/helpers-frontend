
import React, {useState} from 'react';
import Style from 'styled-components';
import axiosWithAuth from './axiosWithAuth';
import { StepContent } from 'semantic-ui-react';
import more_options from './more_options.png';


const DATE = Style.div`
text-align: end;
padding-right: 3%;
`

const NEW = Style.div`
margin-bottom: 15px;
display: flex;
justify-content: center;

`
const Hold = Style.div`
background-color: #C3C5CA;
height: 150px;
width: 90%;

`


const H1 = Style.h1`
margin: 0;
font-family: 'Merriweather', serif;
font-size: 1.4rem;

`
const H2 = Style.h2`
margin: 0;
font-size: 1rem;
font-family: 'Merriweather', serif;
padding-top: 5px;

`

const DIV = Style.div`
`
const IMG = Style.img`
height: 20px;
padding: 0 20px 0 7px;
`
const DIV2 = Style.div``
const DIV4 = Style.div`
width: 100%;
padding-bottom: 3%;
`
const First = Style.div`
width: 50%;
`
const Next = Style.div``

const Save = Style.div``
const Edit = Style.div``
function UserCard({title, postdescript, id, date, setPost}){

    const [editbtn, setEditbtn] = useState({
        input: 'no-show',
        post: 'show-post',
        showEdit: 'no-show',
        showDate: 'show'
    })

    const [changes, setChanges] = useState({
        id: id,
        title: '',
        postdescript: ''
    })


    // const edit = e => {
    //     e.preventDefault()
    //     if (editbtn.input == 'no-show'){
    //         setEditbtn({
    //             input: 'show-input',
    //             post: 'no-show'
    //         })
            
    //     } else {
    //         setEditbtn({
    //             input: 'no-show',
    //             post: 'show-post'
    //         })
    //     }

    // }

    const deleteHandler = e => {
        e.preventDefault();
        axiosWithAuth()
            .delete('https://seller-backends.herokuapp.com/api/post/delete', {
                data: {
                    id
                }
            })
            .then(() => {
                axiosWithAuth()
                    .get('https://seller-backends.herokuapp.com/api/post/me')
                    .then()
                    .then((res) => {
                        setPost(res.data)
                    })
                    .then(() => {
                        setEditbtn({
                            post: 'show-post',
                            input: 'no-show',
                            showEdit: 'no-show'
                        })
                    })
                
            }
                
            )
            .catch(err => {
                console.log("There was en error with the delete function", err)
            })

    }


    const save = e => {
        e.preventDefault();
        axiosWithAuth()
            .put('https://seller-backends.herokuapp.com/api/post/change', changes)
            .then(() => {
                axiosWithAuth()
                    .get('https://seller-backends.herokuapp.com/api/post/me')
                    .then((res) => {
                        setPost(res.data)
                    })
                    .then(() => {
                        setEditbtn({
                            post: 'show-post',
                            input: 'no-show',
                            showEdit: 'no-show'
                        })
                    })
            })
    }


    const showOptions = e => {
        e.preventDefault();
        setEditbtn({
            showEdit: 'edit',
            input: 'show-input',
            post: 'no-show',
            showDate: 'no-show'
        })

    }

    const cancel = e => {
        e.preventDefault();
        setEditbtn({
            post: 'show-post',
            input: 'no-show',
            showEdit: 'no-show'
        })

    }

    const handlePut = e => {
        e.preventDefault()
        setChanges({
           ...changes, 
           [e.target.name]: e.target.value
         
        })
        console.log(changes.title)
    }

    let newDate = date.slice(0, 10);
    let newYear = newDate.slice(0, 4)
    let newDay = newDate.slice(8, 10)
    let newMonth = newDate.slice(5, 7)



    return(
        <NEW>
            <Hold>


            <Edit className={editbtn.showEdit}>

                <First>
                    <button className='save-btn' onClick={save}>Save</button>
                    <button className='cancel-btn' onClick={cancel}>Cancel</button>
                </First>

                <Next>
                    <button className='delete-btn' onClick={deleteHandler}>delete</button>
                </Next>

            </Edit>
          
            <DIV2 className={editbtn.input}>
                <DIV4>
                    <input  className='inputs' placeholder={title} name='title' onChange={handlePut}/>
                    <input className='inputs' placeholder={postdescript} name='postdescript' onChange={handlePut}/>
                </DIV4>

            </DIV2>


                <DIV className={editbtn.post}>
                    <DIV4>
                        <H1>{title}</H1>
                        <H2>{postdescript}</H2>
                    </DIV4>                
                    <IMG src={more_options} onClick={showOptions} placeholder='yo'/>
                </DIV>
            
                <DATE className={editbtn.showDate}>{newMonth}-{newDay}-{newYear}</DATE>
            </Hold>

        </NEW>
    )
}


export default UserCard;
