
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
`
const Edit = Style.div``
function UserCard({title, postdescript, id, date, setPost}){

    const [editbtn, setEditbtn] = useState({
        input: 'no-show',
        post: 'show-post'
    })

    const edit = e => {
        e.preventDefault()
        if (editbtn.input == 'no-show'){
            setEditbtn({
                input: 'show-input',
                post: 'no-show'
            })
            
        } else {
            setEditbtn({
                input: 'no-show',
                post: 'show-post'
            })
        }

    }

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
            }
                
            )
            .catch(err => {
                console.log("There was en error with the delete function", err)
            })

    }


    let newDate = date.slice(0, 10);
    let newYear = newDate.slice(0, 4)
    let newDay = newDate.slice(8, 10)
    let newMonth = newDate.slice(5, 7)



    return(
        <NEW>

            <Edit>
                <button onClick={edit}>Edit</button>
                <button onClick={deleteHandler}>delete</button>
            </Edit>
          
                <DIV2 className={editbtn.input}>
                    <DIV4>
                        <input  className='inputs' placeholder={title} />
                        <input className='inputs' placeholder={postdescript} />
                    </DIV4>
    
                    <IMG src={more_options} placeholder='yo' />


                </DIV2>


                <DIV className={editbtn.post}>
                    <DIV4>
                        <H1>{title}</H1>
                        <H2>{postdescript}</H2>
                    </DIV4>                
                    <IMG src={more_options} placeholder='yo'/>
                </DIV>
            
                <DATE>{newMonth}-{newDay}-{newYear}</DATE>

        </NEW>
    )
}


export default UserCard;
