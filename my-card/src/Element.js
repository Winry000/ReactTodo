import React,{ Component } from 'react';
import './App.css';

class Element extends Component {
    render() {
        return (
            <div>
                <p className='comment-card'>{this.props.content}</p>
            </div>
        );
    }
}

export default Element;