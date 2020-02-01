import React from 'react';

function BeforeCard({ title, post, date, user}){


    return(
        <div>
            {title}
            {post}

            <div className='hidden'>
                {user}
            </div>
        </div>
    )
}

export default BeforeCard;


