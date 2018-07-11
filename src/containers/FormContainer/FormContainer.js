import React, { Component } from 'react';
import {connect} from 'react-redux'
import Form from './Form/Form'

class FormContainer extends Component {


    getData = (id) => {
        return id ? this.props.posts.filter(post=>post.id===Number(id))[0] : {
            title: '',
            category: '',
            content: ''
            }
    }
    
    getLastId = () => {
        const ids = this.props.posts.map(post=> post.id)
        ids.sort((a,b)=>a-b)
        return ids[ids.length-1]
    }

    submitHandler = (data) => {
        const newId = this.getLastId()>=0? this.getLastId() + 1 : 0
        if(this.props.match.params.id) {
            this.props.edit(data)
        } else {
            this.props.add({...data, id: newId})
        }
        this.props.history.push('/')
    }



    render() {
        const inputData = this.getData(this.props.match.params.id)
        return (
            <div>
                <Form submit={this.submitHandler} {...this.props} inputData={inputData}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts : state.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add: data => dispatch({type: 'ADD_POST',data}),
        edit: (data) => dispatch({type: 'EDIT_POST', data}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);