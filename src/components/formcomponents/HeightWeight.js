import React, { Component } from 'react';

class HeightWeight extends Component {
    constructor(props) {
        super(props);
        this.updateState = props.updateState;
        this.incrementPage = props.incrementPage;
        this.typingTimeout = null;
        this.state = {
            weight: "",
            height: "",
        }
    }

    handleKeyPress(event, str) {
        event.persist();

        this.setState((prevState) => ({[`${str}`]: prevState[`${str}`] + event.key }));

        clearTimeout(this.typingTimeout);

        if (this.checkValid(this.state.weight, this.state.height)) {
            this.typingTimeout = setTimeout(this.incrementPage, 1000)
        }
    }

    checkValid(weight, height) {
        if (weight !== "" && height !== "") {
            return true;
        }
    }

    render() {

        return (
            <div className="height-weight">
                <input
                    type="text"
                    name="height"
                    placeholder="Height (cm)"
                    autoComplete="off"
                    onKeyDown={(e) =>
                        Array.from("0123456789").includes(e.key) ? this.handleKeyPress(e, 'height'): e.preventDefault()
                    }
                ></input>
                <input
                    type="text"
                    name="weight"
                    placeholder="Weight (kg)"
                    autoComplete="off"
                    onKeyDown={e =>
                        Array.from("0123456789").includes(e.key) ? this.handleKeyPress(e, 'weight'): e.preventDefault()
                    }
                ></input>
            </div>
        );
    }
}

export default HeightWeight;