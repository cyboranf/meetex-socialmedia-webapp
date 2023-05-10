import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EntryPage from './components/EntryPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<EntryPage />} />
                {/* Add more routes as needed */}
            </Routes>
        </Router>
    );
}

export default App;
