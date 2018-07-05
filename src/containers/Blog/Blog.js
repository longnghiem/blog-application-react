import React, {Component} from 'react';
import Posts from './Posts/Posts'
import {Route, NavLink, withRouter, Switch} from 'react-router-dom'
import NewPost from './NewPost/NewPost'
import FullPost from "./FullPost/FullPost"
import "./Blog.css"
import {connect} from 'react-redux'

class Blog extends Component {
    constructor(props){
        super(props)
        this.state = {}
         
    }
    
    getSelectedPost = (id) => {
        return this.props.posts.filter(post=>post.id===Number(id))[0]
    }

    getLastId = () => {
        const ids = this.props.posts.map(post=> post.id)
        ids.sort((a,b)=>a-b)
        return ids[ids.length-1]
    }

    deleteHandler = (id) => {
        this.props.delete(id)
        this.props.history.push('/')
    }

    render(){
        return(
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact >Home</NavLink></li>
                            <li><NavLink to="/new-post">New Post</NavLink></li>
                        </ul>   
                    </nav>
                </header>
                <Switch>
                    <Route path="/" exact render={props=>{
                        return <Posts posts={this.props.posts} />
                    }} />
                    <Route path="/new-post" exact render={(props)=>{
                        return <NewPost submit={this.props.submit} lastId={this.getLastId}/>
                    }} />
                    <Route path="/posts/:id" exact render={(props)=>{
                        return <FullPost selectedPost = {this.getSelectedPost} delete={this.deleteHandler}/>
                    }} />
                </Switch>
            </div>    
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submit: (data) => dispatch({type: 'ADD_POST', data}),
        delete: (id) => dispatch({type: 'DEL_POST', id})
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Blog))