import React, { Component } from 'react';

class Square extends Component {
	onClickAdd() {
		const { idx, addIcon } = this.props;
		addIcon(idx);
	}

	render() {
		const { value } = this.props;
		
		return (
			<div className="Square" onClick={this.onClickAdd.bind(this)}>
				<p className="Square-content">{value}</p>
				
			</div>
		)
	}
}

export default Square;