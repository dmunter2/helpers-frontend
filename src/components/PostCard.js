import React from 'react';
import Style from 'styled-components';

const DIV = Style.div`
background-color: gray;
margin-top: 2%;
`


function PostCard(props){

    return(
        <DIV>
            {props.post}
        </DIV>
    )
}

export default PostCard;


