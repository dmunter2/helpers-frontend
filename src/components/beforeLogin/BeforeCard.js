import React from 'react';
import Style from 'styled-components'

const Main = Style.div`
display: flex;
flex-direction: column;
border:1px solid #C3C5CA;
width: 300px;
margin: 2%;
padding: 2%;
background-color: #C3C5CA;

`

const H1 = Style.h1`
`
const H2 = Style.h2`

`
const DIV = Style.div``

const DIV1 = Style.div``

function BeforeCard({ title, post, date, user}){


    return(
        <Main>
            <DIV>
                    {title}
            </DIV>
            <DIV1>
                    {post}
            </DIV1>
        </Main>
    )
}

export default BeforeCard;


