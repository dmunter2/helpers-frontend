import {ADD_POST} from '../actions/actionTypes'

const initialState = {
    otherproperties: '',
    posts: [
        
    ]


}

 

export const postReducer = (state = initialState, action) => {
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
        default:
            return state;
    }
}





export default postReducer;
