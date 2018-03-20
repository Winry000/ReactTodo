import React, { Component } from 'react';
import './App.css';

class ComponentList extends Component {
	constructor () {
		super();
		this.state = {
			username: '',
			comment: ''
		}
	};
	componentWillMount () {
		const username = sessionStorage.getItem('username');
		if (username) {
			this.setState({username});
		}
	}
	componentDidMount () {
		this.input.focus();
	};
	onUsernameChange (e) {
		this.setState({
			username: e.target.value,
		})
	};
	onCommentChange (e) {
		this.setState({
			comment: e.target.value,
		})
	};
	handleSubmit () {
		if (this.props.onSubmit) {
			const { username, comment } = this.state
			this.props.onSubmit({ username, comment });
		};
		this.setState({
			username: '',
			comment: ''
		})
	};
	handleUsernameBlur (e) {
		sessionStorage.setItem('username', e.target.value);
	}
	render() {
		return (
			<div className="comment-input">
				<div className="comment-field">
					<span className="comment-field-name">UserName:</span>
					<span className="comment-field-input">
						<input
							ref={(input) => this.input = input}
							value={this.state.username}
							onBlur={this.handleUsernameBlur.bind(this)}
							onChange={this.onUsernameChange.bind(this)}
						/>
					</span>
				</div>
				<div className="comment-field">
					<span className="comment-field-name">Comment:</span>
					<span className="comment-field-input">
						<textarea
							value={this.state.comment}
							onChange={this.onCommentChange.bind(this)}
						/>
					</span>
				</div>
				<div className="comment-button">
					<button onClick={this.handleSubmit.bind(this)}>Submit</button>
				</div>
			</div>
		)
	}

}

export default ComponentList;