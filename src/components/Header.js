import React from 'react';
import Style from 'styled-components';
import SignOut from './SignOut';
import {connect} from 'react-redux';



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
font-size: 1.5rem;
margin-right: 0;
width: 200px;
`

const DIV1 = Style.div`
margin: 0;
display: flex;
margin-right: 5%;
flex-direction: row;
text-align: end;

justify-content: space-between;
`
const MAIN = Style.div`
display: flex;
flex-direction: row;
`

class Header extends React.Component {
    
    





    render(){ 
        console.log(this.props.store)

        return(

            <DIV>
                <H1>Post-It</H1>

                <DIV1>
                    {this.props.store.users.map((user) => {
                        return (
                            <MAIN>

                                <H1>Welcome, {user.name}</H1>
                            </MAIN>
                         
                        )
                    })}

                <SignOut />

        
                            
        
        
                </DIV1>

            </DIV>
        )
    }

}




const mapStateToProps = state => {
    return {
        store: state.reducer
    }
}



export default connect(mapStateToProps)(Header);



