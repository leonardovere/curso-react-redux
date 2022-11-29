import './Card.css';
import React from 'react';

function getColor(color) {
    const classes = {
        'red': "Red",
        'green': "Green",
        'blue': "Blue",
        'purple': "Purple",
    }

    return classes[color] ?? ''
}

export default (props) => (
    <div className={`Card ${getColor(props.color)}`}>
        <div className='Header'>
            <span className='Title'>{props.title}</span>
        </div>

        <div className='Content'>
            {props.children}
        </div>
    </div>
)