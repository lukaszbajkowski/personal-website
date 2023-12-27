import React from "react";
import './Service.scss'
import {ThemeProvider} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import ServicesContent from "./ServicesContent";
import ServiceTitle from "./ServiceTitle";
import theme from "../../Style/Theme";

export default function Service () {
    return (
        <ThemeProvider theme={theme}>
            <Box className={`services-position`}>
                <CssBaseline/>
                <ServiceTitle/>
                <ServicesContent/>
            </Box>
        </ThemeProvider>
    )
}
