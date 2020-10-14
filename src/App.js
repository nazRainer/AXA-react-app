import React from "react";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3"
import "./styles/styles.css";
import "./styles/segment1.css";
import "./styles/segment2.css";
import "./styles/segment3.css";


const App = () => {
    return (
        <div>
            <Page1 />
            <Page2 />
            <Page3 />
        </div>
    )
}

export default App;

