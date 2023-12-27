import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import React from "react";
import './Footer.scss'
import AppBar from "@mui/material/AppBar";
import {Grid, ThemeProvider} from "@mui/material";
import Copyright from "./Copyright";
import SocialMediaIcon from "./SocialMediaIcon";
import theme from "../../Style/Theme";

export default function Footer () {
    return (
        <ThemeProvider theme={theme}>
            <Box>
                <CssBaseline/>
                <AppBar
                    color={"transparent"}
                    className={`footer`}
                >
                    <Grid
                        container
                        className={`footer-toolbar`}
                    >
                        <Copyright/>
                        <SocialMediaIcon/>
                    </Grid>
                </AppBar>
            </Box>
        </ThemeProvider>
    )
}
