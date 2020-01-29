import React from 'react';
import { BreadProvider } from '../index'
import Header from './Header';
import Sports from './Sports';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Home from './Home';
import NavBar from './Navbar';
import Football from './Football';
import Usage from './Usage';

function App() {
    return (
        <>
            <BrowserRouter>
                <BreadProvider >
                    <>

                        <div className="wrapper">
                            <div className="contents">
                                <div className="contents__inner">
                                    <h1>isaurssaurav / 反应-动态-面包屑</h1>
                                    <NavBar />
                                    <Header />
                                    {/* <Link to="/hello" >hello</Link>
                                    <Link to="/" >home</Link> */}

                                    <Switch>
                                        <Route exact path="/" exact >
                                            <Home />
                                        </Route>
                                        <Route path="/sports" exact >
                                            <Sports />
                                        </Route>
                                        <Route path="/sports/football" >
                                            <Football />
                                        </Route>
                                        <Route path="/usage" >
                                            <Usage />
                                        </Route>
                                    </Switch>

                                </div>



                                <br />

                            </div></div>

                        {/* <h1>hello</h1> */}
                        <div className="footer">
                            <p>saurssaurav33@gmail.com</p>
                        </div>
                    </>
                </BreadProvider>
            </BrowserRouter>







        </>

    )
}

export default App;