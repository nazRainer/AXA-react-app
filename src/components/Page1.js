import React, {Component} from "react";
import ImageWrapper from "./page1components/ImageWrapper";
import CurlecLogo from "./page1components/CurlecLogo";
import EMedicLogo from "./page1components/EMedicLogo";
import LandingParagraph from "./page1components/LandingParagraph";
import CheckPriceBtn from "./CheckPriceBtn";

class Page1 extends Component {
    constructor(props) {
        super(props);
        this.curRef = props.curRef;
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className="landing-div">
                <ImageWrapper />
                <CurlecLogo />
                <EMedicLogo />
                <LandingParagraph />
                <CheckPriceBtn curRef={this.curRef}/>
            </div>
        )
    }
}

export default Page1;