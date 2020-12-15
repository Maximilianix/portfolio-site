import React from 'react';
import './_button.scss';

const Button = (props) => (
    <button className={`btn ${props.classVal}`} onClick={props.handleBtnClick}>
        {props.value}
        <i className="icon">{props.icon}</i>
    </button>
);

export default Button;


