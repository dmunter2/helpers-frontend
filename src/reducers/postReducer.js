const initialState = {
    otherproperties: '',
    user: {
        name: 'billy'
    },
    posts: [
        {title: 'I am upset'},
        {title: 'I am not upset'},
    ],
    movie: ['535234', '34moe', 'lar4ry'],
}




export const postReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_POST":
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {title: action.payload}
                ]
            };
            default:
                return state;
    }
}


