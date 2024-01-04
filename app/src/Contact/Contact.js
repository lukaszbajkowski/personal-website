import React from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import './Contact.scss'
import {Grid, ThemeProvider} from "@mui/material";
import theme from "../Style/Theme";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import ContactEmail from "./ContactEmail";
import Title from "./Title";

export default function Contact () {
    return (
        <ThemeProvider theme={theme}>
            <Box className={`position-about`}>
                <CssBaseline/>
                <Title/>
                <Grid
                    container
                    spacing={0}
                    className={`contact-grid`}
                >
                    <Grid
                        item
                        xs={12}
                        md={6}
                    >
                        <ContactInfo/>
                        <ContactEmail/>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                    >
                        <ContactForm/>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
}
