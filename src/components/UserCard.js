import React, {useState} from 'react';
import Style from 'styled-components';
import axiosWithAuth from './axiosWithAuth';
import { StepContent } from 'semantic-ui-react';

const DATE = Style.div``
const H1 = Style.h1``
const H2 = Style.h2``

function UserCard({title, postdescript, id, date, setPost}){



    const edit = e => {
        e.preventDefault()

        console.log('edit')
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
        <div>

            <DATE>
                <H1>{title}</H1>
                <H2>{postdescript}</H2>
                <h2>{newMonth}-{newDay}-{newYear}</h2>
                <button onClick={edit}>Edit</button>
                <button onClick={deleteHandler}>delete</button>
           

            </DATE>


        </div>
    )
}


export default UserCard;
