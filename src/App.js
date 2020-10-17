import React, { Component } from "react";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Form from "./components/Form";
import "./styles/styles.css";
import "./styles/segment1.css";
import "./styles/segment2.css";
import "./styles/segment3.css";
import "./styles/form.css";

/*const utilizeScroll = () => {
    const htmlElRef = React.createRef();
    const executeScroll = () => {
        console.log(htmlElRef.current.offsetTop);
        window.scrollTo(0, htmlElRef.current.offsetTop);
    };

    return { executeScroll, htmlElRef };
};*/

class App extends Component {
    constructor(props) {
        super(props);
        //this.elScroll = utilizeScroll();
        this.someRef = React.createRef();
    }

    render() {
        return (
            <div>
                <Page1 curRef={this.someRef}/*func={this.elScroll.executeScroll}*//>
                <Page2 />
                <Page3 />
                <Form curRef={this.someRef}/>
            </div>
        );
    }
}

export default App;
