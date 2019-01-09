import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom';

import '../styles/postsList.css';

class PostsList extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    componentDidMount() {
        // console.log('attempting to fetch posts')
        this.props.fetchPosts();
    }


    render() {
        return (
            <div>
                {this.props.allPosts.map(post => {
                    return (
                        <div key={post.id} className='post-content-container'>
                            <Link to={`/postById/${post.id}`}>
                                <div>
                                    <span className='post-content-span'>id:</span> {post.id}
                                </div>
                                <div>
                                    <span className='post-content-span'>title:</span> {post.title}
                                </div>
                                <div>
                                    <span className='post-content-span'>contents:</span> {post.contents}
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        );
    }
}

const mapStateToProps = state => {
    // console.log('trying to get posts')
    return {
        allPosts: state.posts,
    };
}


export default connect(
    mapStateToProps, 
    { fetchPosts }
) (PostsList);