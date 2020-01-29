import React from 'react';
import { BreadcrumbItem } from '../index'

function Football() {
    return (
        <>
            <BreadcrumbItem to="/" >Home</BreadcrumbItem>
            <BreadcrumbItem to="/sports" >Sports</BreadcrumbItem>
            <BreadcrumbItem  >Football</BreadcrumbItem>


            This is Football page
        </>
    )
}

export default Football;