import React from 'react';
import Style from 'styled-components';

const DIV = Style.div`
background-color: #f5f8fa;
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
margin-top: 5%;
height: 100px;
width: 80%;
`
const DIV3 = Style.div`
display: flex;
flex-direction: row;
border-top: 1px solid black;
`
const LIKE = Style.div`
margin: 0;
`

const DIV1 = Style.div`
height: 50px;
`
const COMMENT = Style.div`
margin: 0;

`

function PostCard(props){

    return(
        <DIV>
            <DIV1>
                    {props.title}
                {props.postdescript}

            </DIV1>



            <DIV3>

                <LIKE>

                    
                </LIKE>


                <COMMENT>

                </COMMENT>

            </DIV3>
        </DIV>
    )
}

export default PostCard;


