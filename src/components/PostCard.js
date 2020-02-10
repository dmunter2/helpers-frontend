import React from 'react';
import Style from 'styled-components';

const DIV = Style.div`
background-color: #f5f8fa;
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
margin-top: 5%;
height: 100%;
width: 80%;

`
const DIV3 = Style.div`
display: flex;
flex-direction: row;
height: 30px;

`
const LIKE = Style.div`
margin: 0;
margin-right: 15px;
margin-left: 15px;
`

const DIV1 = Style.div`
// height: 50px;
display: flex;
flex-direction: column;
align-items: center;
border: 1px solid green;

`
const COMMENT = Style.div`
margin: 0;

`
const DIV2 = Style.div`
border: 1px solid blue;`




function PostCard(props){





    return(
        <DIV>
       

            <DIV1>
                <h1>{props.title}</h1>
            </DIV1>
            <DIV2>
                <h1>{props.postdescript}</h1>
            </DIV2>


            <DIV3>

                <LIKE>
                    {/* <H5>Like</H5> */}
                    
                </LIKE>


                <COMMENT>
                    {/* <H5 onClick={dropdown}>Comments</H5> */}
                </COMMENT>

            </DIV3>
        </DIV>
    )
}

export default PostCard;


