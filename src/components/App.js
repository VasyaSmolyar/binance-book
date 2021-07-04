import React, { Suspense } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Core } from './core/core.js';

import { Container, Navbar } from "react-bootstrap";

const Book = React.lazy(() => import('./pages/Book'));
const List = React.lazy(() => import('./pages/List'));

function App() {
    return (
        <Core>
            <Suspense fallback={<div>Loading...</div>}>
                <Container fluid>
                    <Navbar>

                    </Navbar>
                    <List />
                    <Book />
                </Container>
            </Suspense>
        </Core>
    );
}

export default App;