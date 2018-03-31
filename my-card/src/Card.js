import React, { Component } from 'react';
import './App.css';

import Element from './Element';

class Card extends Component {
	constructor() {
		super();
		this.state = {
			ele:'',
		}
	};

	onInputChange(e) {
		this.setState({
			ele: e.target.value
		})
	};

	handleSubmit() {
		const { ele } = this.state;
		const id = this.props.id;
		this.props.onClickSubmit(id, ele);
		this.setState({
			ele: ''
		})
	};

	
	render() {
		return (
			<div>
				<p className='title-name' style={{backgroundColor: this.props.color}}>{this.props.name}</p>
				{this.props.mlist.map((content, i) => (
						<Element  key={i} 
						content={content}
						id={this.props.id}
						onClickLeft={this.props.onClickLeft}
						onClickRight={this.props.onClickRight}
						/>
				))}
				<input ref={(input) => this.input = input}
				onChange={this.onInputChange.bind(this)}/>
				<button onClick={this.handleSubmit.bind(this)}>Add</button>
			</div>
		);
	}
}

export default Card;