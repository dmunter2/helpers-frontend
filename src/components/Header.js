import React from 'react';
import Style from 'styled-components';
import SignOut from './SignOut';
import {connect} from 'react-redux';

import {addUserInfo} from '../actions/actions'


const DIV = Style.div`
border: 1px solid #F5F5F5;
background-color: #F5F5F5;
box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
margin-bottom: 2%;
height: 60px;
display: flex;
flex-direction: row;
justify-content: space-between;
`
const H1 = Style.h1`
margin: 0;
margin-left: 4%;
text-align: initial;
color: #25282a;
font-size: 2rem;
// width: 40%;
margin-right: 0;
`
const H2 = Style.h1`
margin: 0;
margin-right: 3%;

text-align: end;
color: #5eb0e5;
font-size: 2rem;
`
const DIV1 = Style.div`
margin: 0;
display: flex;
margin-right: 5%;
flex-direction: row;
text-align: end;
justify-content: space-between;
`


class Header extends React.Component {
    
    





    render(){ 
        console.log(this.props.store)

        console.log('hello')
        return(

            <DIV>
                <H1>Post-It</H1>

                <DIV1>
                    <H2>Welcome!</H2>
                    <SignOut />
                    {this.props.store.users.map((user) => {
                        return (
                            console.log(user.user),
                            console.log('hello')
                        )
                    })}
        
                            
        
        
                </DIV1>

            </DIV>
        )
    }

}




const mapStateToProps = state => {
    return {
        store: state.userReducer
    }
}



export default connect(
    mapStateToProps,
    { addUserInfo}
)(Header);



