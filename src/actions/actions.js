export const addUserPost = newPost => {
    return { type: 'ADD_POST', payload: newPost};
};




export const addUserInfo = userInfo => {
    return { 
        type: 'SAVE_USER', 
        payload: userInfo 
    };
};



