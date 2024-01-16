import {BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom";
import React, {useEffect} from "react";
import LandingPage from "./LandingPage/LandingPage";
import Appbar from "./Appbar/Appbar";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Footer from "./LandingPage/Footer/Footer";
import Work from "./Work/Work";
import WorkDetails from "./WorkDetails/WorkDetails";
import {workData} from "./Work/WorkData";

function AppContainer () {
    const location = useLocation();

    useEffect(() => {
        const body = document.querySelector('body');

        switch (location.pathname) {
            case '/work':
            case '/contact':
                body.style.backgroundColor = '#e7eefd';
                break;
            case (location.pathname.match(/^\/work\/\d+$/) || {}).input:
                const id = parseInt(location.pathname.split('/').pop(), 10);
                const workItem = workData.find((item, index) => index + 1 === id);
                if (workItem) {
                    body.style.backgroundColor = workItem.color;
                } else {
                    body.style.backgroundColor = '#1131ca';
                }
                break;
            default:
                body.style.backgroundColor = '#1131ca';
                break;
        }

         window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div>
            <Appbar/>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/work" element={<Work/>}/>
                <Route path="/work/:id" element={<WorkDetails/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default function App () {
    return (
        <Router>
            <AppContainer/>
        </Router>
    );
}
