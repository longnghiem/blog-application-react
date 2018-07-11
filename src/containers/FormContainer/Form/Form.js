import React, {Component} from 'react'
import './Form.css'

class Form extends Component {
    constructor(props){
        super(props)
        this.state = this.props.inputData
    }
    
    //without this func, user cannot switch to "Add new post" while being on "Editing post"
    componentDidUpdate(prevProps) {
        if(this.props.match.params.id !== prevProps.match.params.id) {
            this.setState(this.props.inputData)
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.submit(this.state)
        this.setState({
            title: '',
            category: '',
            content: ''
        })
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
                    <label htmlFor="intro">Introduction</label>
                    <textarea rows="2" 
                            value={this.state.intro}
                            name='intro'
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


export default Form