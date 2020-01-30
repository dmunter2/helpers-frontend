import React from 'react';
import Header2 from './Header2'
import Style from 'styled-components';


const DIV = Style.div`
background-color: #F5F5F5;
width: 60%;
height: 1000px;
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
border-radius: 5px;
display: flex;
flex-direction: column;

`
const Contain = Style.div`
padding: 1%;
`
const MAIN = Style.div`
display: flex;
flex-direction: column;
// justify-content: center;
justify-content: space-around;
// align-items: center;
`

const DIV4 = Style.div`
width: 35%;
background-color: #F5F5F5;
height: 1000px;
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
border-radius: 5px;
`



function BeforeLogin() {







        return(

            <MAIN>
                <Header2 />

                <Contain>
                    <DIV>

                    </DIV>
                </Contain>
          
             

            </MAIN>



        )

}





export default BeforeLogin;