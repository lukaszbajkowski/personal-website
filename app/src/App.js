import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import LandingPage from "./LandingPage/LandingPage";
import Appbar from "./Appbar/Appbar";
import About from "./About/About";

export default function App () {
    return (
        <Router>
            <Appbar/>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/work" element={<div>Work Page</div>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<div>Contact Page</div>}/>
            </Routes>
        </Router>
    )
}
