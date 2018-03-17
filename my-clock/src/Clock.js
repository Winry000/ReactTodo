import React, { Component } from 'react';

class Clock extends Component {
    constructor() {
        super();
        this.state = {
            date: new Date()
        }
    };
    componentWillMount() {
        this.timer = setInterval(() => {
            this.setState({date : new Date()})
        }, 1000)
    };
    render() {
        return(
            <div>
                <p>This current time is: </p>
                {this.state.date.toLocaleTimeString()}
            </div>
        )
    }
}

export default Clock;