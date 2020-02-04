
// combineReducers is the function that will combine all your seperate reducers into one
import { combineReducers } from 'redux';

// make sure to import all the different reducers that you want to combine
import postReducer from './postReducer'
import userReducer from './userReducer'

// notice that combineReducers takes an OBJECT (see the {}?)...
// inside that object are your reducers that you want to combine
export default combineReducers({
    postReducer, // NOTE: storeReducer like this is just shorthand for storeReducer: storeReducer
    userReducer
});



