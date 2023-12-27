import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import './Works.scss';

const WorksTitle = () => {
    return (
        <Toolbar className={`works-title-toolbar`}>
            <Typography
                variant={`h5`}
                component={`span`}
                className={`works-text`}
            >
                Selected Work
            </Typography>
        </Toolbar>
    )
};

export default WorksTitle;
