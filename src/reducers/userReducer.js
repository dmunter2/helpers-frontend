import {SAVE_USER} from '../actions/actionTypes'


const initialState = {
    otherproperties: 'Its working',
    users: []


}



export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_USER:
            const {username, password} = action.payload   
            return {
                ...state,
                users: [
                    ...state.users,
                    {username: username}
                ]
            };
        default:
            return state;
    }
}
export default userReducer;