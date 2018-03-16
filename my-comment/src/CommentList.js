import React, {Component} from 'react';
import Comment from './Comment';

class CommentList extends Component {
    static defaultProps = {
        comments: [],
    }
    render() {
        //test data
        // const comments = [
        //     {username: 'Emily', comment: 'Good Product!'},
        //     {username: 'Tommy', comment: 'Nice!'},
        //     {username: 'Herry', comment: 'Will come next time!'},
        // ]
        return(
            <div>
                {this.props.comments.map((content, i) => {
                    return (
                        <Comment content={content} key={i}/>
                    )
                })}
            </div>
        )
    }
}

export default CommentList;