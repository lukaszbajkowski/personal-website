import React from 'react';
import Footer from "../LandingPage/Footer/Footer";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import './Contact.scss'
import {Grid, ThemeProvider} from "@mui/material";
import theme from "../Style/Theme";
import {Link} from "react-router-dom";
import ArrowRightAltSharpIcon from "@mui/icons-material/ArrowRightAltSharp";
import Form from "./Form";

export default function Contact () {
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
                        Talk to me.
                    </Typography>
                </Toolbar>
                <Grid container
                      spacing={0}
                      className={`contact-grid`}
                >
                    <Grid item xs={12} md={6}>
                        <Toolbar className={`contact-page-toolbar`}>
                            <Typography
                                variant={`h5`}
                                component={`span`}
                                className={`contact-text`}
                            >
                                Want to say hello or have a question? Ping me.
                            </Typography>
                        </Toolbar>
                        <Toolbar className={`contact-mail-toolbar`}>
                            <Link
                                to={`mailto:contact.lukasz.bajkowski@gmail.com`}
                                className={`mail-box`}
                            >
                                <Typography
                                    className={`mail-link`}
                                    component={`div`}
                                >
                            <span>
                                Send me an email
                            </span>
                                    <ArrowRightAltSharpIcon className={`arrow-border`}/>
                                </Typography>
                            </Link>
                        </Toolbar>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Form/>
                    </Grid>
                </Grid>
            </Box>
            <Footer/>
        </ThemeProvider>
    );
}
