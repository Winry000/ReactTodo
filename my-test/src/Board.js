import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {
	constructor() {
		super();
		this.state = {
			num: ['','','','','','','','',''],
			order: true, // me
		}
		this.onClickAdd = this.onClickAdd.bind(this);
	}

	rendersquare = (idx) => {
		const { num } = this.state;
		return (
			<Square
				idx={idx}
				value={num[idx]}
				addIcon={this.onClickAdd}
			/>
		)
	}

	onClickAdd(idx) {
		let { num, order } = this.state;
		if (order) {
			num[idx] = 'x';
		} else {
			num[idx] = 'o';
		}
		this.setState({ num, order:!order });
	}
	
	render() {
		return (
			<div className="">
				<tr>
					<td>{this.rendersquare(0)}</td>
					<td>{this.rendersquare(1)}</td>
					<td>{this.rendersquare(2)}</td>
				</tr>
				<tr>
					<td>{this.rendersquare(3)}</td>
					<td>{this.rendersquare(4)}</td>
					<td>{this.rendersquare(5)}</td>
				</tr>
				<tr>
					<td>{this.rendersquare(6)}</td>
					<td>{this.rendersquare(7)}</td>
					<td>{this.rendersquare(8)}</td>
				</tr>
	
			</div>
		)
	}
};

export default Board;