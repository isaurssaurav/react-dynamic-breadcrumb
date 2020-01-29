import React from 'react';
import { BreadcrumbItem } from '../index'

const Home = () => {
    return (
        <>
            <BreadcrumbItem to="/" >Home</BreadcrumbItem>
            <h2>React Dynamic BreadCrumb</h2>
            <p>
                This package helps to create breadcrumb dynamically independent to routes.
            </p>
            <p>Click Here to see how to use this package.</p>
        </>
    )
}

export default Home;