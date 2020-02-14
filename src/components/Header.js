import React from 'react';
import Style from 'styled-components';
import SignOut from './SignOut';
import {connect} from 'react-redux';
import { addUserInfo } from '../actions/actions'



const DIV = Style.div`
border: 1px solid #353878;
background-color: #353878;
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
margin-bottom: 2%;
height: 150px;
display: flex;
flex-direction: row;
justify-content: space-between;
`
const H1 = Style.h1`
margin-left: 30px;
margin-top: 10px;
font-weight: 600;
text-align: initial;
color: #C3C5CA;
font-size: 3.5rem;
width: 200px;
`

const DIV1 = Style.div`
margin: 0;
display: flex;
margin-right: 5%;
flex-direction: row;
text-align: end;
display: flex;
align-items: center;
justify-content: center;
padding-bottom: 60px;

justify-content: space-between;
`
const MAIN = Style.div`
display: flex;
flex-direction: row;
`
const H2 = Style.h2`
color: #C3C5CA;
`
const Top = Style.div`
`
const Bottom = Style.div``
class Header extends React.Component {

    
    // componentDidMount(){
    //     this.props.addUserInfo(this.store.users)
    // }



    render(){ 


        // console.log(localStorage.getItem('new'))

        return(

            <DIV>

                    <H1>Post-It</H1>

                    <DIV1>
                        <MAIN>

                            <H2>Welcome, {localStorage.getItem('new')}</H2>
                        </MAIN>

                        <SignOut />
                    </DIV1>




        
                            
        
        

            </DIV>
        )
    }

}




const mapStateToProps = (state) => {
    return {
        store: state.reducer
    }
}



export default connect(mapStateToProps, { addUserInfo })(Header);



