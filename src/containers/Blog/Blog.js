import React, {Component} from 'react';
import Posts from './Posts/Posts'
import {Route, NavLink, Switch} from 'react-router-dom'
import Form from './Form/Form'
import FullPost from "./FullPost/FullPost"
import Labels from "../../components/Labels/Labels"
import Category from "../../components/Category/Category"
import "./Blog.css"

class Blog extends Component {
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
                    <Route path="/" exact render={()=>
                        <div>
                            <Posts />
                            <Labels />
                        </div>    }/>
                    <Route path="/category/:id" exact component={Category} />
                    <Route path="/new-post" exact component={Form}/>
                    <Route path="/posts/:id" exact component={FullPost} />
                    <Route path="/edit-post/:id" exact component={Form}/>
                </Switch>
            </div>    
        )
    }
}

export default Blog