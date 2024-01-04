import React from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import './Work.scss'
import {ThemeProvider} from "@mui/material";
import theme from "../Style/Theme";
import Title from "./Title";
import WorkGrid from "./WorkGrid";

export default function Work () {
    return (
        <ThemeProvider theme={theme}>
            <Box className={`position-work`}>
                <CssBaseline/>
                <Title/>
                <WorkGrid/>
            </Box>
        </ThemeProvider>
    );
}
