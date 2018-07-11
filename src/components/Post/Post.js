import React from 'react'
import "./Post.css"

const post = ({title,intro,category}) => {
    return (
        <article className="Post" >
            <div>
                <h1>{title}</h1>
                <p>{intro}</p>
            </div>
            <div className="postLabel">{category}</div>
        </article>   
    )
}

export default post;