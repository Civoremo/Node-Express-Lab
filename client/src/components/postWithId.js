import React from 'react';
import { connect } from 'react-redux';
import { fetchSinglePost } from '../actions';

import '../styles/postsList.css';

class PostWithId extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.fetchSinglePost(this.props.match.params.postId);
    }


    render () {
        if(this.props.selectedPost.length === 0) {
            return <>Loading Post</>
        }
        return (
            <div className='post-content-container '>
                {/* post info goes here */}
                {console.log(this.props.selectedPost[0])}
                <div>
                    <span className='post-content-span'>id:</span>{this.props.selectedPost[0].id}
                </div>
                <div>
                    <span className='post-content-span'>title:</span>{this.props.selectedPost[0].title}
                </div>
                <div>
                    <span className='post-content-span'>contents:</span>{this.props.selectedPost[0].contents}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        selectedPost: state.postById,
        fetchingPost: state.fetchPostById,
    };
}

export default connect(
    mapStateToProps,
    { fetchSinglePost }
) (PostWithId);

