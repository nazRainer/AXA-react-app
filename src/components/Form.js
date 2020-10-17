import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.curRef = props.curRef;
        this.updateNationality = this.updateNationality.bind(this);
        this.incrementPage = this.incrementPage.bind(this);
        this.decrementPage = this.decrementPage.bind(this);
        this.state = {
            count: 0,
        }
    }

    updateNationality(val) {
        this.setState({
            malaysian: val
        });
    }

    incrementPage() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
    }

    decrementPage() {
        if (this.state.count > 0) {
            this.setState((prevState) => ({
                count: prevState.count - 1
            }))
        }
    }

    render() {
        let curPage;
        let backButton;

        if (this.state.count === 0) {
            curPage =  <Nationality updateNationality={this.updateNationality} incrementPage={this.incrementPage}/>
        }

        if (this.state.count > 0) {
            backButton = <BackButton decrementPage={this.decrementPage}/>
        }

        return (
            <div className="form" onClick={() => console.log(this.state)} ref={this.curRef}>
                {backButton}
                {curPage}
            </div>
        )
    }
}

class Nationality extends Component {
    constructor(props) {
        super(props);
        this.updateNationality = props.updateNationality;
        this.incrementPage = props.incrementPage;
    }

    render() {
        return (
            <div className="nationality">
                <span>Are you a Malaysian?</span>
                <div>
                    <FormButtons text="Yes" incrementPage={this.incrementPage} updateNationality={this.updateNationality}/>
                    <FormButtons text="No" incrementPage={this.incrementPage} updateNationality={this.updateNationality}/>
                </div>
            </div>
        )
    }
}

class FormButtons extends Component {
    constructor(props) {
        super(props);
        this.value = props.text;
        this.updateNationality = props.updateNationality;
        this.incrementPage = props.incrementPage;
    }

    render() {
        return (
            <div className="form-btn" onClick={() => {
                this.updateNationality(this.value === "Yes" ? true : false);
                this.incrementPage();
                }}>
                {this.value}
            </div>
        )
    }
}

class BackButton extends Component {
    constructor(props) {
        super(props);
        this.decrementPage = props.decrementPage;
    }

    render() {
        return (
            <div onClick={() => this.decrementPage()}className="back-btn">
                back
            </div>
        )
    }
}



export default Form;