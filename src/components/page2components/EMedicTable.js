import React from "react";
import EMedicIcon from "./EMedicIcon";
import svgandspans from "./IconObject";

class EMedicTable extends React.Component {
    render() {

        return (
            <div className="why-emedic-table">
                {svgandspans.map((element) => 
                    <EMedicIcon 
                    svgpath={element.svgpath}
                    text={element.text}
                    />
                )}
            </div>
        )
    }
}

export default EMedicTable;