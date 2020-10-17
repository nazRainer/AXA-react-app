import React, {Component} from "react";
import PlusIcon from "./PlusIcon";

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
            <div className="faq-single-elem">
                <div className="dropdown-bars" onClick={() => this.handleClick()}>
                    <span>{this.h1text}</span>
                    <PlusIcon clicked={this.state.clicked} key={this.state.clicked}/>
                </div>
                <div className={`dropdown-content ${this.state.clicked ? "dropdown-content-open" : "dropdown-content-closed"}`} dangerouslySetInnerHTML={{__html: this.content}}></div>
            </div>
        )
    }
}

export default FaqElements;