import React, {Component} from "react";

class FaqElements extends Component {
    constructor(props) {
        super(props);
        this.h1text = props.h1;
        this.content = props.htmlcontent;
        this.state = {
            clicked: false
        }
    }

    handleClick() {
        this.setState((prevState) => {
            return {
                clicked: !prevState.clicked
            }
        })
    }

    render() {
        return (
            <div>
                <div className="dropdown-bars" onClick={() => this.handleClick()}>
                    <h1>{this.h1text}</h1>
                </div>
                <div className={`dropdown-content-closed ${this.state.clicked ? "dropdown-content-open" : ""}`} dangerouslySetInnerHTML={{__html: this.content}}></div>
            </div>
        )
    }
}

export default FaqElements;