import Typography from "@mui/material/Typography";
import {Grid} from "@mui/material";
import React from "react";
import './Footer.scss'

const Copyright = () => {
    return (
        <Grid
            item
            xs={12}
            md
            className={`toolbar-box`}
        >
            <Typography
                variant="h4"
                component="span"
                className={`copyright footer-text`}
            >
                2023 © Łukasz Bajkowski
            </Typography>
        </Grid>
    )
};

export default Copyright;
