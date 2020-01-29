import React from 'react';
import { BreadcrumbItem } from '../index'

function Usage() {
    React.useEffect(() => {
        document.getElementById('content').innerHTML =
            marked(`
    
## 1. Wrap your code by provider
For example:
\`\`\`js
import { BreadProvider } from 'react-dynamic-breadcrumb';

ReactDOM.render(
<BreadProvider>
<App />
<BreadProvider/>
, document.getElementById('root'));
\`\`\`

## 2. Add BreadCrumb where you want to show your breadcrumb
For example in header:
\`\`\`js
import React from 'react';
import { Breadcrumb } from 'react-dynamic-breadcrumb';

export default function Header() {
return (
        <Breadcrumb containerClassName="dynamic-bread-crumb" separator="<strong>/</strong>" />

)
}
\`\`\`

## 2. Add BreadcrumbItem in page
Add BreadcrumbItem to each page.
\`\`\`js
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
\`\`\`


    `);
    }, [])
    return (
        <>
            <BreadcrumbItem to="/" >Home</BreadcrumbItem>
            <BreadcrumbItem  >Usage</BreadcrumbItem>

            <div id="content" style={{


                "height": "300px",
                "overflow-y": "scroll",
                "text-align": "justify",
                "background": "#64439e3d",
                "padding": "3px 30px"

            }}></div>
        </>
    )
}

export default Usage;