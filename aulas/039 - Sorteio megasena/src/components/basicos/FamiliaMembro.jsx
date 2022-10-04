import React from "react";

export default function FamiliaMembro(props) {
    const { nome, sobrenome } = props;

    return (
        <p>{ nome }, <strong>{ sobrenome }</strong></p>
    )
}