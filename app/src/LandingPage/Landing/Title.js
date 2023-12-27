import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import './Landing.scss';

const Title = () => {
    return (
        <Toolbar className={`main-text-toolbar`}>
            <Typography
                variant={`h2`}
                component={`span`}
                className={`intro-text`}
            >
                Award-winning multidisciplinary designer and developer.
            </Typography>
        </Toolbar>
    )
};

export default Title;