const initialState = {
    otherproperties: '',
    posts: [

    ]


}



export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_POST":
            return {
                ...state,
                posts: [
                    ...state.posts,
                    { title: action.payload }
                ]
            };
        default:
            return state;
    }
}

export default postReducer;
