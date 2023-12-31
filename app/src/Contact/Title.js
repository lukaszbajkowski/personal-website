import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import './Contact.scss'

const Title = () => {
    return (
        <Toolbar className={`main-text-toolbar`}>
            <Typography
                variant={`h2`}
                component={`span`}
                className={`contact-title`}
            >
                Talk to me.
            </Typography>
        </Toolbar>
    )
};

export default Title;
