import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return(
            <div>
                Contact
                <div>{this.props.match.params.id}</div>
            </div>
        )
    }
}

export default Contact;