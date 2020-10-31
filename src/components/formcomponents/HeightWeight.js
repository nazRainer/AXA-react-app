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

    proceed() {
        if (this.checkValid(this.state.weight, this.state.height)) {
            this.incrementPage();
        }
    }

    handleKeyPress(event, str) {
        event.persist();
        
        this.setState((prevState) => ({[`${str}`]: prevState[`${str}`] + event.key }));
    }

    checkValid(weight, height) {
        if (weight !== "" && height !== "") {
            return true;
        }
    }

    render() {

        return (
            <div className="height-weight">
                <div style={{'display': 'flex', 'flexDirection': 'row'}}>
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
                            (Array.from("0123456789").includes(e.key) || e.keyCode === 8 || e.keyCode === 46) ? this.handleKeyPress(e, 'weight'): e.preventDefault()
                        }
                    ></input>
                </div>
                <div className={'proceed-btn'} style={{'left': '50%', 'transform': 'translateX(-50%)'}} onClick={() => this.proceed()}><span>Proceed</span></div>
            </div>
        );
    }
}

export default HeightWeight;