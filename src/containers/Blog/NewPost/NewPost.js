import React, {Component} from 'react'
import './NewPost.css'
import {withRouter} from 'react-router-dom'

export default withRouter(class NewPost extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            category: '',
            content: ''
        }
    }

    submitHandler = (event) => {
        event.preventDefault();

        this.props.submit({...this.state, id: this.props.lastId() + 1 })
        this.setState({
            title: '',
            category: '',
            content: ''
        })
        this.props.history.push('/')
    } 

    render(){
        return(
            <section className="NewPost">
                <form onSubmit={this.submitHandler}>
                    <label htmlFor="title">Title</label>
                    <input id="title" 
                           value={this.state.title}
                           onChange={e=>this.setState({title:e.target.value})} 
                            />
                    <label htmlFor="category">Category</label>
                    <input id="category" 
                           value={this.state.category}
                           onChange={e=>this.setState({category:e.target.value})} 
                            />
                    <label htmlFor="content">Content</label>
                    <textarea rows="4" 
                              value={this.state.content}
                              onChange={e=>this.setState({content: e.target.value})}
                              />
                    <button>Save</button>          
                </form>    
            </section>    
        )
    }
})