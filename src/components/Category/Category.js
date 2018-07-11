import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Post from '../Post/Post'
import Labels from '../Labels/Labels'
import './Category.css'

class Category extends Component {
    render() {
        const filteredPosts = this.props.posts.filter(post=>
            post.category === this.props.match.params.id
        )
        
        return (
            <div >
                <Labels />
                <div className="Category">
                {filteredPosts.map(post=>
                    <Link to={"/posts/" +post.id} key={post.id}>
                        <Post 
                            title={post.title}
                            intro={post.intro}
                            category={post.category}
                        />
                    </Link>    
                )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Category);