import React, { Component } from "react";
import BlobSVGWrapper from "./formcomponents/BlobSVGWrapper";
import BackButton from "./formcomponents/BackButton";
import CountrySelect from "./formcomponents/CountrySelect";
import DateOfBirth from "./formcomponents/DateOfBirth";
import HeightWeight from "./formcomponents/HeightWeight";
import { throwStatement } from "@babel/types";

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
        }), () => console.log(this.state));
    }

    decrementPage() {
        if (this.state.count > 0) {
            this.setState(prevState => ({
                count: prevState.count - 1
            }));
        }
    }

    render() {
        let context, spanText, formType;
        let backButton;

        if (this.state.count === 0) {
            context = "malaysian";
            formType = "2btn";
            spanText = "Are you a Malaysian?";
        } else if (this.state.count === 1) {
            if (this.state.malaysian === true) {
                context = "plan-type";
                formType = "2btn";
                spanText = "Individual or Family Plan?";
            } else {
                formType = "countryselect";
                spanText = "What's your country of origin?";
            }
        } else if (this.state.count === 2) {
            if (this.state["plan-type"] === "individual") {
                context = "dob";
                formType = "dob";
                spanText = "What's your date of birth?";
            } else if (this.state['plan-type'] === "family") {
                
            }
        } else if (this.state.count === 3) {
            if (!this.state["valid-age"]) {
                context = "ineligible";
                formType = "plain-text";
                spanText = "Sorry you are ineligible";
            } else if (this.state['age-group'] === 'child') {
                context = "gender";
                formType = "2btn";
                spanText = "What's your child's gender?";
            } else if (this.state['age-group'] !== 'child') {
                context = "gender";
                formType = "2btn";
                spanText = "What's your gender?";
            }
        } else if (this.state.count === 4) {
            if (this.state.malaysian) {
                if (this.state['age-group'] === 'child') {
                    console.log('get quote')
                } else if (this.state['age-group'] === 'senior-adult') {
                    context = "height-weight";
                    formType = "height-weight";
                    spanText = "What's your height and weight";
                } else if (this.state['age-group'] === 'adult') {
                    context = "heavy-machinery";
                    formType = "2btn";
                    spanText = "Does your work involve heavy machinery?";
                }
            } else if (!this.state.malaysian) {
                if (this.state['age-group'] === 'child') {
                    console.log('get quote')
                } else if (this.state['age-group'] === 'adult') {
                    context = 'expat-career1';
                    formType = "2btn";
                    spanText = "Would you describe your job to be in the following category:"
                } else if (this.state['age-group'] === 'senior-adult') {
                    context = "height-weight";
                    formType = "height-weight";
                    spanText = "What's your height and weight";
                } 
            }

        } else if (this.state.count === 5) {
            if (this.state.malaysian) {
                if (this.state['age-group'] === 'adult') {
                    if (this.state['heavy-machinery'] === true) {
                        context = "ineligible";
                        formType = "plain-text";
                        spanText = "Sorry you are ineligible";
                    } else {
                        console.log('get quote')
                    }
                } else if (this.state['age-group'] === 'senior-adult') {
                    context = "heavy-machinery";
                    formType = "2btn";
                    spanText = "Does your work involve heavy machinery?";
                }
            } else if (!this.state.malaysian) {
                if (this.state['age-group'] === 'adult' && this.state['expat-career1']) {
                    console.log('get quote')
                } else if (this.state['age-group'] === 'adult' && !this.state['expat-career1']) {
                    context = 'expat-career2';
                    formType = "2btn";
                    spanText = "Would you describe your job to be in the following category:"
                } else if (this.state['age-group'] === 'senior-adult') {
                    context = 'expat-career1';
                    formType = "2btn";
                    spanText = "Would you describe your job to be in the following category:"
                }
            }
        } else if (this.state.count === 6) {
            if (this.state.malaysian) {
                if (this.state['age-group'] === 'senior-adult') {
                    if (this.state['heavy-machinery'] === true) {
                        context = "ineligible";
                        formType = "plain-text";
                        spanText = "Sorry you are ineligible";
                    } else {
                        console.log('get quote')
                    }
                }
            } else if (!this.state.malaysian) {
                if (this.state['age-group'] === 'adult' && this.state['expat-career2']) {
                    console.log('get-quote')
                } else if (this.state['age-group'] === 'adult' && !this.state['expat-career2']) {
                    context = "ineligible";
                    formType = "plain-text";
                    spanText = "Sorry you are ineligible";
                } else if (this.state['age-group'] === 'senior-adult' && !this.state['expat-career1']) {
                    context = 'expat-career2';
                    formType = "2btn";
                    spanText = "Would you describe your job to be in the following category:"
                }  else if (this.state['age-group'] === 'senior-adult' && this.state['expat-career1']) {
                    console.log('get-qoute')
                }
            }
            
        } else if (this.state.count === 7) {
            if (!this.state.malaysian) {
                if (this.state['age-group'] === 'senior-adult' && this.state['expat-career2']) {
                    console.log('get-quote')
                } else if (this.state['age-group'] === 'senior-adult' && !this.state['expat-career2']) {
                    context = "ineligible";
                    formType = "plain-text";
                    spanText = "Sorry you are ineligible";
                }
            }
        }

        if (this.state.count > 0) {
            backButton = <BackButton decrementPage={this.decrementPage} />;
        }

        return (
            <div
                className="form"
                ref={this.curRef}
            >
                
                <FormComponent
                    updateState={this.updateState}
                    incrementPage={this.incrementPage}
                    context={context}
                    spanText={spanText}
                    formType={formType}
                    backButton={backButton}
                />
                <BlobSVGWrapper />
            </div>
        );
    }
}

