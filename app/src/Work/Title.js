import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import './Work.scss'

const Title = () => {
    return (
        <Toolbar className={`main-text-toolbar`}>
            <Typography
                variant={`h2`}
                component={`span`}
                className={`work-title`}
            >
                Selected Work.
            </Typography>
        </Toolbar>
    )
};

export default Title;
