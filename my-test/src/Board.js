import React, {Component} from 'react';

import Square from './Square.js';

class Board extends Component {
    constructor(){
        super();
        this.state = {
            num: [],
            order: true,
        }
    }
    addIcon = () => {
        const { order } = this.state;
        this.setState({order: !order})
    }
    rendersquare = () => {
        var i = '';
        if(this.state.order) {
            i = 'x';
        } else {
            i = 'o';
        }
        return <Square value={i} addIcon={() => this.addIcon()}/>
    };
    render() {
        return (
            <div>
                <div className="row_1">
                    {this.rendersquare()}
                    {this.rendersquare()}
                    {this.rendersquare()}
                </div>
                <div className="row_2">
                    {this.rendersquare()}
                    {this.rendersquare()}
                    {this.rendersquare()}
                </div>
                <div className="row_3">
                    {this.rendersquare()}
                    {this.rendersquare()}
                    {this.rendersquare()}
                </div>
            </div>
        )
    }
}

export default Board;