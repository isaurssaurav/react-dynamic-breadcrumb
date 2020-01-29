import React from 'react';
import { BreadcrumbItem } from '../index'

function Football() {
    return (
        <>
            <BreadcrumbItem to="/react-dynamic-breadcrumb" >Home</BreadcrumbItem>
            <BreadcrumbItem to="/react-dynamic-breadcrumb/sports" >Sports</BreadcrumbItem>
            <BreadcrumbItem  >Football</BreadcrumbItem>


            This is Football page
        </>
    )
}

export default Football;