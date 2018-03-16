import React, { Component } from 'react';

class Comment extends Component{
    render() {
        return(
            <div className="comment">
                <div className="comment-user">
                    <span>{this.props.content.username}</span>
                </div>
                <p>{this.props.content.comment}</p>
            </div>
        )
    }
}

export default Comment;