import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import './About.scss';

const Title = () => {
    return (
        <Toolbar className={`main-text-toolbar`}>
            <Typography
                variant={`h2`}
                component={`span`}
                className={`about-title`}
            >
                Traditionally trained designer who builds inspiring products.
            </Typography>
        </Toolbar>
    )
};

export default Title;
