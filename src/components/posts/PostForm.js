import React, {useState} from 'react';





function PostInput(props){




    const handleSubmit = e => {
        e.preventDefault();
        // document.getElementById("reset").reset();




   
         
    }



    const changeHandler = e => {
        setPost({
            ...post,
            [e.target.name]: e.target.value

        })


      
      
        
    }


    return(
        <div>
            <div className='enter-post'>
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

