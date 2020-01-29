import React from 'react';
import { BreadcrumbItem } from '../index'

const Home = () => {
    return (
        <>
            <BreadcrumbItem to="/" >Home</BreadcrumbItem>
            <div id="content">

            </div>
            <h2>React Dynamic BreadCrumb</h2>
            <p>
                This package helps to create breadcrumb dynamically independent to routes.
            </p>

        </>
    )
}

export default Home;