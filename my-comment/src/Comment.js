import React, { Component } from 'react';

class Comment extends Component{
    render() {
        return(
            <div className="comment">
                <div className="comment-user">
                    <span>{this.props.content.username} : </span>
                    <span>{this.props.content.comment}</span>
                </div>
                
            </div>
        )
    }
}

export default Comment;