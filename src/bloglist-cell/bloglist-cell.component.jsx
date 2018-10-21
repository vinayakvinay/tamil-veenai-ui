import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

class BlogListCell extends Component {

    render() {
        return (
            <div>
                <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                    <CardTitle>{ this.props.name }</CardTitle>
                    <CardText>About { this.props.name } in { this.props.location } </CardText>
                </Card>
                <br/>
            </div>
        );
    }
}

export default BlogListCell;
