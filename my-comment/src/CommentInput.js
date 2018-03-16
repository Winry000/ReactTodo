import React, { Component } from 'react';

class ComponentList extends Component {
    constructor () {
        super();
        this.state = {
            username: '',
            comment: ''
        }
    };
    onUsernameChange(e) {
        this.setState ({
            username: e.target.value,
        })
    };
    onCommentChange(e) {
        this.setState ({
            comment: e.target.value,
        })
    };
    handleSubmit(){
        if (this.props.onSubmit) {
            const {username, comment} = this.state
            this.props.onSubmit({username, comment});
        };
        this.setState({
            username: '',
            comment: ''
        })
    };
    render() {
        return(
            <div className="comment-input">
                <div className="comment-field">
                    <span className="comment-field-name">UserName:</span>
                    <div className="comment-field-input">
                        <input 
                            value={this.state.username} 
                            onChange={this.onUsernameChange.bind(this)}
                        />
                    </div>
                </div>
                <div className="comment-field">
                    <span className="comment-field-name">Comment:</span>
                    <div className="comment-field-input">
                        <textarea 
                            value={this.state.comment}
                            onChange={this.onCommentChange.bind(this)}
                        />
                    </div>
                </div>
                <div className="comment-button">
                    <button onClick={this.handleSubmit.bind(this)}>Submit</button>
                </div>
            </div>
        )
    }
    
}

export default ComponentList;