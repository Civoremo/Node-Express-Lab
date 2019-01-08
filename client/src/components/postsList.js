import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsList extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    componentDidMount() {
        console.log('attempting to fetch posts')
        this.props.fetchPosts();
    }


    render() {
        return (
            <div>
                {this.props.allPosts.map(post => {
                    return (
                        <div key={post.id}>
                            <div>
                                {post.id}
                            </div>
                            <div>
                                {post.title}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log('trying to get posts')
    return {
        allPosts: state.posts,
    };
}


export default connect(
    mapStateToProps, 
    { fetchPosts }
) (PostsList);