import React,{ Component } from 'react';
import './App.css';

class Element extends Component {

    handleLeftClick() {
        const id = this.props.id;
        const content = this.props.content;
		this.props.onClickLeft(id, content);
	};

	handleRightClick() {
        const id = this.props.id;
        const content = this.props.content;
		this.props.onClickRight(id, content);
    };
    
    render() {
        return (
            <div>
                <button onClick={this.handleLeftClick.bind(this)} className='button-left'>L</button>
                <p className='comment-card'>{this.props.content}</p>
                <button onClick={this.handleRightClick.bind(this)} className='button-right'>R</button>
            </div>
        );
    }
}

export default Element;