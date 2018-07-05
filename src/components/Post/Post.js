import React from 'react'
import "./Post.css"

const post = ({title,category,content,clicked}) => {
    return (
        <article className="Post" onClick={clicked}>
            <h1>{title}</h1>
            <div>{category}</div>
        </article>   
    )
}

export default post;