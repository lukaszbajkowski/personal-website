import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import DrawerAppBar from "./App";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <div>
                <DrawerAppBar/>
                <Routes>
                    <Route path="/work" element={<div>Work Page</div>}/>
                    <Route path="/about" element={<div>About Page</div>}/>
                    <Route path="/contact" element={<div>Contact Page</div>}/>
                </Routes>
            </div>
        </Router>
    </React.StrictMode>
);

reportWebVitals();
