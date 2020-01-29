import React from 'react';
import { BreadcrumbItem } from '../index'

function Sports() {
    return (
        <>
            <BreadcrumbItem to="/react-dynamic-breadcrumb" >Home</BreadcrumbItem>
            <BreadcrumbItem to="" >Sports</BreadcrumbItem>

            This is Sports page
        </>
    )
}

export default Sports;