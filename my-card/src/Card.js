import React, { Component } from 'react';
import './App.css';

import Element from './Element';

class Card extends Component {
	constructor() {
		super();
		this.state = {
			list:[],
			ele:''
		}
	};

	onInputChange(e) {
		this.setState({
			ele: e.target.value
		})
	};

	onClickSubmit() {
		const { list, ele } = this.state;
		list.push(ele);
		console.log(list)
		this.setState({
			ele: ''
		})
	}

	render() {
		return (
			<div>
				<p className='title-name' style={{backgroundColor: this.props.color}}>{this.props.name}</p>
				{this.state.list.map((content, i) => (
						<Element  key={i} content={content}/>
				))}
				<input ref={(input) => this.input = input}
				onChange={this.onInputChange.bind(this)}/>
				<button onClick={this.onClickSubmit.bind(this)}>Add</button>
			</div>
		);
	}
}

export default Card;