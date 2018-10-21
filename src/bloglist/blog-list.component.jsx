import React, { Component } from 'react';
import BlogListCell from '../bloglist-cell/bloglist-cell.component';

class BlogList extends Component {

  render() {
    const kings = [
        { name: 'chola', location: 'Woraiyur' }, 
        { name: 'Pandyan', location: 'Madurai' }
    ];
    const cells = kings.map((king, idx) => <BlogListCell name={king.name} location={king.location} key={idx} />);
    return (
      <div>
        { cells }
      </div>
    );
  }
}

export default BlogList;
