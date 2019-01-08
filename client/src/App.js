import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import PostsList from './components/postsList';
import PostWithId from './components/postWithId';

// connect server with out application and use the responses to display data

class App extends Component {
  constructor() {
    super();
    this.state = {
      // allPosts: [],
    }
  }

  render() {
    return (
      <div className="App">
        <Route exact path='/' render={props => <PostsList {...props}/>}></Route>
        <Route exact path='/postById/:postId' render={props => <PostWithId {...props}/>}></Route>
      </div>
    );
  }
}

export default App;
