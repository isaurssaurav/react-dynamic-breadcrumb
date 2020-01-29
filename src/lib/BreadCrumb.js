import React from 'react';
import { throughArea } from 'react-through';
import { Link } from 'react-router-dom'

const Value = (props) => {
    /**
     * destructure -> sperator and links
     * 
     */
    const { separator, containerClassName = "dynamic-bread-crumb", ...rest } = props;
    const LinkKeys = Object.keys(rest);
    if (LinkKeys.length > 0) {
        return (

            <div className={containerClassName}>
                <ul>
                    {LinkKeys.map((link, index) => {
                        return (
                            <li>
                                {(index === 0) ? '' :
                                    <span dangerouslySetInnerHTML={{ __html: separator }} className="separator" ></span>
                                }
                                <Link
                                    to={props[link].to ? props[link].to : null}
                                    className={props[link].to ? "link" : "link disable"}
                                >{props[link].children}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    } else {
        return false
    }
}
export default throughArea('bread')(Value);