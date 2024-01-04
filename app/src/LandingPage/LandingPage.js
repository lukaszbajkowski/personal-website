import React from 'react';
import {Divider} from "@mui/material";
import Landing from "./Landing/Landing";
import Service from "./Service/Service";
import Works from "./Works/Works";
import Footer from "./Footer/Footer";
import './LandingPage.scss'

export default function LandingPage () {
    return (
        <>
            <Landing/>
            <Divider className={`divider`}/>
            <Service/>
            <Divider className={`divider`}/>
            <Works/>
        </>
    );
}
