import React, { Component } from 'react';
import './App.css';

import PostsList from './components/postsList';

// connect server with out application and use the responses to display data

class App extends Component {
  constructor() {
    super();
    this.state = {
      allPosts: [],
    }
  }

  render() {
    return (
      <div className="App">
        <PostsList />
      </div>
    );
  }
}

export default App;
