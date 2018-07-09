import React, { Component } from 'react';
import {connect} from 'react-redux'
import Label from '../Label/Label'
import {Link} from 'react-router-dom'
import "./Labels.css"

class Labels extends Component {
    render() {
        const allLabels = this.props.posts.map(post=>post.category)
        const labels = [...new Set(allLabels)].map((label,i)=>{
            return (
                <Link to={"/category/" + label} key = {i}>
                    <Label name={label} />
                </Link>
            )
        })
        return (
            <div className="Labels">
                {labels}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}
export default connect(mapStateToProps)(Labels);