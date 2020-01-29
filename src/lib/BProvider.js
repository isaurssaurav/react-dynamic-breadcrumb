import React from 'react';
import { ThroughProvider } from 'react-through';


const BreadProvider = function (props) {
    return (
        <ThroughProvider>
            {props.children}
        </ThroughProvider>
    )
}

export default BreadProvider;