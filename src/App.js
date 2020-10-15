import React, {Component} from "react";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Form from "./components/Form";
import "./styles/styles.css";
import "./styles/segment1.css";
import "./styles/segment2.css";
import "./styles/segment3.css";
import "./styles/form.css";


class App extends Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

    componentDidMount() {
        console.log(this.ref.current);
    }

    render() {
        return (
            <div>
                <Page1 />
                <Page2 />
                <Page3 ref={this.ref}/>
                <Form />
            </div>
        )
    }
}

export default App;

