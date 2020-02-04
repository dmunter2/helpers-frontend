const initialState = {
    otherproperties: '',
    users: []


}



export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SAVE_USER":
            return {
                ...state.user,
                users: [
                    {name: action.payload}
                ]
            };
        default:
            return state;
    }
}
export default userReducer;