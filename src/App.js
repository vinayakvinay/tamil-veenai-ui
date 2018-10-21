import React, { Component } from 'react';
import './App.css';
import BlogList from './bloglist/blog-list.component';
// import API from './services/api';

// const uri = 'http://localhost:5000';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { articles: [], isLoaded: false, error: null };
  }

  async componentDidMount() {
    // const articles = await API.get(`${uri}/articles`);
    this.setState({
      isLoaded: true, articles: [
        {
          id: 1,
          title: 'தமிழ்ச் சங்கம்',
          description: `சங்கம் என்பது ஒரு குறிப்பிட்ட குறிக்கோளுக்காக, ஒருமித்த கருத்துடன் செயல்படும் ஒரு கூட்டமைப்பு என்று தமிழ் கூறும்.`,
          tag: 'tamil-sangam',
          category: 'general',
          claps: 0,
          created_at: 'Oct 21, 2018',
          updated_at: 'Oct 21, 2018'
        }
      ]
    });
  }

  render() {
    return (
      <div>
        <BlogList articles={this.state.articles}/>
      </div>
    );
  }
}

export default App;
