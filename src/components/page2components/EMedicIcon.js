import React from "react";

class EMedicIcon extends React.Component {
    constructor(props) {
        super(props);
        this.svgpath = props.svgpath;
        this.spantext = props.text;
    }

    render() {
        return (
        <div className="emedic-icons">
            <div className="emedic-icons-svg"  dangerouslySetInnerHTML={{ __html: this.svgpath}}></div>
            <span>{this.spantext}</span>
        </div>
        )
    }
}

export default EMedicIcon;