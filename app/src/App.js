import Appbar from "./Appbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";

function App () {
    return (
        <Router>
            <div>
                <Appbar/>
                <Routes>
                    <Route path="/work" element={<div>Work Page</div>}/>
                    <Route path="/about" element={<div>About Page</div>}/>
                    <Route path="/contact" element={<div>Contact Page</div>}/>
                </Routes>
            </div>
        </Router>
    )
}

export default App;
