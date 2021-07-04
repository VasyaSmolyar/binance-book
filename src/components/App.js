import React, { Suspense } from "react";

import '../styles/App.css';
import { Core } from './core/core.js';

const Book = React.lazy(() => import('./pages/Book'));

function App() {
    return (
        <Core>
            <Suspense fallback={<div>Loading...</div>}>
                <div>
                    <h1>Your React App!</h1>
                    <Book />
                </div>
            </Suspense>
        </Core>
    );
}

export default App;