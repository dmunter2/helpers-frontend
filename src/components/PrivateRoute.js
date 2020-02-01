import React from 'react';
// import Home from './HomePage'
import { Route, Redirect } from 'react-router-dom';
// import HomePage from './HomePage';


const PrivateRoute = ({ component: Component, ...rest }) => {

    return (
        <Route
            {...rest}
            render={props => {
                if (localStorage.getItem('token')) {
                    return <Component {...props} />
                } else {
                    return <Redirect to='/login' />;
                }
            }
            }
        />
    );
};


export default PrivateRoute;