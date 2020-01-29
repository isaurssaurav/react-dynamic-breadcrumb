# React Dynamic Breadcrumb
react-dynamic-breadcumb helps to create breadcrumb dynamically independent to routes. It is quite simple and easy to use.

Simply wrap your code around `<BreadProvider />`, add `<BreadCrumb />` where you want to dispaly breadcrumb and add `<BreadcrumbItem />` in each page.

## Demo

## Installation
```
$ npm install react-dynamic-breadcumb 
```
## Usage

##### 1. Wrap your code by provider
For example:
```js
import { BreadProvider } from 'react-dynamic-breadcrumb';

ReactDOM.render(
<BreadProvider>
    <App />
<BreadProvider/>
, document.getElementById('root'));
```

##### 2. Add BreadCrumb where you want to show your breadcrumb
For exampel in header:
```js
import React from 'react';
import { Breadcrumb } from 'react-dynamic-breadcrumb';

export default function Header() {
    return (
            <Breadcrumb containerClassName="dynamic-bread-crumb" seperator="<strong>/</strong>" />

    )
}
```

##### 2. Add BreadcrumbItem in page
Add BreadcrumbItem to each page.
```js
import React from 'react';
import { BreadcrumbItem } from 'react-dynamic-breadcrumb';

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
```
## Props

| Name                | Type     | Default   | Description                                                          |
| ------------------- | -------- | --------- | -------------------------------------------------------------------- |
| separator       | string / html element   |    |  **Required.**  |
| containerClassName| string |  dynamic-bread-crumb|  wrapper class outside breadcrumb|


## LICENSE