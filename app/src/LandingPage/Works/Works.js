import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import React from "react";
import './Works.scss';
import WorksContent from "./WorksContent";
import WorksTitle from "./WorksTitle";
import WorksAll from "./WorksAll";

export default function Works () {
    return (
        <Box className={`works-position`}>
            <CssBaseline/>
            <WorksTitle/>
            <WorksContent/>
            <WorksAll/>
        </Box>
    );
}
