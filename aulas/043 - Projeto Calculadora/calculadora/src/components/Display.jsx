import React from "react";
import './Display.css';

const Display = (props) => {
    const { resultado } = props;

    return (
        <div className="display">{resultado}</div>
    );
}

export default Display;