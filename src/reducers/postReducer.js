const initialState = {
    otherproperties: '',
    posts: [
        {title: 'I am upset', description: true},
        {title: 'I am not upset', description: true},

    ]
}




export const postReducer = (state, initialState, action) => {
    switch(action.type) {
        case "ADD_POST":
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {title: action.payload, description: false}
                ]
            }
    }
}