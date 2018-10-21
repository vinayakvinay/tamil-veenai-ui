import React, { Component } from 'react';
import './App.css';
import BlogList from './bloglist/blog-list.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BlogList />
      </div>
    );
  }
}

export default App;
