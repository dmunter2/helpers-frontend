import React, {useState} from 'react';





function PostInput(props){

    const [post, setPost] = useState({
        description: ''
    })


    const handleSubmit = e => {
        e.preventDefault();
        console.log(post.description)
        document.getElementById("reset").reset();
        let newPost = {
            ...post,
            id: Date.now()
        }

        props.addNewPost(newPost)
         
    }



    const changeHandler = e => {
        setPost({
            ...post,
            [e.target.name]: e.target.value

        })


      
      
        
    }


    return(
        <div>
            <div class='enter-post'>
                <form id='reset' onSubmit={handleSubmit}>
                    <h1>Welcome User</h1>
                    <input
                        type='text'
                        className='form'
                        placeholder='post'
                        onChange={changeHandler}
                        name='description'

                    />
                    <button>Submit</button>
                </form>
            
            </div>
        
        </div>
    )
}


export default PostInput;

