import React from 'react'
import "./Post.css"

const post = ({title,category,content}) => {
    return (
        <article className="Post" >
            <h1>{title}</h1>
            <div>{category}</div>
        </article>   
    )
}

export default post;