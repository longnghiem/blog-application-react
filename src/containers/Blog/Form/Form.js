import React, {Component} from 'react'
import './Form.css'
import {connect} from 'react-redux'

class Form extends Component {
    constructor(props){
        super(props)
        this.state = this.getData(this.props.match.params.id)
    }

    getData = (id) => {
        return id ? this.props.posts.filter(post=>post.id===Number(id))[0] : {
            title: '',
            category: '',
            content: ''
            }
    }
    //without this func, user cannot switch to "Add new post" while being on "Editing post"
    componentDidUpdate(prevProps) {
        if(this.props.match.params.id !== prevProps.match.params.id) {
            this.setState(this.getData(this.props.match.params.id))
        }
    }

    getLastId = () => {
        const ids = this.props.posts.map(post=> post.id)
        ids.sort((a,b)=>a-b)
        return ids[ids.length-1]
    }

    submitHandler = (event) => {
        event.preventDefault();
        const newId = this.getLastId()>=0? this.getLastId() + 1 : 0
        if(this.props.match.params.id) {
            this.props.edit({...this.state})
        } else {
            this.props.submit({...this.state, id: newId})
        }
        this.props.history.push('/')
    } 

    changeHandler = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render(){
        return(
            <section className="Form">
                <form onSubmit={this.submitHandler}>
                    <label htmlFor="title">Title</label>
                    <input id="title"
                           name='title'  
                           value={this.state.title}
                           onChange={this.changeHandler} 
                            />
                    <label htmlFor="category">Category</label>
                    <input id="category" 
                           name="category"
                           value={this.state.category}
                           onChange={this.changeHandler} 
                            />
                    <label htmlFor="content">Content</label>
                    <textarea rows="4" 
                              value={this.state.content}
                              name='content'
                              onChange={this.changeHandler}
                              />
                    <button>Save</button>          
                </form>    
            </section>    
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
        edit: (data) => dispatch({type: 'EDIT_POST', data}),
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)