class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.updateState = props.updateState;
        this.incrementPage = props.incrementPage;
    }

    render() {
        let subComponent;

        if (this.props.context !== "ineligible") {
            if (this.props.formType === "2btn") {
                subComponent = (
                    <TwoButtons
                        incrementPage={this.incrementPage}
                        updateState={this.updateState}
                        context={this.props.context}
                    />
                );
            } else if (this.props.formType === "countryselect") {
                subComponent = (
                    <CountrySelect
                        updateState={this.updateState}
                        incrementPage={this.incrementPage}
                    />
                );
            } else if (this.props.formType === "dob") {
                subComponent = (
                    <DateOfBirth
                        updateState={this.updateState}
                        incrementPage={this.incrementPage}
                    />
                );
            } else if (this.props.formType === "height-weight") {
                subComponent = (
                    <HeightWeight
                        updateState={this.updateState}
                        incrementPage={this.incrementPage}
                    />
                );
            }
        }

        return (
            <div className="form-component">
                <span className='form-header'>{this.props.spanText}</span>
                <div className='btn-wrapper'>
                    {subComponent}
                </div>
                {this.props.backButton}
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
        let text1, text2, list;
        if (this.props.context === "malaysian" || this.props.context === "heavy-machinery" || this.props.context === "expat-career1" || this.props.context === "expat-career2") {
            text1 = "yes";
            text2 = "no";
        } else if (this.props.context === "plan-type") {
            text1 = "individual";
            text2 = "family";
        } else if (this.props.context === "gender") {
            text1 = "male";
            text2 = "female";
        }

        if (this.props.context === "expat-career1") {
            list = (<ul className='expat-job-list'>
                        <li>Management</li>
                        <li>Executive</li>
                        <li>Professional</li>
                        <li>Student or Child</li>
                        <li>Housewife or Homemaker</li>
                    </ul>)
        } else if (this.props.context === 'expat-career2') {
            list = (<ul className='expat-job-list'>
                <li>Domestic Maid</li>
                <li>Office Worker</li>
            </ul>)
        }

        return (
            <div style={{'position': 'relative'}}>
                {list}
                <div className="btn-group">
                    <FormButtons
                        className="left"
                        text={text1}
                        incrementPage={this.incrementPage}
                        updateState={this.updateState}
                        context={this.props.context}
                    />
                    <FormButtons
                        className="right"
                        text={text2}
                        incrementPage={this.incrementPage}
                        updateState={this.updateState}
                        context={this.props.context}
                    />
                </div>
            </div>
            
        );
    }
}

class FormButtons extends Component {
    constructor(props) {
        super(props);
        this.updateState = props.updateState;
        this.incrementPage = props.incrementPage;
    }

    render() {
        let obj;

        if (this.props.context === "malaysian" || this.props.context === 'heavy-machinery' || this.props.context === "expat-career1" || this.props.context === "expat-career2") {
            obj = {
                [`${this.props.context}`]:
                    this.props.text === "yes" ? true : false
            };
        } else if (this.props.context === "plan-type") {
            obj = {
                [`${this.props.context}`]:
                    this.props.text === "family" ? "family" : "individual"
            };
        } else if (this.props.context === "gender") {
            obj = {
                [`${this.props.context}`]: this.props.text === "male" ? 1 : 2
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
                    {this.props.text.charAt(0).toUpperCase() +
                        this.props.text.slice(1)}
                </span>
            </div>
        );
    }
}

export default Form;
