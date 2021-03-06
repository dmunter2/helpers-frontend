import React from 'react';
import Style from 'styled-components';

const DIV = Style.div`
background-color: #f5f8fa;
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
// margin-top: 5%;
margin: 5%;
height: 100px;
width: 280px;
padding: 1%;



`
const DIV3 = Style.div`
display: flex;
flex-direction: row;
// height: 30px;

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
border-bottom: 1px solid #353878;
margin-bottom: 1%;
padding-bottom: 1%;


`
const COMMENT = Style.div`
margin: 0;

`
const DIV2 = Style.div`

`
const H1 = Style.h2`
color: #1f2020;
margin: 0;
`
const H2 = Style.h3`
font-size: 1.1rem;
margin: 0;
`


function PostCard(props){




    return(
        <DIV>
       

            <DIV1>
                <H1>{props.title}</H1>
            </DIV1>
            <DIV2>
                <H2>{props.postdescript}</H2>
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


