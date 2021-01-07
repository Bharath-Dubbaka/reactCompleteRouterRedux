import React from 'react';
// import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Home extends React.Component {

    // state = {
    //     posts: []
    // }
    //     componentDidMount() {
    //         axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then ((res) => {
    //             console.log(res)
    //             this.setState({
    //                 posts:res.data
    //             })
    //         })
    //     }
    render() {
        const {posts} = this.props
        const postList = posts.length ? (
            posts.map(post => {
                return(
                    <div className='post card' key={post.id}>
                        <div className='card-content'>
                            <Link to={'/' + post.id}>
                            <span className='card-title'>{post.title}</span>
                            </Link>
                            <span className='card-body'>{post.body}</span>

                            
                        </div>
                    </div>
                )
            })
        ) : (
            <div className='center'></div>
        )
    return (
        <div className='container'>
            <h4>Home</h4>
            {postList}
        </div>       
    )
}
}

const mapStatetoProps = (state) => {
    return {
        posts:state.posts
    }
}


export default connect(mapStatetoProps)(Home);