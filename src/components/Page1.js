import React from "react";
import ImageWrapper from "./page1components/ImageWrapper";
import CurlecLogo from "./page1components/CurlecLogo";
import EMedicLogo from "./page1components/EMedicLogo";
import LandingParagraph from "./page1components/LandingParagraph";
import CheckPriceBtn from "./CheckPriceBtn";

const Page1 = () => {
    return (
        <div className="landing-div">
            <ImageWrapper />
            <CurlecLogo />
            <EMedicLogo />
            <LandingParagraph />
            <CheckPriceBtn />
        </div>
    )
}

export default Page1;