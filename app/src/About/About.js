import React from 'react';
import Footer from "../LandingPage/Footer/Footer";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import './About.scss'
import {Link} from "react-router-dom";
import ArrowRightAltSharpIcon from "@mui/icons-material/ArrowRightAltSharp";
import {Grid, ThemeProvider} from "@mui/material";
import theme from "../Style/Theme";
import {aboutData} from "./AboutData";

export default function About() {
    return (
        <ThemeProvider theme={theme}>
            <Box className={`position-about`}>
                <CssBaseline/>
                <Toolbar className={`main-text-toolbar`}>
                    <Typography
                        variant={`h2`}
                        component={`span`}
                        className={`about-title`}
                    >
                        Traditionally trained designer who builds inspiring products.
                    </Typography>
                </Toolbar>
                <Grid container spacing={0}>
                    <Grid item xs={12} md={6}>
                        <Toolbar className={`about-toolbar contact-link-size`}>
                            <Link
                                to={`/contact`}
                            >
                                <Typography
                                    className={`contact-link`}
                                    component={`div`}
                                >
                                    <span>
                                        Get in contact
                                    </span>
                                    <ArrowRightAltSharpIcon className={`arrow-border`}/>
                                </Typography>
                            </Link>
                        </Toolbar>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Toolbar className={`about-toolbar-content contact-link-size`}>
                            <Box>
                                {aboutData.map((text, index) => (
                                    <Typography
                                        key={index}
                                        className={`about-text`}
                                        component={`p`}
                                    >
                                        {text}
                                    </Typography>
                                ))}
                            </Box>
                        </Toolbar>
                    </Grid>
                </Grid>
            </Box>
            <Footer/>
        </ThemeProvider>
    );
}
