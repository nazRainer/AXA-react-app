import React, { Component } from "react";
import BlobSVGWrapper from "./formcomponents/BlobSVGWrapper";

class Form extends Component {
    constructor(props) {
        super(props);
        this.curRef = props.curRef;
        this.updateState = this.updateState.bind(this);
        this.incrementPage = this.incrementPage.bind(this);
        this.decrementPage = this.decrementPage.bind(this);
        this.state = {
            count: 0
        };
    }

    updateState(obj) {
        this.setState(obj);
    }

    incrementPage() {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    }

    decrementPage() {
        if (this.state.count > 0) {
            this.setState(prevState => ({
                count: prevState.count - 1
            }));
        }
    }

    render() {
        let curPage;
        let backButton;

        if (this.state.count === 0) {
            curPage = (
                <Nationality
                    updateState={this.updateState}
                    incrementPage={this.incrementPage}
                />
            );
        } else if (this.state.count === 1 && this.state.malaysian === true) {
            curPage = (
                <IndividualOrFamilyPlan
                    updateState={this.updateState}
                    incrementPage={this.incrementPage}
                />
            );
        }

        if (this.state.count > 0) {
            backButton = <BackButton decrementPage={this.decrementPage} />;
        }

        return (
            <div
                className="form"
                onClick={() => console.log(this.state)}
                ref={this.curRef}
            >
                {backButton}
                {curPage}
                <BlobSVGWrapper />
            </div>
        );
    }
}

class Nationality extends Component {
    constructor(props) {
        super(props);
        this.updateState = props.updateState;
        this.incrementPage = props.incrementPage;
    }

    render() {
        return (
            <div className="nationality">
                <span>Are you a Malaysian?</span>
                <TwoButtons
                    incrementPage={this.incrementPage}
                    updateState={this.updateState}
                    context="malaysian"
                />
            </div>
        );
    }
}

class IndividualOrFamilyPlan extends Component {
    constructor(props) {
        super(props);
        this.updateState = props.updateState;
        this.incrementPage = props.incrementPage;
    }

    render() {
        return (
            <div className="plan-type">
                <span>Individual or Family Plan?</span>
                <TwoButtons
                    incrementPage={this.incrementPage}
                    updateState={this.updateState}
                    context="plan-type"
                />
            </div>
        );
    }
}

class TwoButtons extends Component {
    constructor(props) {
        super(props);
        this.updateState = props.updateState;
        this.incrementPage = props.incrementPage;
    }

    render() {
        if (this.props.context === "malaysian") {
            return (
                <div className="btn-group">
                    <FormButtons
                        className="left"
                        text="yes"
                        incrementPage={this.incrementPage}
                        updateState={this.updateState}
                        context={this.props.context}
                    />
                    <FormButtons
                        className="right"
                        text="no"
                        incrementPage={this.incrementPage}
                        updateState={this.updateState}
                        context={this.props.context}
                    />
                </div>
            );
        } else if (this.props.context === "plan-type") {
            return (
                <div className="btn-group">
                    <FormButtons
                        className="left"
                        text="individual"
                        incrementPage={this.incrementPage}
                        updateState={this.updateState}
                        context={this.props.context}
                    />
                    <FormButtons
                        className="right"
                        text="family"
                        incrementPage={this.incrementPage}
                        updateState={this.updateState}
                        context={this.props.context}
                    />
                </div>
            );
        }
    }
}

class FormButtons extends Component {
    constructor(props) {
        super(props);
        this.value = props.text;
        this.updateState = props.updateState;
        this.incrementPage = props.incrementPage;
    }

    render() {
        let obj;

        if (this.props.context === "malaysian") {
            obj = {
                [`${this.props.context}`]: this.value === "yes" ? true : false
            };
        } else if (this.props.context === "plan-type") {
            obj = {
                [`${this.props.context}`]:
                    this.value === "family" ? "family" : "individual"
            };
        }

        return (
            <div
                className={`form-btn ${this.props.className}`}
                onClick={() => {
                    this.updateState(obj);
                    this.incrementPage();
                }}
            >
                <span>
                    {this.value.charAt(0).toUpperCase() + this.value.slice(1)}
                </span>
            </div>
        );
    }
}

class BackButton extends Component {
    constructor(props) {
        super(props);
        this.decrementPage = props.decrementPage;
    }

    render() {
        return (
            <div onClick={() => this.decrementPage()} className="back-btn">
                <svg viewBox="0 0 1125 1125" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M367.438 178.881C382.764 163.019 408.272 163.019 424.135 178.881C439.461 194.207 439.461 219.715 424.135 235.006L136.65 522.49H1085.31C1107.42 522.526 1125 540.103 1125 562.217C1125 584.331 1107.42 602.48 1085.31 602.48H136.65L424.135 889.428C439.461 905.29 439.461 930.834 424.135 946.124C408.272 961.987 382.729 961.987 367.438 946.124L11.8966 590.583C-3.96555 575.257 -3.96555 549.749 11.8966 534.458L367.438 178.881Z" fill="#F8F8F8"/>
                </svg>
            </div>
        );
    }
}

export default Form;
