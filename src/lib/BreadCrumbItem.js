import React from 'react';
import { createAgent } from 'react-through';


const IndicatorAgent = createAgent('bread', "keyNo");

function BreadCrumbItem(props) {
    let keyNo = Math.random();
    return (
        <IndicatorAgent to={props.to} keyNo={keyNo}>
            {props.children}
        </IndicatorAgent>
    )
}

export default BreadCrumbItem;