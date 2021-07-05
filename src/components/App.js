import React, { Suspense } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Core } from './core/core.js';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";  

import { Container, Navbar } from "react-bootstrap";

const Book = React.lazy(() => import('./pages/Book'));
const List = React.lazy(() => import('./pages/List'));

function App() {

    return (
        <Core>
            <Suspense fallback={<div>Loading...</div>}>
                <Container fluid>
                    <Router>
                        <Navbar>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Navbar.Brand>
                                    <Link to="/">Book</Link>
                                </Navbar.Brand>
                                <Navbar.Brand>
                                    <Link to="/list">List</Link>
                                </Navbar.Brand>
                            </Navbar.Collapse>
                        </Navbar>
                        <Switch>
                            <Route path="/list">
                                <List />
                            </Route>
                            <Route path="/">
                                <Book />
                            </Route>
                        </Switch>
                    </Router>
                    </Container>
            </Suspense>
        </Core>
    );
}

export default App;