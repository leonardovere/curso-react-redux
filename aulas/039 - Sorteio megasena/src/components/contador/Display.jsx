import React from "react";

const Display = (props) => {
    const { numero } = props;

    return (
        <div>
            <span>{ numero }</span>
        </div>
    )
}

export default Display;