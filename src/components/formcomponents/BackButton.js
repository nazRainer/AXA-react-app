import React, { Component } from 'react';

class BackButton extends Component {
    constructor(props) {
        super(props);
        this.decrementPage = props.decrementPage;
        this.backBtnRef = this.props.backBtnRef
    }

    render() {
        return (
            <div ref={this.backBtnRef} className="back-btn" onClick={() => this.decrementPage()}>
                <svg viewBox="0 0 1125 1125" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M367.438 178.881C382.764 163.019 408.272 163.019 424.135 178.881C439.461 194.207 439.461 219.715 424.135 235.006L136.65 522.49H1085.31C1107.42 522.526 1125 540.103 1125 562.217C1125 584.331 1107.42 602.48 1085.31 602.48H136.65L424.135 889.428C439.461 905.29 439.461 930.834 424.135 946.124C408.272 961.987 382.729 961.987 367.438 946.124L11.8966 590.583C-3.96555 575.257 -3.96555 549.749 11.8966 534.458L367.438 178.881Z" fill="#F8F8F8"/>
                </svg>
            </div>
        );
    }
}

export default BackButton;