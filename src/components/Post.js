import React from 'react';
// import axios from 'axios';
import {connect} from 'react-redux';
import { deletePost } from '../actions/postAction';


class Post extends React.Component {
    handleClick = () => {
        this.props.deletePost(this.props.post.id)
        this.props.history.push('/')
    }
    render() {
        console.log(this.props)
        const post = this.props.post ? (
            <div className='post'>
                <h4 className='center'>{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className='center'>
                    <button className='btn' onClick={this.handleClick}>
                        Delete
                    </button>
                </div>
            </div>
        ) : (
            <div className='center'>No Post</div>
        )
        return(
            <div className='container'>
                {post}
                
            </div>
        )
    }
}


const mapStatetoProps = (state, ownProps) => {
    let id = parseInt(ownProps.match.params.post_id)
    //parseInt is used because id in state is number but find is expecting an string/text
    return {
        post:state.posts.find(post => post.id === id)
    }
}


const mapDispachToProps = (dispatch) => {
    return {
        deletePost: (id) => {dispatch(deletePost(id))}
    }
}


export default connect(mapStatetoProps, mapDispachToProps)(Post);


