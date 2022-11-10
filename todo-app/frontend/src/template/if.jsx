import React from "react";

export default (props) => {
    return props.cond ? props.children : false;
}