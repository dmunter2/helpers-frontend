const initialState = {
    otherproperties: '',
    user: {
        name: 'billy'
    },
    posts: [
        
    ],
    movie: ['535234', '34moe', 'lar4ry'],
    editing: false
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

// const initialState = {
//     otherStateProperties: '',
//     members: [
//         { name: 'Justin T', dragonStatus: true },
//         { name: 'Justin A', dragonStatus: false }
//     ]
// };

// export const postReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'ADD_MEMBER':
//             return {
//                 ...state,
//                 members: [
//                     ...state.members,
//                     { name: action.payload, dragonStatus: false }
//                 ]
//             };
//         default:
//             return state;
//     }
// };