import {ADD_POST, SAVE_USER} from '../actions/actionTypes'

const initialState = {
    otherproperties: '',
    users: [],
    posts: [
        
    ]


}

 

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const { title, postdescript} = action.payload
            return {
                ...state,
                posts: [
                    ...state.posts,
                    { title: title,
                    postdescript: postdescript}
                ]
            };

        case SAVE_USER:
            return {
                ...state,
                users: [
                    ...state.users,
                    {name: action.payload}

                ]
            };
        default:
            return state;
    }
}





export default reducer;
