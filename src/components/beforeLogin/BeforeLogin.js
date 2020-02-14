import React from 'react';
import Header2 from './Header2'
import Style from 'styled-components';
// import axios from 'axios'
import BeforeNews from './BeforeNews'

const DIV = Style.div`
`



function BeforeLogin() {

    
    // axios.get('https://seller-backends.herokuapp.com/')
    //     .then()





        return(

            <DIV>
                <Header2 />
                <BeforeNews />
            </DIV>



        )

}





export default BeforeLogin;