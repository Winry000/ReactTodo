import React, { Component } from 'react';

class About extends Component {
    handleNavigate() {
        this.props.history.push("/");
    }
    render() {
        return(
            <div>
                About
                <button onClick={this.handleNavigate.bind(this)}>Go Home</button>
            </div>
        )
    }
}

export default About;