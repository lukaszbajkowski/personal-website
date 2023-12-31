import React from 'react';
import Footer from "../LandingPage/Footer/Footer";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import './About.scss'
import {Grid, ThemeProvider} from "@mui/material";
import theme from "../Style/Theme";
import Title from "./Title";
import ContactLink from "./ContactLink";
import AboutContact from "./AboutContact";

export default function About () {
    return (
        <ThemeProvider theme={theme}>
            <Box className={`position-about`}>
                <CssBaseline/>
                <Title/>
                <Grid container spacing={0}>
                    <Grid item xs={12} md={6}>
                        <ContactLink/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <AboutContact/>
                    </Grid>
                </Grid>
            </Box>
            <Footer/>
        </ThemeProvider>
    );
}
