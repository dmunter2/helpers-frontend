import React from 'react';



function AllPosts(props){


    return(
        <div>
            {props.cards.map((card) => {
                return(
                    <div>{card.post}</div>
                )
            })}
        </div>
    )
}

export default AllPosts;


