import React, {Component} from "react";

class CheckPriceBtn extends Component {
    constructor(props) {
        super(props);
        this.curRef = props.curRef;
    }


    render() {
        return (
            <div onClick={() => window.scrollTo(0, this.curRef.current.offsetTop)} className="check-price-btn">GET STARTED</div>
        )
    }
}

export default CheckPriceBtn;