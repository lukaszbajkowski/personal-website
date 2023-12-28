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

const aboutData = [
    "Co-founder and CPO at Earth Cubs, where we help inspire kids to learn and love the world.",
    "Previously a Senior Solutions Engineer at AstraZeneca and Senior UI/UX Designer at pebble code.",
    "Experienced with clients ranging from global corporations to startups, including: Intel, AstraZeneca, Pearson, HSBC, National Grid, Lloyds Banking Group, IUCN, National Express, EDF, The World Bank.",
    "Having gained a first-class honours degree in graphic design at the University of Southampton, I’ve established a focus on an interactive and refined process.",
    "Minimal principles are the basis to my work, with a well thought out theory behind them. The focus of my work varies between mediums ranging from; user experience and interfaces, web design and development, branding, typography and print.",
    "My belief and passion for feedback and discussions on design helps maintain multiple perspectives – seeing it as the key to working agile and efficiently – resulting in refined outcomes."
];

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
                        <Toolbar className={`contact-toolbar contact-link-size`}>
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
                        <Toolbar className={`about-toolbar contact-link-size`}>
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
