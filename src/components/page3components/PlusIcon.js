import React, { Component } from 'react';
import "../../styles/plussign.css"

class PlusSign extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: this.props.clicked
        }
    }

    render() {
        return (
            <div className="close-button">
                <div className="horizontalbar"></div>
                <div className={`verticalbar ${this.state.clicked ? 'bar-open' : 'bar-closed'}`}></div>
            </div>
        )
    }
}

export default PlusSign