import React, {Component} from 'react'
import "./FullPost.css"
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import * as Types from '../../../store/reducers/actions'

class FullPost extends Component {

    deleteHandler = (id) => {
        this.props.delete(id)
        this.props.history.push('/')
    }

    getSelectedPost = (id) => {
        let post = this.props.posts.filter(post=>post.id===Number(id))[0]
        if(!post) {
            post = {
                title: '',
                category: '',
                content: ''
            }       
            this.props.history.push("/")
        } 
        return post
    }
    render(){
        const postData = this.getSelectedPost(this.props.match.params.id);
        let post =  <section className="FullPost">
                        <h1>{postData.title}</h1>
                        <h2>{postData.category}</h2>
                        <div>{postData.content}</div>
                        <button onClick={() => this.deleteHandler(postData.id)}>Delete post</button>
                        <Link to={"/edit-post/" + postData.id}> <button>Edit post</button> </Link>
                    </section>

        return post
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        delete: (id) => dispatch({type: Types.DEL_POST, id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FullPost)