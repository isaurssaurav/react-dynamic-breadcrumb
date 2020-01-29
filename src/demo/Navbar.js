import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <>
            <nav>
                <ul className="menu">

                    <li className="menu__none"><Link to="/">React Dynamic BreadCrumb</Link></li>


                    <li className="menu__multi">
                        <a href="#" className="init-bottom">Pages</a>
                        <ul className="menu__second-level">
                            <li>
                                <Link to="/sports" className="init-right">Sports</Link>
                                <ul className="menu__third-level">
                                    <li><Link to="/sports/football">Football</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </li>



                    <li className="menu__none"><Link to="/">Usage</Link></li>



                </ul>
            </nav>


        </>
    )
}

export default NavBar;