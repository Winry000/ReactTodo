import React, {Component} from 'react';

class SingleTodo extends Component {
    constructor() {
        super();
    }
    render() {
        return(
            <div>
                <li>{this.props.todo} <button onClick={this.props.delete}>x</button></li>
            </div>
        )
    }
}
export default SingleTodo;
