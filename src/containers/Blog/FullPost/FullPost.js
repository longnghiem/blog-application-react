import React, {Component} from 'react'
import { withRouter } from 'react-router-dom'
import "./FullPost.css"

export default withRouter(class FullPost extends Component {

    render(){
        console.log(this.props)
        const postData = this.props.selectedPost(this.props.match.params.id);
        let post =  <section className="FullPost">
                        <h1>{postData.title}</h1>
                        <h2>{postData.category}</h2>
                        <div>{postData.content}</div>
                        <button onClick={()=>this.props.delete(this.props.match.params.id)}>Delete post</button>
                    </section>

        return post
    }
})