import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import React from "react";
import './Landing.scss';
import ContactButton from "./ContactButton";
import Title from "./Title";

export default function Landing () {
    return (
        <Box className={`position`}>
            <CssBaseline/>
            <Title/>
            <ContactButton/>
        </Box>
    );
}
