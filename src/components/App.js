import React from "react";

import '../styles/App.css';
import { Core, pluginLoaders, pluginState } from './core/core.js';

import Book from './pages/Book';

function App() {
    return (
        <Core pluginLoaders={pluginLoaders} pluginState={pluginState}>
            <div>
                <h1>Your React App!</h1>
                <Book />
            </div>
        </Core>
    );
}

export default App;