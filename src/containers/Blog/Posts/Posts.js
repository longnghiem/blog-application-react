import React, {Component} from 'react'
import Post from '../../../components/Post/Post'
import {Link} from 'react-router-dom'

export default class Posts extends Component {
    render(){
        const posts = this.props.posts.map(post => 
            <Link to={"/posts/" +post.id} key={post.id}>
                <Post 
                    title={post.title}
                    category={post.category}
                    content={post.content}
                    />
            </Link>        
        )
        return(
            <section className="Posts">
                {posts}
            </section>
        )
    }
}
