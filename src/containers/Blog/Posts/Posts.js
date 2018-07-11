import React, {Component} from 'react'
import Post from '../../../components/Post/Post'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import './Posts.css'

class Posts extends Component {
   
    render(){
        const posts = this.props.posts.map(post => 
            <Link to={"/posts/" +post.id} key={post.id}>
                <Post 
                    title={post.title}
                    intro={post.intro}
                    category={post.category}
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

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Posts)