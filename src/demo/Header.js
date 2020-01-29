import React from 'react';
import { Breadcrumb } from '../index'

function Header() {
    return (
        <>
            <Breadcrumb containerClassName="dynamic-bread-crumb" separator="<strong>/</strong>" />
        </>
    )
}

export default Header;