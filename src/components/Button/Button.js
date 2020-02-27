import React from "react";
import './Button.css';

export function Button(props) {
    return (
        <div className={'base-button'} onClick={props.onClick}>
            <div className={`dws ${props.className}`}>
                <a className="butt">{props.children}</a>
            </div>
        </div>
    );
}

// почитать что такое props.children
